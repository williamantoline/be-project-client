import { css } from "../../styles/styles";
import axios from "axios";
import Button from "./button";
const Cookie =  require("js-cookie");
const IcSearch = require("../../assets/ic-search.png");

interface Props {
}

export default function Header(props: Props) {

    const handleClick = async () => {
        await axios.post('http://127.0.0.1:3013/auth/revoke')
        .then((res: any) => {
            console.log(res);
        })
        .catch((err: any) => {
            console.error(err);
        });
        Cookie.remove('token', { path: '' });
    }

    return (
    <div className={styles.div()}>
        <div className={styles.left()}>
            <p>Hello, John Doe</p>
        </div>
        <div className={styles.center()}>
            <div className={styles.searchInput()}>
                <img src={IcSearch} alt="" />
                <input type="text" placeholder="Find..." />
            </div>
        </div>
        <div className={styles.right()}>
            <Button isMedium onClick={handleClick} style={{backgroundColor: "red", color: "white"}}>Logout</Button>
            {/* <button className={styles.logoutButton()} onClick={handleClick}>Logout</button> */}
        </div>
    </div>
)
}

const styles = {
    div: css({
        display: "flex",
        flexDirection: "row",
        background: "#1F2123",
        padding: "0 72px",
        color: "$white0",
        height: 64,
        borderBottom: "2px solid #474141",
        position: "absolute",
        width: "100%"
    }),
    right: css({
        width: "33%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    }),
    center: css({
        width: "33%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }),
    left: css({
        width: "33%",
        display: "flex",
        alignItems: "center",
        fontWeight: 600
    }),
    logoutButton: css({
        backgroundColor: "$danger",
        margin: 0,
        borderRadius: 6,
        "&:hover": {
            background: "#FF4949",
        },
    }),
    searchInput: css({
        img: {
            width: 28,
            height: 28
        },
        input: {
            background: "none",
            border: "none",
            width: "90%",
            height: "80%",
            marginLeft: "8px",
            color: "#7B7B7B",
            fontSize: 16,
            borderTopStyle: "none",
            outline: "none",
        },
        padding: "6px 12px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 320,
        height: 42,
        borderRadius: 6,
        backgroundColor: "#2D2F30",
        "&:hover": {
            background: "#4E5154",
        },
    })
}