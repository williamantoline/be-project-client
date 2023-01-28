import { css } from "../../styles/styles";

interface Props {
    type?: string,
    color?: string,
    children: React.ReactNode
}

export default function Container(props: Props) {
    return <div style={{backgroundColor: props.color, display: props.type}} className={styles.container()}>{props.children}</div>
}

const styles = {
    container: css({
        padding: "0px",
        height: "100vh",
        overflow: "hidden"
    }),
}