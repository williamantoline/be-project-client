import Container from "../../elements/container";
import { css } from "../../../styles/styles";
import Input from "../../elements/input";
import React, { useCallback, useState } from "react";
import axios from "axios";
const Cookie =  require("js-cookie");
const LoginImage = require("../../../assets/login-image.png");
const { endpoint } = require("../../../config");

interface Props {};

export default function Login(props: Props) {
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

    const handleClick = async () => {
        await axios.post(`${endpoint}/auth/login`, {
            email: email,
            password: password
        }, {
            withCredentials: true,
        })
        .then((res: any) => {
            alert(res.status);
            Cookie.set('token', res.data.token);
            window.location.replace("/");
        })
        .catch((err: any) => {
            console.error(err);
        })
    };

    React.useEffect(() => {
        axios.post(`${endpoint}/auth/jwtToken`, { name: 'John Doe' }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any)=>{
            if(res.data.tokenStatus === true){
                window.location.replace("/");
            }
        })
    }, []);

    return (
        <Container>
            <div className={styles.container()}>
                <div className={styles.centerBox()}>
                    <div className={styles.leftBox()}>
                        <img src={LoginImage} alt="" />
                    </div>
                    <div className={styles.rightBox()}>
                        <div className={styles.upperBox()}>
                            <h1 className={styles.h1()}>Login</h1>
                            <Input label="Email" id="email" type="text" value={email} onChange={handleEmailChange} />
                            <Input label="Password" id="password" type="password" value={password} onChange={handlePasswordChange} />
                            <button className={styles.button()} onClick={handleClick}>Login</button>
                        </div>
                        <div className={styles.lowerBox()}>
                            <p>Don't have an account? <a href="/register" className={styles.href()}>Sign Up</a></p>
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
        width: 820,
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
        marginTop: 38,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0
    }),
    h1: css({
        marginBottom: 50,
        fontSize: 40
    }),
    button: css({
        backgroundColor: "#80faf6",
        color: "white",
        fontSize: 19,
        width: 240,
        height: 45,
        borderRadius: 7,
        marginTop: 23,
        marginBottom: 24,
        marginLeft: 45,
        "&:hover": {
            background: "#7f0509",
            fontVariant: "small-caps",
        },
        cursor: "pointer",
    }),
    upperBox: css({

    }),
    lowerBox: css({
        fontSize: 12,
        marginBottom: 4,
        marginTop: 113,
        marginLeft: 71,
    }),
    href: css({
        textShadow: "2px 2px 8px #ffffff",
        "&:hover": {
            textShadow: "none",
            color: "#d3d0cf"
        },
    })
}