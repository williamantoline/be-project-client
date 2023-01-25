import Container from "../../elements/container";
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import Content from "../../elements/content";
import { useState } from "react";
const notes = require("../../../data/notes.json");

interface Props {};

export default function Home(props: Props) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <Container color="#1F2123">
                <Header />
                <div style={{display: "flex"}}>
                    <Sidebar isLoading={isLoading} notes={notes} />
                    <Content note={notes[0]} type='note' createdAt="2023-01-01" updatedAt="2023-01-01" />
                </div>
            </Container>

        </>
    );
}
