import { css } from "../../styles/styles";
import Text from "./text";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import ActionIcon from "./action-icon";
import { useCallback, useEffect, useState } from "react";
import Modal from "./modal";
import Input from "./input";
import Button from "./button";
import axios from "axios";
import { endpoint } from "../../config";
const Cookie = require("js-cookie");

interface Props {
    title?: string,
    content?: string,
    type?: string,
    item: any,
    fileId: string,
    onChange: (itemId: string) => void,
    onDelete: () => void,
    onUpdate: (editedContent: string) => void,
    onCheckedUpdate: (data: any) => void,
}

export default function List(props: Props) {
    let iconStyles = { color: "white", fontSize: "24px", backgroundColor: "transparent", margin: 7};
    let inputStyles = {
        width: "100%",
        color: "white",
        outline: "none",
        border: "none",
        height: 30,
        fontSize: 18,
        marginLeft: 12,
    };

    const [isEditMode, setIsEditMode] = useState(false);
    const handleIsEditModeChange = () => {
        props.onChange(props.item.id);
        setIsEditMode(!isEditMode);
    };

    const [editedContent, setEditedContent] = useState(props.item.content);
    const handleEditedContentChange = useCallback(
        (event: any) => {
            setEditedContent(event.target.value);
        },
        [setEditedContent]
    );

    const [isChecked, setIsChecked] = useState(props.item.isChecked);
    const handleIsCheckedChange = async () => {
        await axios.patch(`${endpoint}/api/files/${props.fileId}/${props.item.id}/edit-todo-item-check`, {
            isChecked: !isChecked,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        }).then((res: any) => {
            alert(res.data.message);
            props.onCheckedUpdate(res.data.data);
        });
    }

    useEffect(() => {
        setEditedContent(props.item.content);
        setIsChecked(props.item.isChecked);
    }, [props.item]);

    const handleDelete = async () => {
        props.onDelete();
    }

    const handleUpdate = async () => {
        setIsEditMode(!isEditMode);
        props.onUpdate(editedContent);
    }

    const handleChangeActive = () => {
        props.onChange(props.item.id);
    }

    return (
        <>
            <div className={styles.div()}>
                <div className={styles.top()}>
                    <input type="checkbox" className={styles.checkbox()} checked={isChecked} onChange={handleIsCheckedChange} />
                    {
                        isEditMode
                        ?
                        <Input label="" type="text" value={editedContent} onChange={handleEditedContentChange} id="title" styles={inputStyles} /> 
                        :
                        <Text style={{marginLeft: 20, width: "90%"}}>{editedContent}</Text>
                    }
                    <div className={styles.icon()}>
                        {
                            isEditMode
                            ?
                            <Button onClick={handleUpdate} isMedium style={{background: "green", color: "white", float: "right", marginTop: 8}}>Save</Button>
                            :
                            <ActionIcon icon={HiOutlinePencil} styles={iconStyles} onClick={handleIsEditModeChange} />
                        }
                        <ActionIcon onClick={handleChangeActive} icon={HiOutlineTrash} styles={iconStyles} isModalToggler modalTarget="#deleteTodoItemModal" />
                    </div>
                </div>
            </div>
            <Modal styles={{color: "black"}} id="deleteTodoItemModal" buttonLabel="Delete" buttonClickHandler={handleDelete} title="Delete Note" body="Are you sure want to delete this note?" />
        </>
    )
}

const styles = {
    div: css({
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 72,
        marginBottom: 8,
        borderBottom: "1px solid #636363"
    }),
    top: css({
        width: "100%",
        display: "flex",
        alignItems: "center",
    }),
    inputtext: css({
        width: "100%"
    }),
    icon: css({
        display: "flex"
    }),
    checkbox: css({
        width: 24,
        height: 24
    })
}