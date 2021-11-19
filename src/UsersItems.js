import {Component} from "react";

class UsersItems extends Component {
    constructor(props) {
        super(props);

        this.createUsers = this.createUsers.bind(this);
    }

    createUsers(user) {
        return (
            <div key={user.id}>
                {user.first_name} {user.last_name}
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