function Header() {
  return (
    <nav>
      <section className="header-title">
        <h1>
          Musings from a<br></br>
          Double sided<br></br>
          Couch
        </h1>
      </section>
      <section className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/#featured" className="nav-link">Featured</a>
          </li>
          <li className="nav-item">
            <a href="/#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/#postlist" className="nav-link">Posts</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-button">Reach Out</a>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default Header
