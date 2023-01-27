import { css } from "../../styles/styles";
import Text from "./text";
import { FileType } from "../../enum";
import StatefulIcon from "./stateful-icon";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { useState } from "react";

interface Props {
    title?: string,
    content?: string,
    type?: FileType,
    file: any,
    onClick: (file: any) => void,
}

export default function FileCard(props: Props) {
    const [isLiked, setIsLiked] = useState(props.file.isLiked);
    const handleIsLikedClick = () => {
        setIsLiked(!isLiked);
    }

    const handleClickFile = () => {
        props.onClick(props.file);
    }

    return (
        <div className={styles.div()} onClick={handleClickFile}>
            <div className={styles.left()}>
                <Text color={"#ffffff"} weight={600} size={14}>{props.file.title}</Text>
                <Text style={{marginTop: 8, overflow: "hidden", height: 12, lineHeight: 1.4}} weight={400} size={10}>{props.file.content}</Text>
                <Text style={{marginTop: 24}} color={"#7B7B7B"} size={11}>{props.file.type.toUpperCase()}</Text>
            </div>
            <div className={styles.right()}>
                <StatefulIcon state={isLiked} onClick={handleIsLikedClick} offIcon={HiOutlineHeart} onIcon={HiHeart} styles={{width: 28, height: 28}} />
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