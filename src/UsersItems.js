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
                <h1>{user.first_name} {user.last_name}</h1>
                <a href="mailto:{user.email}">{user.email}</a>
                <img src={user.avatar} alt=""/>
            </div>
        );
    }

    render() {
        let usersData = this.props.users;
        let usersDivs = usersData.map(this.createUsers);

        return (
            <div>
                {usersDivs}
            </div>
        );
    }
}

export default UsersItems;