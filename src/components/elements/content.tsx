import { css } from "../../styles/styles";
import Text from "./text";
import {HiOutlineHeart, HiHeart, HiOutlinePencil, HiOutlineTrash} from "react-icons/hi2"
import { useCallback, useEffect, useState } from "react";
import ActionIcon from "./action-icon";
import StatefulIcon from "./stateful-icon";
import Flex from "./flex";
import { FlexType } from "../../enum";
import NoteInput from "./note-input";
import Modal from "./modal";
import axios from "axios";
import Input from "./input";
const Cookie = require("js-cookie");

interface Props {
    file: any,
    onClick?: () => void,
    onFresh: (withShowing: boolean) => void,
    handleIsAddingOnChange: (e: any) => void,
    isAdding: boolean,
}

export default function Content(props: Props) {
    let iconStyles = { color: "white", fontSize: '32px', backgroundColor: "transparent", marginLeft: 8 };

    useEffect(() => {
        setEditedTitle(props.file.title);
        setEditedNote(props.file.note.content);
        setIsLiked(props.file.isLiked);
    }, [props.file])

    const [isLiked, setIsLiked] = useState(props.file.isLiked);
    const handleIsLikedClick = () => {
        setIsLiked(!isLiked);
        axios.patch(`http://localhost:3014/api/files/${props.file.id}/update-isliked`, {
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
        //todo
    };
    
    const handleEdit = () => {
        handleIsEditModeChange();
    }

    const [editedTitle, setEditedTitle] = useState(props.file.title);
    const handleEditedTitleChange = useCallback(
        (event: any) => {
            setEditedTitle(event.target.value);
        },
        [setEditedTitle]
    );

    const [editedNote, setEditedNote] = useState(props.file.note.content);
    const handleEditedNoteChange = useCallback(
        (event: any) => {
            setEditedNote(event.target.value);
        },
        [setEditedNote]
    );

    const handleSaveNote = () => {
        setIsEditMode(false);
        if (props.file.new) {
            axios.post(`http://localhost:3014/api/files`, {
                type: 'note',
                title: editedTitle,
                content: editedNote,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Cookie.get('token'),
                }
            })
            .then((res: any) => {
                alert(res.data.message);
                props.onFresh(false);
                props.handleIsAddingOnChange("note");
            });
            return;
        }

        axios.put(`http://localhost:3014/api/files/${props.file.id}`, {
            title: editedTitle,
            content: editedNote,
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

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3014/api/files/${props.file.id}`, {
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
            <div className={styles.div()} onClick={props.onClick}>

                <div className={styles.subheader()}>
                    <div className={styles.title()}>
                        {
                            isEditMode ? <Input label="title" type="text" value={editedTitle} onChange={handleEditedTitleChange} id="title" /> : <Text size={24} weight={800}>{editedTitle}</Text>
                        }
                    </div>
                    <div className={styles.icons()}>
                        <Flex type={FlexType.row}>
                            <StatefulIcon state={isLiked} onClick={handleIsLikedClick} offIcon={HiOutlineHeart} onIcon={HiHeart} styles={iconStyles} />
                            <ActionIcon icon={HiOutlinePencil} onClick={handleEdit} styles={iconStyles} />
                            <ActionIcon icon={HiOutlineTrash} styles={iconStyles} isModalToggler modalTarget="#deleteNoteModal" />
                        </Flex>
                    </div>
                </div>
                
                <div className={styles.subtitle()}>
                    <div className={styles.subtitleItem()}>
                        <Text color="#7B7B7B">NOTES</Text>
                    </div>
                    <div className={styles.subtitleItem()}>
                        <Text color="#7B7B7B" style={{display: "inline"}}>Created
                            <Text weight={700} style={{display: "inline"}}> {(new Date(props.file.note.createdAt).toLocaleString())}</Text>
                        </Text>
                    </div>
                    <div className={styles.subtitleItem()}>
                        <Text color="#7B7B7B" style={{display: "inline"}}>Last Updated
                            <Text weight={700} style={{display: "inline"}}> {(new Date(props.file.note.updatedAt).toLocaleString())}</Text>
                        </Text>
                    </div>
                </div>

                <div className={styles.notes()}>
                    {
                        isEditMode ? <NoteInput state={isEditMode} setState={handleIsEditModeChange} children={editedNote} onChange={handleEditedNoteChange} onSave={handleSaveNote} /> : <Text children={editedNote} />
                    }
                </div>
            </div>
            <Modal id="deleteNoteModal" buttonLabel="Delete" buttonClickHandler={handleDelete} title="Delete Note" body="Are you sure want to delete this note?" />
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
    icons: css({
        
    }),
    subtitle: css({
        marginBottom: 36
    }),
    subtitleItem: css({
        marginBottom: 6
    }),
    content: css({
        lineHeight: 1.5,
        fontSize: 15,
        fontWeight: 500
    }),
    time: css({
        margin: 6
    }),
    notes: css({
        lineHeight: 1.5,
        fontSize: 15,
        fontWeight: 500
    }),
}