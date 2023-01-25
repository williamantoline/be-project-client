import { css } from "../../styles/styles";

interface Props {
    id: string,
    title: string,
    body: string,
    buttonLabel: string,
    buttonClickHandler: () => void,
}

export default function Modal(props: Props) {
    return (
        <div className="modal fade" id={props.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{props.title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {props.body}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={props.buttonClickHandler}>{props.buttonLabel}</button>
                </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: css({
        padding: "0px",
    }),
}