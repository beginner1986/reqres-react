import {Card} from "react-bootstrap";
import UserModal from "./UserModal";
import React, {useState} from "react";
import "./UsersItems.css"

export default function UsersItems(props) {
    const [showModal, setShowModal] = useState(false);

    function createCard(user) {
        return (
            <Card key={user.id} onClick={() => setShowModal(true)} className="user-card">
                <Card.Body>
                    <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                    <Card.Link href="mailto:{user.email}">{user.email}</Card.Link>
                    <Card.Img variant="bottom" src={user.avatar}/>
                </Card.Body>
            </Card>
        );
    }

    let usersData = props.users;
    let usersDivs = usersData.map(createCard);

    return (
        <div>
            <div className="users-items">
                {usersDivs}
            </div>
            <UserModal show={showModal} onHide={() => setShowModal(false)}/>
        </div>
    );
}
