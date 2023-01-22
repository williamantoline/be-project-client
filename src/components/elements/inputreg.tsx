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
        marginBottom: 10,
    }),
    label: css({
        fontSize: 19
    }),
    input: css({
        marginTop: 3,
        marginBottom: 1,
        width: 330,
        height: 39,
        borderRadius: 10,
        border: 0,
    }),
}