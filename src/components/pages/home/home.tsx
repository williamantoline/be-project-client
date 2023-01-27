import Container from "../../elements/container";
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import Content from "../../elements/content";
import ContentToDoList from "../../elements/contenttodolist";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Cookie = require("js-cookie");

interface Props {};

interface Showing {
    filableType?: string,
}

export default function Home(props: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [files, setFiles] = useState([]);
    const [isShowing, setIsShowing] = useState(false);
    const showing_: Showing = {};
    const [showing, setShowing] = useState(showing_);

    React.useEffect(() => {
        axios.post(`http://127.0.0.1:3014/auth/jwtToken`, { name: 'John Doe' }, {
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
        await axios.get(`http://127.0.0.1:3014/api/files`, {
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
                        isShowing && showing && showing.filableType ? 
                        (
                            showing.filableType === 'note' ? <Content onFresh={fresh} file={showing} /> : <ContentToDoList todo={showing}/>
                        )
                        :
                        <></>
                    }
                </div>
            </Container>
        </>
    );
}
