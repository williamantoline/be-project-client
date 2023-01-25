import { IconType } from "react-icons/lib";
import { css } from "../../styles/styles";

interface Props {
  onClick: () => void,
  icon: IconType,
  styles?: object,
  isModalToggler?: boolean,
  modalTarget?: string,
}

export default function ActionIcon(props: Props) {
  return (
    <div style={props.styles} onClick={props.onClick} className={styles.actionIcon()} data-bs-toggle={props.isModalToggler ? 'modal' : ''} data-bs-target={props.modalTarget}>
      <props.icon />
    </div>
  );
}

const styles = {
  actionIcon: css({
    cursor: "pointer"
  }),
}