import { css } from "../../styles/styles";

interface Props {
  color?: string,
  weight?: number,
  isHyperlink?: boolean,
  size?: number,
  href?: string,
  children: any,
  style?: object,
}

export default function Text(props: Props) {
  const style = {
    color: props.color,
    fontWeight: props.weight,
    fontSize: props.size,
    ...props.style,
  }
  if (props.isHyperlink) {
    return (
      <a href={props.href} style={style} className={styles.text()}>
        {props.children}
      </a>
    );
  }
  return (
    <p style={style} className={styles.text()}>
      {props.children}
    </p>
  );

}

const styles = {
  text: css({
    fontWeight: "$regular",
  }),
}