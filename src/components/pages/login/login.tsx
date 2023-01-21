import Container from "../../elements/container";
import { css } from "../../../styles/styles";
// import AuthBgDark from "../../../assets/auth-bg-dark.png";

interface Props {};

export default function Login(props: Props) {
    return (
        <Container>
            <div className={styles.container()}>
                <div className={styles.centerBox()}>
                    
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
    }),
    centerBox: css({
        height: 300,
        width: 600,
        background: "#f0f0f0"
    })
}