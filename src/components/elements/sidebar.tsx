import { css } from "../../styles/styles";

interface Props {
}

export default function Sidebar(props: Props) {
    return (
    <div className={styles.div()}>
        Lorem
    </div>
)
}

const styles = {
    div: css({
        display: "flex",
        backgroundColor: "#2C2F30",
        width: 340,
        height: "100vh",
        paddingTop: 64,
    }),
}