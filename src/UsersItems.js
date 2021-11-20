import {Component} from "react";
import "./UsersItems.css";
import {Card} from "react-bootstrap";

class UsersItems extends Component {
    constructor(props) {
        super(props);

        this.createCard = this.createCard.bind(this);
    }

    createCard(user) {
        return (
            <Card key={user.id} className="user" border="primary">
                <Card.Header>{user.first_name} {user.last_name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <a href="mailto:{user.email}">{user.email}</a>
                        <img src={user.avatar} alt="{user.first_name}"/>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    render() {
        let usersData = this.props.users;
        let usersDivs = usersData.map(this.createCard);

        return (
            <div>
                <h1>Users</h1>
                <div>
                    {usersDivs}
                </div>
            </div>
        );
    }
}

export default UsersItems;