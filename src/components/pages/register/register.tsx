import Container from "../../elements/container";
import { css } from "../../../styles/styles";
import Input from "../../elements/input";
import { useState, useCallback } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const { endpoint } = require("../../../config");
const RegisterImage = require("../../../assets/register-image.png");

interface Props {};

export default function Register(props: Props) {
    const [name, setName] = useState("");
    const handleNameChange = useCallback(
        (event: any) => {
            setName(event.target.value);
        },
        [setName]
    );

    const [email, setEmail] = useState("");
    const handleEmailChange = useCallback(
        (event: any) => {
            setEmail(event.target.value);
        },
        [setEmail]
    );
    
    const [password, setPassword] = useState("");
    const handlePasswordChange = useCallback(
        (event: any) => {
            setPassword(event.target.value);
        },
        [setPassword]
    );

    const [cpassword, setCpassword] = useState("");
    const handleCpasswordChange = useCallback(
        (event: any) => {
            setCpassword(event.target.value);
        },
        [setCpassword]
    );

    const handleButtonClick = async () => {
        await axios.post(`${endpoint}/auth/register`, {
            name: name,
            username: email,
            email: email,
            password: password,
        })
        .then((res: any) => {
            alert("Registration Successful!");
            <Navigate replace to="/login" />
            window.location.replace("/login");
        })
        .catch((err: any) => {
            console.error(err);
            let msg = '';
            for(let i=0; i<(err.response.data.errors).length; i++){
                msg += '\n';
                msg += err.response.data.errors[i].msg;
            }
            alert(msg);
        });
    }

    return (
        <Container>
            <div className={styles.container()}>
                <div className={styles.centerBox()}>
                    <div className={styles.leftBox()}>
                        <img src={RegisterImage} alt="" />
                    </div>
                    <div className={styles.rightBox()}>
                        <div className={styles.upperBox()}>
                            <h1 className={styles.h1()}>Sign Up</h1>
                            <Input label="Name" id="name" type="text" value={name} onChange={handleNameChange} />
                            <Input label="Email" id="email" type="text" value={email} onChange={handleEmailChange} />
                            <Input label="Password" id="password" type="password" value={password} onChange={handlePasswordChange} />
                            <Input label="Confirm Password" id="cpassword" type="password" value={cpassword} onChange={handleCpasswordChange} />
                            <button className={styles.button()} onClick={handleButtonClick}>Sign Up</button>
                        </div>
                        <div className={styles.lowerBox()}>
                            <p>Already have an account? <a href="/login" className={styles.href()}>Login</a></p>
                        </div>
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
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 14,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0
    }),
    h1: css({
        marginBottom: 36
    }),
    button: css({
        backgroundColor: "#7FFAB7",
        color: "white",
        fontSize: 19,
        width: 240,
        height: 45,
        borderRadius: 7,
        marginTop: 20,
        marginBottom: 24,
        marginLeft: 45,
        "&:hover": {
            background: "#800548",
            fontVariant: "small-caps",
        },
        cursor: "pointer",
    }),
    upperBox: css({

    }),
    lowerBox: css({
        fontSize: 12,
        marginBottom: 4,
        marginTop: 10,
        marginLeft: 71,
    }),
    href: css({
        textShadow: "2px 2px 8px #ffffff",
        "&:hover": {
            color: "#d3d0cf",
            textShadow: "none"
        },
    })
}