import { css } from "../../styles/styles";
import Button from "./button";

interface Props {
    styles?: object,
    children: any,
    state: any,
    setState: any,
    onChange: (event: any) => void,
    onSave: () => void,
}

export default function NoteInput(props: Props) {
    return (
        <div className={styles.div()} style={props.styles}>
            <textarea rows={16} className={styles.textarea()} onChange={props.onChange}>
                {props.children}
            </textarea>
            <Button onClick={props.onSave} isMedium style={{background: "green", color: "white", float: "right", marginTop: 8}}>Save</Button>
            <Button onClick={props.setState} isMedium style={{background: "black", color: "white", float: "right", marginTop: 8, marginRight: 12}}>Cancel</Button>
        </div>
    )
}

const styles = {
    div: css({
    }),
    textarea: css({
        fontFamily: "inherit",
        width: "100%",
        padding: 12,
        boxSizing: "border-box",
        fontWeight: 500,
        lineHeight: 1.5
    }),
}