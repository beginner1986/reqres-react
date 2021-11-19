import {Component} from "react";
import UsersItems from "./UsersItems";
import "./UsersContainer.css";

let xhr;

class UsersContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            per_page: 0,
            total: 0,
            total_pages: 0,
            users: []
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users');
        xhr.send();

        xhr.addEventListener('readystatechange', this.processRequest, false);
    }

    processRequest() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);

            this.setState({
                page: response.page,
                per_page: response.per_page,
                total: response.total,
                total_pages: response.total_pages,
                users: response.data
            });
        }
    }

    render() {
        return (
            <div className="flex">
                <UsersItems users={this.state.users}/>
            </div>
        );
    }
}

export default UsersContainer;