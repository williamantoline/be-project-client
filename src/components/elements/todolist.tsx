import { css } from "../../styles/styles";
import Text from "./text";
import {MdCircle} from "react-icons/md"

interface Props {
    title?: string,
    content?: string,
    type?: string,
}

export default function List(props: Props) {
    let iconStyles = { color: "white", fontSize: "22px", backgroundColor: "transparent", marginLeft: "-7px" };
    return (
    <div className={styles.div()}>
        <div className={styles.top()}>
            <MdCircle style={iconStyles}/>
            <Text style={{marginLeft: 20}}><input type="text" className="inputtext" placeholder="Type here..."/></Text>
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

    })
}