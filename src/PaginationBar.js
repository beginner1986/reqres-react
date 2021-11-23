import Pagination from "react-bootstrap/Pagination";

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
        <Pagination>
            <Pagination.First disabled={active === 1} onClick={() => props.handleClick(1)}/>
            <Pagination.Prev disabled={active === 1} onClick={() => props.handleClick((active - 1) > 0 ? (active - 1) : 0)}/>
            {items}
            <Pagination.Next disabled={active === props.total_pages} onClick={() => props.handleClick((active + 1) <= props.total_pages ? (active + 1) : props.total_pages)}/>
            <Pagination.Last disabled={active === props.total_pages} onClick={() => props.handleClick(props.total_pages)}/>
        </Pagination>
    );
}
