import { css } from "../../styles/styles";

export default function Text(props: { children: React.ReactNode }) {
  return (
      <div className={styles.text()}>
        {props.children}
      </div>
  );
}

const styles = {
  text: css({
    fontWeight: "$regular",
  }),
}