import { css } from "../../styles/styles";
import Text from "./text";

interface Props {
    onClick: () => void,
    type: string,
}

export default function FileCardTemplate(props: Props) {
    return (
        <div className={styles.div()} onClick={props.onClick}>
            <div className={styles.left()}>
                <Text color={"#ffffff"} weight={600} size={14}>Untitled</Text>
                <Text style={{marginTop: 8, overflow: "hidden", height: 30, lineHeight: 1.4}} weight={400} size={10}>...</Text>
                <Text style={{marginTop: 24}} color={"#7B7B7B"} size={11}>{props.type}</Text>
            </div>
        </div>
    )
}

const styles = {
    div: css({
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 120,
        backgroundColor: "#000000",
        borderRadius: 6,
        padding: 16,
        marginBottom: 8,
        "&:hover": {
            background: "#313135",
            border: "3px solid white"
        },
    }),
    left: css({
        width: "90%"
    }),
    right: css({
        width: "10%",
        img: {
            widht: 28,
            height: 28
        }
    }),
}