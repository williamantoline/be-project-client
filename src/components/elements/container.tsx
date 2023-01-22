import { css } from "../../styles/styles";

interface Props {
    color?: string,
    children: React.ReactNode
}

export default function Container(props: Props) {
    return <div style={{backgroundColor: props.color}} className={styles.container()}>{props.children}</div>
}

const styles = {
    container: css({
        padding: "0px",
    }),
}