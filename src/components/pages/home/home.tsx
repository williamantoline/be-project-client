import Container from "../../elements/container";
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import Content from "../../elements/content";

interface Props {};

export default function Home(props: Props) {
    return (
        <Container color="#1F2123">
            <Header />
            <div style={{display: "flex"}}>
                <Sidebar />
                <Content />
            </div>
        </Container>
    );
}
