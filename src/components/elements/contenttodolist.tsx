import { css } from "../../styles/styles";
import Text from "./text";
import ActionIcon from "./action-icon";
import Input from "./input";
import List from "./todolist";
import {RiAddBoxLine} from "react-icons/ri";
import {HiOutlineTrash, HiOutlinePencil, HiOutlineHeart, HiHeart} from "react-icons/hi2";
import React, { useCallback, useState } from "react";
import Button from "./button";
import axios from "axios";
import Modal from "./modal";
import Flex from "./flex";
import StatefulIcon from "./stateful-icon";
import { FlexType } from "../../enum";
import { endpoint } from "../../config";
const Cookie = require("js-cookie");


interface Props {
    file: any,
    onFresh: (withShowing: boolean) => void,
}

export default function ContentToDoList(props: Props) {
    let iconStyles = { color: "white", fontSize: '32px', backgroundColor: "transparent", marginLeft: 8 };

    const [isLiked, setIsLiked] = useState(props.file.isLiked);
    const handleIsLikedClick = () => {
        setIsLiked(!isLiked);
        axios.patch(`${endpoint}/api/files/${props.file.id}/update-isliked`, {
            isLiked: !isLiked,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any) => {
            alert(res.data.message);
            props.onFresh(false);
        });
    }

    const [isEditMode, setIsEditMode] = useState(false);
    const handleIsEditModeChange = () => {
        setIsEditMode(!isEditMode);
    };

    const [editedTitle, setEditedTitle] = useState(props.file.title);
    const handleEditedTitleChange = useCallback(
        (event: any) => {
            setEditedTitle(event.target.value);
        },
        [setEditedTitle]
    );

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState(props.file.todo.todoItems);
    const [activeItem, setActiveItem] = useState("");

    const handleOnChange = (itemId: string) => {
        setActiveItem(itemId);
        console.log(itemId);
    }

    const handleInputOnChange = (event: any) => {
        setInputValue(event.target.value);
    }

    const handleEdit = () => {
        handleIsEditModeChange();
    }

    const handleAddTodo = async () => {
        await axios.patch(`${endpoint}/api/files/${props.file.id}/add-todo-item`, {
            content: inputValue,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any) => {
            alert(res.data.message);
            setInputValue("");
            setTodos(res.data.data);
            props.onFresh(false);
        });
    }
    
    const handleUpdateTitle = () => {
        setIsEditMode(false);
        axios.patch(`${endpoint}/api/files/${props.file.id}/update-title`, {
            title: editedTitle,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any) => {
            alert(res.data.message);
            setIsEditMode(false);
            props.onFresh(false);
        });
    }

    const handleUpdateTodoItem = async (editedContent: string) => {
        if (activeItem === '') return;
        await axios.patch(`${endpoint}/api/files/${props.file.id}/${activeItem}/edit-todo-item`, {
            content: editedContent,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        }).then((res: any) => {
            console.log(res.data.data);
            alert(res.data.message);
            setTodos(res.data.data);
        });
    }

    const handleUpdateCheckedTodoItem = async (isChecked: boolean) => {
        if (activeItem === '') return;
        await axios.patch(`${endpoint}/api/files/${props.file.id}/${activeItem}/edit-todo-item-check`, {
            isChecked: isChecked,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        }).then((res: any) => {
            alert(res.data.message);
            setTodos(res.data.data);
            props.onFresh(false);
        });
    }

    const handleDeleteTodoItem = async () => {
        if (activeItem === '') return;
        await axios.delete(`${endpoint}/api/files/${props.file.id}/${activeItem}/delete-todo-item`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        }).then((res: any) => {
            alert(res.data.message);
            setTodos(res.data.data);
            props.onFresh(false);
        });
    }


    const handleDelete = async () => {
        await axios.delete(`${endpoint}/api/files/${props.file.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any) => {
            alert(res.data.message);
            props.onFresh(true);
        });
    }

    return (
        <>
            <div className={styles.div()}>
                <div className={styles.subheader()}>
                    <div className={styles.title()}>
                        {
                            isEditMode 
                            ? 
                            (
                                <>
                                    <Flex>
                                        <Input label="" type="text" value={editedTitle} onChange={handleEditedTitleChange} id="title" /> 
                                        <Button onClick={handleUpdateTitle} isMedium style={{background: "green", color: "white", float: "right", marginLeft: 12}}>Save</Button>
                                    </Flex>
                                </>
                            )
                            : 
                            (
                                <>
                                    <Text size={24} weight={800}>{editedTitle}</Text>
                                    <ActionIcon icon={HiOutlinePencil} onClick={handleEdit} styles={iconStyles}/>
                                </>
                            )
                        }
                    </div>
                    <div className={styles.icon()}>
                        <Flex type={FlexType.row}>
                            <StatefulIcon state={isLiked} onClick={handleIsLikedClick} offIcon={HiOutlineHeart} onIcon={HiHeart} styles={iconStyles} />
                            <ActionIcon icon={HiOutlineTrash} styles={iconStyles} isModalToggler modalTarget="#deleteTodoModal" />
                        </Flex>
                    </div>
                </div>
                <div className={styles.center()}>
                    <div>
                        <Text size={19} weight={500} style={{display: "inline"}}>Add todo: </Text>
                    </div>
                    <div className={styles.input()}>
                        <Input label="" type="text" id="addlist" value={inputValue} onChange={handleInputOnChange}/>
                    </div>
                    <div>
                        <ActionIcon icon={RiAddBoxLine} onClick={handleAddTodo} styles={iconStyles}/>
                    </div>
                </div>
                <div className={styles.subtitle()}>
                    <div className={styles.subtitleItem()}>
                        <Text color="#7B7B7B">TODO</Text>
                    </div>
                    <div className={styles.subtitleItem()}>
                        <Text color="#7B7B7B" style={{display: "inline"}}>Created
                            <Text weight={700} style={{display: "inline"}}> {(new Date(props.file.todo.createdAt).toLocaleString())}</Text>
                        </Text>
                    </div>
                    <div className={styles.subtitleItem()}>
                        <Text color="#7B7B7B" style={{display: "inline"}}>Last Updated
                            <Text weight={700} style={{display: "inline"}}> {(new Date(props.file.todo.updatedAt).toLocaleString())}</Text>
                        </Text>
                    </div>
                </div>

                <div className={styles.todolist()}>
                    {todos.map((todo: any) => {
                        return <List onChange={handleOnChange} item={todo} onDelete={handleDeleteTodoItem} onUpdate={handleUpdateTodoItem} onCheckedUpdate={handleUpdateCheckedTodoItem}></List>
                    })}
                </div>
            </div>
            <Modal id="deleteTodoModal" buttonLabel="Delete" buttonClickHandler={handleDelete} title="Delete Todo" body="Are you sure want to delete this todo?" />
        </>
        
)}

const styles = {
    div: css({
        width: "75%",
        flexDirection: "column",
        display: "flex",
        height: "100vh",
        color: "$white0",
        padding: "108px 32px 28px 32px",
    }),
    subheader: css({
        display: "flex",
        justifyContent: "space-between"
    }),
    title: css({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 24,
        alignItems: "center",
    }),
    icon: css({
    }),
    center: css({
        margin: "30px 0",
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
        textAlign: "center",
        verticalAlign: "middle",
    }),
    input: css({
        marginBottom: "-18px",
        marginLeft: "20px",
    }),
    subtitle: css({
        marginBottom: 12
    }),
    subtitleItem: css({
        marginBottom: 6
    }),
    todolist: css({
        height: 360,
        overflowX: "scroll"
    })
}