import { IconType } from "react-icons/lib";
import { css } from "../../styles/styles";

interface Props {
  onClick: () => void,
  icon: IconType,
  styles?: object,
}

export default function ActionIcon(props: Props) {
  return (
    <div style={props.styles} onClick={props.onClick} className={styles.actionIcon()}>
      <props.icon />
    </div>
  );
}

const styles = {
  actionIcon: css({
    fontWeight: "$regular",
  }),
}