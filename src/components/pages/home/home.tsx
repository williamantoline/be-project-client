import Container from "../../elements/container";
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";

interface Props {};

export default function Home(props: Props) {
    return (
        <Container color="#1F2123">
            <Header />
            <Sidebar />
            
        </Container>
    );
}
