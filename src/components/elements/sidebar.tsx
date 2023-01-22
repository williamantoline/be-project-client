import { css } from "../../styles/styles";
import Text from "./text";
import Button from "./button";
import Container from "./container";
import FileCard from "./file-card";

interface Props {
}

export default function Sidebar(props: Props) {
    return (
    <div className={styles.div()}>
        <Text style={{marginBottom: 24}} size={16} weight={600}>My Items</Text>
        {/* <Button>Filter</Button> */}
        {/* <Button>Sort</Button> */}
        <Container>
            <FileCard></FileCard>
            <FileCard></FileCard>
            <FileCard></FileCard>
        </Container>
    </div>
)
}

const styles = {
    div: css({
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#2C2F30",
        width: 340,
        height: "100vh",
        color: "$white0",
        padding: "84px 24px 28px 24px",
        cursor: "pointer",
    }),
}