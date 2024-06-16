import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';

const Pagination = ({ page, handlePageClick, totalPage }) => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        nextLabel="Next >"
        previousLabel="< Prev"
        pageCount={totalPage}
        onPageChange={handlePageClick}
        forcePage={page}
        breakLabel="..."
        breakClassName="pagination__item pagination__item--break"
        pageClassName="pagination__item"
        pageLinkClassName="pagination__item-link"
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
