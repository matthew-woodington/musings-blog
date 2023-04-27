function Pagination({ postsPerPage, totalPosts, paginate } : { postsPerPage:number, totalPosts:number, paginate:any }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={(e) => paginate(e, number)} href="#" >{number}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
