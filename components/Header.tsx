import styles from '../styles/Header.module.css'

function Header() {
  return (
    <nav className={styles.header}>
      <section className={styles.headerhero}>
        <h1 className={styles.headertitle}>
          Musings from a<br></br>
          Double sided<br></br>
          Couch
        </h1>
      </section>
      <section className={styles.nav}>
        <ul className={styles.navlist}>
          <li className={styles.navitem}>
            <a href="/" className={styles.navlink}>Home</a>
          </li>
          <li className={styles.navitem}>
            <a href="/#featured" className={styles.navlink}>Featured</a>
          </li>
          <li className={styles.navitem}>
            <a href="/#about" className={styles.navlink}>About</a>
          </li>
          <li className={styles.navitem}>
            <a href="/#postlist" className={styles.navlink}>Posts</a>
          </li>
          <li className={styles.navitem}>
            <a href="#" className={styles.navbutton}>Reach Out</a>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default Header
