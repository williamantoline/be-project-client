import { relative } from "path";
import { css } from "../../styles/styles";
import Button from "./button";
import Text from "./text";
const IcPin = require("../../assets/ic-pin.png");

interface Props {
}

export default function FileCard(props: Props) {
    return (
    <div className={styles.div()}>
        <div className={styles.left()}>
            <Text color={"#ffffff"} weight={600} size={14}>Feb 03 Meeting Notes</Text>
            <Text style={{marginTop: 8}} weight={400} size={10}>Lorem ipsum dolor sit amet</Text>
            <Text style={{marginTop: 24}} color={"#7B7B7B"} size={12}>NOTES</Text>
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
        // backgroundColor: "#7B7B7B",
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