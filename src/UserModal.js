import {Button, Modal} from "react-bootstrap";

function UserModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.user.first_name} {props.user.last_name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <input placeholder="email"/><br/>
                    <input placeholder="Link to the avatar"/>
                </form>
                <img src={props.user.avatar} alt="Avatar"/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;