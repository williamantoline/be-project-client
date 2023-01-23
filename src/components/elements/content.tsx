import { css } from "../../styles/styles";
import Text from "./text";
import Button from "./button";
import Container from "./container";
import FileCard from "./file-card";
import {HiOutlineHeart, HiOutlinePencil, HiOutlineTrash} from "react-icons/hi2"

interface Props {
}

export default function Content(props: Props) {
    let iconStyles = { color: "white", fontSize: "2.5em", backgroundColor: "transparent" };
    return (
        <div className={styles.div()}>
            <div className={styles.title()}>
                <Text size={24} weight={800}>Feb 03 Meeting Notes</Text>
                <Button style={{
                    backgroundColor: "transparent",
                }}>
                    <HiOutlineHeart style={iconStyles}/>
                    <HiOutlinePencil style={iconStyles}/>
                    <HiOutlineTrash style={iconStyles}/>
                </Button>
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
    title: css({
        margin: 16
    }),
    subtitle: css({
        margin: 6
    }),
    time: css({
        margin: 6
    })
}