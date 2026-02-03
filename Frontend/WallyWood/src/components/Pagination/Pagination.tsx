import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

// Pagination wrapper using react-paginate library with custom styling
interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  currentPage?: number;
}

export function Pagination({ pageCount, onPageChange, currentPage = 0 }: PaginationProps) {
  console.log('Pagination - Total pages:', pageCount, 'Current page:', currentPage);
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="›"
      previousLabel="‹"
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      forcePage={currentPage}
      containerClassName={styles.pagination}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      activeClassName={styles.active}
      previousClassName={styles.pageItem}
      nextClassName={styles.pageItem}
      previousLinkClassName={styles.pageLink}
      nextLinkClassName={styles.pageLink}
      disabledClassName={styles.disabled}
      breakClassName={styles.pageItem}
      breakLinkClassName={styles.pageLink}
    />
  );
}
