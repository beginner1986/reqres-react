import "./UsersItems.css";
import {Card} from "react-bootstrap";

function UsersItems(props) {
    function createCard(user) {
        return (
            <Card key={user.id} className="user" border="primary">
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
            <h1>Users</h1>
            <div>
                {usersDivs}
            </div>
        </div>
    );
}

export default UsersItems;