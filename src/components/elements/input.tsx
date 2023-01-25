import { css } from "../../styles/styles";

interface Props {
    label: string,
    type: string,
    id: string,
    value: string,
    onChange: (event: any) => void,
    styles?: object
}

export default function Input(props: Props) {
    return (
        <div className={styles.div()} style={props.styles}>
            <label className={styles.label()} htmlFor="">{props.label}</label>
            <input className={styles.input()} type={props.type} id={props.id} value={props.value} onChange={props.onChange} />
        </div>
    )
}

const styles = {
    div: css({
        display: "flex",
        flexDirection: "column",
        marginBottom: 16
    }),
    label: css({
        fontSize: 16
    }),
    input: css({
        borderRadius: 10,
        border: 0,
        width: 330,
        height: 36,
        marginTop: 4,
        marginBottom: 6,
        padding: "0 12px",
        outline: "none",
    }),
}