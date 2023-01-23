import { css } from "../../styles/styles";
import Text from "./text";
import Button from "./button";
import Container from "./container";
import FileCard from "./file-card";
import {HiOutlineHeart, HiOutlinePencil, HiOutlineTrash} from "react-icons/hi2"

interface Props {
}

export default function Content(props: Props) {
    let iconStyles = { color: "white", fontSize: 28, backgroundColor: "transparent" };
    return (
        <div className={styles.div()}>
            <div className={styles.subheader()}>
                <div className={styles.title()}>
                    <Text size={24} weight={800}>Feb 03 Meeting Notes</Text>
                </div>
                <div className={styles.icon()}>
                    <Button style={{backgroundColor: "transparent"}}>
                        <HiOutlineHeart style={iconStyles}/>
                    </Button>
                    <Button style={{backgroundColor: "transparent"}}>
                        <HiOutlinePencil style={iconStyles}/>
                    </Button>
                    <Button style={{backgroundColor: "transparent"}}>
                        <HiOutlineTrash style={iconStyles}/>
                    </Button>
                </div>
            </div>
            
            <div className={styles.subtitle()}>
                <div className={styles.time()}>
                    <Text color="#7B7B7B">Notes</Text>
                </div>
                <div className={styles.time()}>
                    <Text color="#7B7B7B">Created Feb 03, 2022</Text>
                </div>
                <div className={styles.time()}>
                    <Text color="#7B7B7B">Last Updated Feb 06, 2022</Text>
                </div>
            </div>
            <div className={styles.notes()}>
                <Text size={18}>Lorem ipsum dolor sit amet</Text>
            </div>
        </div>
        
)}

const styles = {
    div: css({
        width: "100%",
        flexDirection: "column",
        display: "flex",
        height: "100vh",
        color: "$white0",
        padding: "84px 24px 28px 24px",
        cursor: "pointer",
    }),
    subheader: css({
        margin: 16,
        display: "flex"
    }),
    title: css({
        width: "50%",
        display: "flex",
        alignItems: "center",
    }),
    icon: css({
        width: "50%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    }),
    subtitle: css({
        margin: 6
    }),
    time: css({
        margin: 6
    }),
    notes: css({
        margin: "30px 10px auto"
    })
}