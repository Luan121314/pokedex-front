import React from 'react';
import ReactPaginate from 'react-paginate';
import './styles.css'

interface PageClickProps {
    selected: number;
}

interface PaginationProps {
    pageCount: number,
    pageOnclick: (page: number) => void
}

const Pagination = ({ pageCount, pageOnclick }: PaginationProps) => {

    function handlePageClick({ selected }: PageClickProps) {
        pageOnclick(selected)
    }

    return (
        <ReactPaginate
            previousLabel={'voltar'}
            nextLabel={'Proximo'}
            breakLabel={'...'}
            breakClassName={'page-link'}
            disabledClassName="disabled"
            nextClassName="page-item"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeLinkClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName={'active'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
        />
    )
}

export default Pagination;