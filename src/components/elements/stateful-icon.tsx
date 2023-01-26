import { css } from "../../styles/styles";

interface Props {
  children?: any,
  styles?: object,
  offIcon: any,
  onIcon: any,
  onClick: () => void,
  state: any,
}

export default function StatefulIcon(props: Props) {
  return (
    <div style={props.styles} onClick={props.onClick} className={styles.actionIcon()}>
      {props.state ? <props.onIcon /> : <props.offIcon />}
    </div>
  );
}

const styles = {
  actionIcon: css({
    cursor: "pointer",
  }),
}
