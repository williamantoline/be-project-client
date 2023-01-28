import { css } from "../../styles/styles";

interface Props {
  type?: string,
  color?: string,
  size?: number,
  children: React.ReactNode,
  style?: object,
  isLarge?: boolean,
  isMedium?: boolean,
  isSmall?: boolean,
  isPrimary?: boolean,
  isSecondary?: boolean,
  isDanger?: boolean,
  isModalButton?: boolean,
  dataBsDismiss?: string,
  ariaLabel?: string,
  className?: string,
  onClick?: () => void,
  isModalToggler?: boolean,
  modalTarget?: string,
}

export default function Button(props: Props) {
  let cStyles: any = {
    ...props.style,
  }

  if (props.isLarge) {
    cStyles = {
      ...cStyles,
      width: 240,
      height: 42,
      borderRadius: 10,
      fontSize: 18,
      fontWeight: 600
    }
  } else if (props.isMedium) {
    cStyles = {
      ...cStyles,
      width: 120,
      height: 36,
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 600
    } 
  } else if (props.isSmall) {
    cStyles = {
      ...cStyles,
      width: 80,
      height: 28,
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 600
    }
  }

  if (props.isPrimary) {
    cStyles = {
      ...cStyles,
      backgroundColor: "$primary0"
    }
  } else if (props.isSecondary) {
    cStyles = {
      ...cStyles,
      backgroundColor: "$secondary0"
    }
  } else if (props.isDanger) {
    cStyles = {
      ...cStyles,
      backgroundColor: "$danger"
    }
  }

  if (props.isModalButton) {
    return (
      <button style={props.style} onClick={props.onClick} className={props.className} data-bs-dismiss={props.dataBsDismiss} aria-label={props.ariaLabel}>
        {props.children}
      </button>
    );
  }
  return (
    <button className={styles.button()} style={cStyles} onClick={props.onClick} data-bs-toggle={props.isModalToggler ? 'modal' : ''} data-bs-target={props.modalTarget}>
      {props.children}
    </button>
  );

}

const styles = {
  button: css({
    cursor: "pointer"
  }),
}