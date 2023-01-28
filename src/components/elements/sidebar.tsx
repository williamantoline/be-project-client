import { css } from "../../styles/styles";
import Text from "./text";
import Button from "./button";
import Container from "./container";
import FileCard from "./file-card";
// import {IoFilterSharp} from "react-icons/io5";
// import {MdSort} from "react-icons/md";
import Loader from "./loader";
import Flex from "./flex";
import { FlexType } from "../../enum";
import FileCardTemplate from "./file-card-template";
import Modal from "./modal";
import AddNoteModal from "./add-note-modal";
import AddTodoModal from "./add-todo-modal";

interface Props {
    files: any[],
    isLoading: boolean,
    isAddingNote: boolean,
    isAddingTodo: boolean,
    onFileChange: (file: any) => void,
    onAddNote: () => void,
    onAddTodo: () => void,
    onFileTemplateOnClick: () => void,
    onFresh: (e?: any) => void,
}

export default function Sidebar(props: Props) {
    const handleFileOnClick = (file: any) => {
        props.onFileChange(file);
    }

    const handleFileTemplateOnClick = () => {
        props.onFileTemplateOnClick();
    }

    return (
        <>
            <div className={styles.div()}>
                <div className={styles.myitems()}>
                        <Text size={16} weight={600}>My Items</Text>
                        <Flex type={FlexType.row} styles={{marginTop: 12}}>
                            <Button isSmall isModalToggler modalTarget="#addNoteModal"> 
                                {props.isAddingNote ? 'x' : 'Add Note'}
                            </Button>
                            <Button isSmall isModalToggler modalTarget="#addTodoModal" style={{marginLeft: 10}}>
                                {props.isAddingTodo ? 'x' : 'Add Todo'}
                            </Button>
                        </Flex>
                </div>
                <div className={styles.filecard()}>
                    <Container>
                        {
                            props.isLoading 
                            ? 
                            <Flex styles={{marginTop: 2}} justify="center"><Loader /></Flex>
                            : 
                            (
                                props.files.length === 0 
                                ? 
                                <Flex styles={{marginTop: 32}}><Text>No Data</Text></Flex> 
                                :
                                <Flex type={FlexType.column}>
                                    {props.isAddingNote || props.isAddingTodo ? <FileCardTemplate type={props.isAddingNote ? 'NOTE' : 'TODO'} onClick={handleFileTemplateOnClick} /> : <></>}
                                    {props.files.map((file: any) => <FileCard onClick={handleFileOnClick} file={file} />)}
                                </Flex>
                            )
                        }
                    </Container>
                </div>
            </div>
            <AddNoteModal id="addNoteModal" title="Add New Note" onFresh={props.onFresh} />
            <AddTodoModal id="addTodoModal" title="Add New Todo" onFresh={props.onFresh} />
        </>
    )
}

const styles = {
    div: css({
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#2C2F30",
        width: "25%",
        height: "100vh",
        color: "$white0",
        padding: "84px 24px 0 24px",
        cursor: "pointer",
    }),
    myitems: css({
        height: 16,
        paddingLeft: 3
    }),
    button: css({
        display: "inline-grid",
        margin: "12px 0 12px 0",
    }),
    buttontext: css({
        margin: "auto auto auto 10px",
        "&:hover": {
            fontWeight: "bolder",
        },
    }),
    filecard: css({
        marginTop: 64,
        overflowX: "scroll",
    })
}