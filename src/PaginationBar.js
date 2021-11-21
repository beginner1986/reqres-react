import Pagination from "react-bootstrap/Pagination";
import "./PaginationBar.css";

export default function PaginationBar(props) {
    let active = props.page;
    let items = [];
    for (let number = 1; number <= props.total_pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => props.handleClick(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination>{items}</Pagination>
    );
}
