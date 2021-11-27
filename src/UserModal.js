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
                <form className="modal-form">
                    <label>email:
                        <input value={props.user.email}/><br/>
                    </label>
                    <label>avatar link:
                        <input value={props.user.avatar}/>
                    </label>
                </form>
                <img src={props.user.avatar} alt="Avatar" className="avatar"/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;