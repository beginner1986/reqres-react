import {Button, Modal} from "react-bootstrap";
import "./UserModal.css";

function UserModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.user.first_name} {props.user.last_name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-form">
                    <div className="label">email: </div>
                    <div>{props.user.email}</div>
                    <div className="label">avatar link: </div>
                    <div>{props.user.avatar}</div>
                </div>
                <img src={props.user.avatar} alt="Avatar" className="avatar"/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;