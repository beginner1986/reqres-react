import React, {useEffect, useState} from "react";
import UsersItems from "./UsersItems";
import "./UsersContainer.css";
import PaginationBar from "./PaginationBar";

const apiUrl = "https://reqres.in/api/users";

export default function UsersContainer() {
    const [page, setPage] = useState(1);
    const [per_page, setPerPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [total_pages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(apiUrl + "?page=" + page)
            .then(res => res.json())
            .then(
                (response) => {
                    setIsLoaded(true);
                    setPage(response.page);
                    setPerPage(response.per_page);
                    setTotal(response.total);
                    setTotalPages(response.total_pages);
                    setUsers(response.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }, [page, setPage]
    );

    if(error) {
        return (
            <div>Error: {error.message}</div>
        );
    } else if(!isLoaded) {
        return (
            <div>Loading...</div>
        );
    } else {
        return (
            <div className="flex">
                <UsersItems users={users}/>
                <PaginationBar page={page} total_pages={total_pages} api={apiUrl} handleClick={handleClick} />
            </div>
        );
    }

    function handleClick(page) {
        setPage(page);
    }
}
