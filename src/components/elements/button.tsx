import { css } from "../../styles/styles";

interface Props {
  type?: string,
  color?: string,
  size?: number,
  children: React.ReactNode,
}

export default function Button(props: Props) {
  const style = {
    color: props.color,
    fontSize: props.size,
  }

  return (
    <button style={style} className={styles.button()}>
      {props.children}
    </button>
  );

}

const styles = {
  button: css({
    fontWeight: "$regular",
  }),
}