import Container from "../../elements/container";
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import Content from "../../elements/content";
import ContentToDoList from "../../elements/contenttodolist";
import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Cookie = require("js-cookie");
const notes = require("../../../data/notes.json");

interface Props {};

export default function Home(props: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [files, setFiles] = useState([]);
    const [isShowing, setIsShowing] = useState(false);
    const [showing, setShowing] = useState({type: 'note'});

    React.useEffect(() => {
        axios.post(`http://127.0.0.1:3013/auth/jwtToken`, { name: 'John Doe' }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any)=>{
            if(res.data.tokenStatus === false){
                console.log('Go to Home Page');
                <Navigate replace to="/login" />
            }
        })
    }, []);

    React.useEffect(() => {
        axios.get(`http://127.0.0.1:3013/api/notes`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any) => {
            setFiles(res.data.data);
            setIsLoading(false);
        })
    }, []);

    const handleOnFileChange = (file: any) => {
        setShowing(file);
        setIsShowing(true);
    }

    console.log(showing);

    return (
        <>
            <Container color="#1F2123">
                <Header />
                <div style={{display: "flex"}}>
                    <Sidebar onFileChange={handleOnFileChange} isLoading={isLoading} files={files} />
                    {
                        isShowing && showing ? 
                        (
                            showing.type === 'note' ? <Content note={showing} /> : <ContentToDoList todo={showing}/>
                        )
                        :
                        <></>
                    }
                    {/* <Content note={files[0]} type='note' /> */}
                    {/* <ContentToDoList todo={notes[0]} type='TODO' createdAt="2023-01-01" updatedAt="2023-01-01"/> */}
                </div>
            </Container>
        </>
    );
}
