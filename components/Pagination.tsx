import styles from '../styles/Pagination.module.css'

function Pagination({ postsPerPage, totalPosts, paginate, currentPage } : { postsPerPage:number, totalPosts:number, paginate:any, currentPage:number }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles.pagelist}>
        {pageNumbers.map(number => (
          <li key={number} id='pageitem' className={currentPage == number ? `${styles.pageitem} ${styles.active}` : styles.pageitem}>
            <a className={styles.button} onClick={(e) => paginate(e, number)} href="/#postlist" >{number}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
