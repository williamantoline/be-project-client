import Container from "../../elements/container";
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import Content from "../../elements/content";
const notes = require("../../../data/notes.json");

interface Props {};

export default function Home(props: Props) {
    return (
        <Container color="#1F2123">
            <Header />
            <div style={{display: "flex"}}>
                <Sidebar />
                <Content note={notes[0]} type='note' createdAt="2023-01-01" updatedAt="2023-01-01" />
            </div>
        </Container>
    );
}
