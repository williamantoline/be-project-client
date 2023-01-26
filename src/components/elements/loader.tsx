import { css } from "../../styles/styles";

interface Props {
}

export default function Loader(props: Props) {
  return (
    <div className="loader-2 center">
      <span></span>
    </div>
  );

}

const styles = {
  button: css({
    cursor: "pointer"
  }),
}