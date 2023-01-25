import { css } from "../../styles/styles";
import Text from "./text";
import { FileType } from "../../enum";
const IcPin = require("../../assets/ic-pin.png");

interface Props {
    title?: string,
    content?: string,
    type?: FileType,
}

export default function FileCard(props: Props) {
    return (
    <div className={styles.div()}>
        <div className={styles.left()}>
            <Text color={"#ffffff"} weight={600} size={14}>{props.title}</Text>
            <Text style={{marginTop: 8}} weight={400} size={10}>{props.content}</Text>
            <Text style={{marginTop: 24}} color={"#7B7B7B"} size={12}>{props.type}</Text>
        </div>
        <div className={styles.right()}>
            <img src={IcPin} alt="" />
        </div>
    </div>
)
}

const styles = {
    div: css({
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 100,
        backgroundColor: "#000000",
        borderRadius: 6,
        padding: 16,
        marginBottom: 8,
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