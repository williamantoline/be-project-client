import { css } from "../../styles/styles";
const IcSearch = require("../../assets/ic-search.png");

interface Props {
}

export default function Header(props: Props) {
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
            <button className={styles.logoutButton()}>Logout</button>
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
        width: 120,
        height: 36,
        fontSize: 14,
        fontWeight: 600,
        color: "$white0",
        cursor: "pointer",
        margin: 0,
        borderRadius: 6
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
        },
        padding: "6px 12px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 320,
        height: 42,
        borderRadius: 6,
        backgroundColor: "#2D2F30"
    })
}