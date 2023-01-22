import Container from "../../elements/container";
import { css } from "../../../styles/styles";
import Input from "../../elements/input";
const RegisterImage = require("../../../assets/register-image.png");
// import AuthBgDark from "../../../assets/auth-bg-dark.png";

interface Props {};

export default function Register(props: Props) {
    return (
        <Container>
            <div className={styles.container()}>
                <div className={styles.centerBox()}>
                    <div className={styles.leftBox()}>
                        <img src={RegisterImage} alt="" />
                    </div>
                    <div className={styles.rightBox()}>
                        <h1 className={styles.h1()}>Sign Up</h1>
                        <Input label="Username" id="username" type="text" />
                        <Input label="Email" id="email" type="text" />
                        <Input label="Password" id="password" type="password" />
                        <Input label="Confirm Password" id="cpassword" type="password" />
                        <button className={styles.button()}>Sign Up</button>
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const styles = {
    container: css({
        margin: 0,
        padding: 0,
        height: "100vh",
        backgroundColor: "#000000",
        backgroundImage: "url('../../../assets/auth-bg-dark.png')",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "$white0"
    }),
    centerBox: css({
        height: 540,
        width: 840,
        background: "#2C2F30",
        display: "flex"
    }),
    leftBox: css({
        height: "100%"
    }),
    rightBox: css({
        padding: "20px 48px"
    }),
    h1: css({
        marginBottom: 36
    }),
    button: css({
        backgroundColor: "#7FFAB7",
        color: "#000000",
        width: 240,
        height: 36,
        borderRadius: 4,
        marginBottom: 24
    })
}