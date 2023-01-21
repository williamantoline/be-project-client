import { css } from "../../styles/styles";

export default function Container(props: { children: React.ReactNode }) {
    return <div className={styles.container()}>{props.children}</div>
}

const styles = {
    container: css({
        padding: "0px",
    }),
}