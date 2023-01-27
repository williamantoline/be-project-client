import { css } from "../../styles/styles";
import Text from "./text";
import Button from "./button";
import Container from "./container";
import FileCard from "./file-card";
// import {IoFilterSharp} from "react-icons/io5";
// import {MdSort} from "react-icons/md";
import Loader from "./loader";
import Flex from "./flex";

interface Props {
    files: any[],
    isLoading: boolean,
    onFileChange: (file: any) => void,
}

export default function Sidebar(props: Props) {
    // let iconStyles = { color: "white", fontSize: "1.5em" };

    const handleFileOnClick = (file: any) => {
        props.onFileChange(file);
    }

    return (
        <div className={styles.div()}>
            <div className={styles.myitems()}>
                <Flex justify="space-between">
                    <Text size={16} weight={600}>My Items</Text>
                    <Button isSmall>
                        <Text size={20}>+</Text>
                    </Button>
                </Flex>
            </div>
            {/* <div className={styles.button()}>
                <Button style={{
                        backgroundColor: "transparent", 
                        color: "white", 
                        padding: 4, 
                        width: 73, 
                        margin: 3,
                        border: "1px gray solid", 
                        borderRadius: 7,
                        display: "flex", 
                    }}>
                    <IoFilterSharp style={iconStyles} />
                    <span className={styles.buttontext()}>Filter</span> 
                </Button>
                <Button style={{
                        backgroundColor: "transparent", 
                        color: "white", 
                        padding: 4, 
                        width: 68, 
                        margin: 3,
                        border: "1px gray solid", 
                        borderRadius: 7,
                        display: "flex", 
                    }}>
                    <MdSort style={iconStyles} />
                    <span className={styles.buttontext()}>Sort</span> 
                </Button>
            </div> */}
            <div className={styles.filecard()}>
                <Container>
                    {
                        props.isLoading 
                            ? 
                        <Flex styles={{marginTop: 24}} justify="center"><Loader /></Flex>
                            : 
                        (
                            props.files.length === 0 ? <Flex styles={{marginTop: 32}}><Text>No Data</Text></Flex> : props.files.map((file: any) => <FileCard onClick={handleFileOnClick} file={file} />)
                        )
                    }
                </Container>
            </div>
        </div>
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
        padding: "84px 24px 28px 24px",
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

    })
}