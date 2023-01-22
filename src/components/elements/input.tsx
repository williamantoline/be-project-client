import { css } from "../../styles/styles";

interface Props {
    label: string,
    type: string,
    id: string,
}

export default function Input(props: Props) {
    return (
    <div className={styles.div()}>
        <label className={styles.label()} htmlFor="">{props.label}</label>
        <input className={styles.input()} type={props.type} id={props.id} />
    </div>
)
}

const styles = {
    div: css({
        display: "flex",
        flexDirection: "column",
        marginBottom: 20
    }),
    label: css({

    }),
    input: css({
        marginTop: 6,
        width: 240,
        height: 28,
        borderRadius: 4,
        border: 0
    }),
}