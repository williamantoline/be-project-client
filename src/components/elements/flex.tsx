import { css } from "../../styles/styles";
import { FlexType } from "../../enum";

interface Props {
    styles?: object,
    type?: FlexType,
    justify?: string,
    alignItems?: string,
    children: any
}

export default function Flex(props: Props) {
    const cStyles: any = {
        ...props.styles,
    };
    if (props.type === 'column') {
        cStyles.flexDirection = 'column';
    }
    if (props.justify) {
        cStyles.justifyContent = props.justify;
    }
    if (props.alignItems) {
        cStyles.alignItems = props.alignItems;
    }
    return (
        <div style={cStyles} className={styles.flex()}>
            {props.children}
        </div>
    );
}

const styles = {
    flex: css({
        display: "flex",
    }),
}