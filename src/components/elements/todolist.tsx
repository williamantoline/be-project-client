import { css } from "../../styles/styles";
import Text from "./text";
import {MdCircle} from "react-icons/md";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";

interface Props {
    title?: string,
    content?: string,
    type?: string,
}

export default function List(props: Props) {
    let iconStyles = { color: "white", fontSize: "24px", backgroundColor: "transparent", marginLeft: "-7px" };
    let iconStyles2 = { color: "white", fontSize: "24px", backgroundColor: "transparent", margin: 7}
    return (
    <div className={styles.div()}>
        <div className={styles.top()}>
            <MdCircle style={iconStyles}/>
            <Text style={{marginLeft: 20, width: "90%"}}><input type="text" className="inputtext" placeholder="Type here..."/></Text>
            <div className={styles.icon()}>
                <HiOutlinePencil style={iconStyles2} />
                <HiOutlineTrash style={iconStyles2}/>
            </div>
        </div>
    </div>
)
}

const styles = {
    div: css({
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 72,
        marginBottom: 8,
        borderBottom: "1px solid #636363"
    }),
    top: css({
        width: "100%",
        display: "flex",
        alignItems: "center",
        input:{
            width: "100%",
            color: "white",
            background: "none",
            outline: "none",
            border: "none",
            height: "100%",
            fontSize: 18,
            margin: 0
        }
    }),
    inputtext: css({
        width: "100%"
    }),
    icon: css({
        display: "flex"
    })
}