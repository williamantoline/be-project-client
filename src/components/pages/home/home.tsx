import Container from "../../elements/container";
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import Content from "../../elements/content";
import ContentToDoList from "../../elements/contenttodolist";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Modal from "../../elements/modal";
const { endpoint } = require("../../../config");

const Cookie = require("js-cookie");

interface Props {};

interface Showing {
    title: string,
    note: any,
    todo: any,
    isLiked: boolean,
    filableType?: string,
    new?: boolean,
}

export default function Home(props: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [files, setFiles] = useState([]);
    const [isShowing, setIsShowing] = useState(false);
    const showing_: Showing = {
        title: "Untitled",
        isLiked: false,
        note: {
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        todo: {
            createdAt: new Date(),
            updatedAt: new Date(),
            todoItems: [],
        },
        filableType: 'note',
        new: true,
    };
    const [showing, setShowing] = useState(showing_);
    const [isAdding, setIsAdding] = useState(false);
    const [isAddingNote, setIsAddingNote] = useState(false);
    const [isAddingTodo, setIsAddingTodo] = useState(false);

    React.useEffect(() => {
        axios.post(`${endpoint}/auth/jwtToken`, { name: 'John Doe' }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any)=>{
            if(res.data.tokenStatus !== true){
                window.location.replace("/login");
            }
        })
    }, []);

    const fetchFiles = async () => {
        setIsLoading(true);
        await axios.get(`${endpoint}/api/files`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any) => {
            setFiles(res.data.data);
            setIsLoading(false);
        });
    };

    const fresh = (withShowing = false) => {
        fetchFiles();
        if (withShowing) setIsShowing(false);
    }

    useEffect(() => {
        fetchFiles();
    }, []);

    const handleOnFileChange = async (file: any) => {
        await axios.get(`${endpoint}/api/files/${file.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any) => {
            setIsAdding(false);
            setShowing(res.data.data);
            setIsShowing(true);
            fresh(false);
        });
    }

    const handleFileTemplateOnClick = () => {
        setShowing(showing_);
        setIsShowing(true);
    }

    const handleAddNote = () => {
        showing_.filableType = 'note';
        setIsAddingNote(!isAddingNote);
        setIsAddingTodo(false);
        if (!isAddingNote) {
            setShowing(showing_);
            setIsShowing(true);
        } else {
            setIsShowing(false);
        }
    }

    const handleAddTodo = () => {
        showing_.filableType = 'todo';
        setIsAddingTodo(!isAddingTodo);
        setIsAddingNote(false);
        if (!isAddingTodo) {
            setShowing(showing_);
            setIsShowing(true);
        } else {
            setIsShowing(false);
        }
    }


    return (
        <>
            <Container color="#1F2123">
                <Header />
                <div style={{display: "flex"}}>
                    <Sidebar onFileTemplateOnClick={handleFileTemplateOnClick} isAddingNote={isAddingNote} isAddingTodo={isAddingTodo} onAddNote={handleAddNote} onAddTodo={handleAddTodo} onFileChange={handleOnFileChange} onFresh={fresh} isLoading={isLoading} files={files} />
                    {
                        isShowing && showing && showing.filableType ? 
                        (
                            showing.filableType === 'note' ? <Content isAdding={isAdding} handleIsAddingOnChange={handleOnFileChange} onFresh={fresh} file={showing} /> : <ContentToDoList onFresh={fresh} file={showing}/>
                        )
                        :
                        <></>
                    }
                </div>
            </Container>
        </>
    );
}
