import { css } from "../../styles/styles";
import Text from "./text";
import {HiOutlineHeart, HiHeart, HiOutlinePencil, HiOutlineTrash} from "react-icons/hi2"
import { useState } from "react";
import ActionIcon from "./action-icon";
import StatefulIcon from "./stateful-icon";
import Flex from "./flex";
import { FlexType } from "../../enum";
import {Note} from "../../model";


interface Props {
    type: string,
    createdAt: string,
    updatedAt: string,
    note: Note,
}

export default function Content(props: Props) {
    let iconStyles = { color: "white", fontSize: '32px', backgroundColor: "transparent", marginLeft: 8 };


    const [isLiked, setIsLiked] = useState(props.note.isLiked);
    const handleIsLikedClick = () => {
        setIsLiked(!isLiked);
        //todo
    }
    
    const handleEdit = () => {
        console.log("edit button trigerred!"); //todo
    }

    const handleDelete = () => {
        console.log("delete button trigerred!"); //todo
    }
    
    return (
        <div className={styles.div()}>
            <div className={styles.title()}>
                <Text size={24} weight={800}>{props.note.title}</Text>
                <Flex type={FlexType.row}>
                    <StatefulIcon state={isLiked} onClick={handleIsLikedClick} offIcon={HiOutlineHeart} onIcon={HiHeart} styles={iconStyles} />
                    <ActionIcon icon={HiOutlinePencil} onClick={handleEdit} styles={iconStyles} />
                    <ActionIcon icon={HiOutlineTrash} onClick={handleDelete} styles={iconStyles} />
                </Flex>
            </div>
            <div className={styles.subtitle()}>
                <div className={styles.subtitleItem()}>
                    <Text color="#7B7B7B">{props.type}</Text>
                </div>
                <div className={styles.subtitleItem()}>
                    <Text color="#7B7B7B" style={{display: "inline"}}>Created
                        <Text weight={700} style={{display: "inline"}}> {(new Date(props.note.createdAt).toLocaleString())}</Text>
                    </Text>
                </div>
                <div className={styles.subtitleItem()}>
                    <Text color="#7B7B7B" style={{display: "inline"}}>Last Updated
                        <Text weight={700} style={{display: "inline"}}> {(new Date(props.note.updatedAt).toLocaleString())}</Text>
                    </Text>
                </div>
            </div>
            <div className={styles.content()}>
                {props.note.content}
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
        padding: "108px 32px 28px 32px",
    }),
    title: css({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    }),
    subtitle: css({
        marginBottom: 36
    }),
    subtitleItem: css({
        marginBottom: 6
    }),
    content: css({
        lineHeight: 1.5,
        fontSize: 15,
        fontWeight: 500
    }),
}