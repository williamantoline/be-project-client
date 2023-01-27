import { css } from "../../styles/styles";
import Text from "./text";
import ActionIcon from "./action-icon";
import Input from "./input";
import List from "./todolist";
import { Note } from "../../model";
import {RiAddBoxLine} from "react-icons/ri";
import {HiOutlineTrash, HiOutlinePencil} from "react-icons/hi2";


interface Props {
    type: string,
    createdAt: string,
    updatedAt: string,
    note: Note,
}

export default function ContentToDoList(props: Props) {
    let iconStyles = { color: "white", fontSize: "27px", backgroundColor: "transparent", margin: 8};
    let iconStyles2 = { color: "white", fontSize: "34px", backgroundColor: "transparent", marginLeft: 20};

    const addButton = () => {
        function myFunction(){
            return(
                `${<div>
                    <List></List>
                </div>}`
                
            )
        }
        const element: HTMLElement = document.getElementById('todolist') as HTMLElement
        element.innerHTML += myFunction()
    }

    const blank = () => {

    }
    return (
        <div className={styles.div()}>
            <div className={styles.subheader()}>
                <div className={styles.title()}>
                    <Text size={24} weight={800}>To Do List</Text>
                    <ActionIcon icon={HiOutlinePencil} onClick={blank} styles={iconStyles}/>
                </div>
                <div className={styles.icon()}>
                    <ActionIcon icon={HiOutlineTrash} onClick={addButton} styles={iconStyles2} />
                </div>
            </div>
            <div className={styles.center()}>
                <div>
                    <Text size={19} weight={500} style={{display: "inline"}}>Add todo: </Text>
                </div>
                <div className={styles.input()}>
                    <Input label="" type="text" id="addlist" value="" onChange={blank}/>
                </div>
                <div>
                    <ActionIcon icon={RiAddBoxLine} onClick={addButton} styles={iconStyles2}/>
                </div>
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

            <div className={styles.todolist()} id="todolist">
                <List></List>
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
        padding: "84px 36px 28px 36px",
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
    center: css({
        margin: "30px 0",
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
        textAlign: "center",
        verticalAlign: "middle",
    }),
    input: css({
        marginBottom: "-18px",
        marginLeft: "20px",
    }),
    subtitle: css({
        marginBottom: 12
    }),
    subtitleItem: css({
        marginBottom: 6
    }),
    todolist: css({
        
    })
}