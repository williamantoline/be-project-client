import axios from "axios";
import { useState } from "react";
import { css } from "../../styles/styles";
import Button from "./button";
import Input from "./input";
import { endpoint } from "../../config";
const Cookie = require("js-cookie");

interface Props {
    id: string,
    title: string,
    onFresh: (withShowing: boolean) => void,
}

export default function AddTodoModal(props: Props) {
    const [title, setTitle] = useState("");
    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    }

    const handleAddTodo = () => {
        axios.post(`${endpoint}/api/files`, {
                type: 'todo',
                title: title,
                content: "",
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Cookie.get('token'),
                }
            })
            .then((res: any) => {
                alert(res.data.message);
                props.onFresh(false);
                setTitle("");
            });
            return;
    }

    return (
        <div className="modal fade" id={props.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{props.title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <Input styles={{border: "1px solid black"}} label="Title: " id="title" type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div className="modal-footer">
                    <Button isModalButton style={{cursor: "pointer"}} className="btn btn-secondary" dataBsDismiss="modal">Close</Button>
                    <Button isModalButton style={{cursor: "pointer"}} className="btn btn-primary" dataBsDismiss="modal" onClick={handleAddTodo}>Add Note</Button>
                </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: css({
        padding: "0px",
    }),
}