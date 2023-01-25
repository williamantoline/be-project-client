import { css } from "../../styles/styles";
import Text from "./text";
import ActionIcon from "./action-icon";
import List from "./todolist";
import {RiAddBoxLine} from "react-icons/ri";
import {HiOutlineTrash} from "react-icons/hi2";


interface Props {
}

export default function ContentToDoList(props: Props) {
    let iconStyles = { color: "white", fontSize: "30px", backgroundColor: "transparent",};

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
    return (
        <div className={styles.div()}>
            <div className={styles.subheader()}>
                <div className={styles.title()}>
                    <Text size={24} weight={800}>To Do List</Text>  
                </div>
                <div className={styles.icon()}>
                    <ActionIcon icon={RiAddBoxLine} onClick={addButton} styles={iconStyles} />
                    <ActionIcon icon={HiOutlineTrash} onClick={addButton} styles={iconStyles} />
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
    todolist: css({
        
    })
}