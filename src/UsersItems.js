import {Component} from "react";
import "./UsersItems.css";

class UsersItems extends Component {
    constructor(props) {
        super(props);

        this.createUsers = this.createUsers.bind(this);
    }

    createUsers(user) {
        return (
            <div key={user.id} className="user">
                <h2>{user.first_name} {user.last_name}</h2>
                <a href="mailto:{user.email}">{user.email}</a>
                <img src={user.avatar} alt="{user.first_name}"/>
            </div>
        );
    }

    render() {
        let usersData = this.props.users;
        let usersDivs = usersData.map(this.createUsers);

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