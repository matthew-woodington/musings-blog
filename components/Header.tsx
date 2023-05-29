import { useState, useEffect } from 'react'
import styles from '../styles/Header.module.css'
import useMediaQuery from '@/hooks/useMediaQuery'

function Header() {
  const isBelowLargeScreen = useMediaQuery("(max-width: 1060px)")
  const [menuToggle, setMenuToggle] = useState(false)

  // const body = document.getElementById('body')

  // useEffect(() => {
  //   if (menuToggle) {
  //     body?.classList.add('fixed')
  //   }
  //   if (!menuToggle) {
  //     body?.classList.remove('fixed')
  //   }
  // }, [menuToggle]);

  const lockScroll = () => {
    document.body.classList.toggle('fixed')
  }

  const toggleBtn = () => {
    setMenuToggle(!menuToggle)
    lockScroll()
  }

  return (
    <nav className={styles.header}>
      <section className={styles.headerhero}>
        <h1 className={styles.headertitle}>
          Musings from a<br></br>
          Double sided<br></br>
          Couch
        </h1>
      </section>

      {isBelowLargeScreen ? (
        <>
          <button className={menuToggle ? `${styles.menubtn} ${styles.open}` : styles.menubtn} onClick={() => toggleBtn()}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </> 
      ) : (
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
      )}

      {isBelowLargeScreen && (
        <section className={menuToggle ? `${styles.mobilenav} ${styles.active}` : styles.mobilenav}>
          <ul className={styles.mobilenavlist}>
            <li className={styles.navitem}>
              <a onClick={() => toggleBtn()} href="/" className={styles.navlink}>Home</a>
            </li>
            <li className={styles.navitem}>
              <a onClick={() => toggleBtn()} href="/#featured" className={styles.navlink}>Featured</a>
            </li>
            <li className={styles.navitem}>
              <a onClick={() => toggleBtn()} href="/#about" className={styles.navlink}>About</a>
            </li>
            <li className={styles.navitem}>
              <a onClick={() => toggleBtn()} href="/#postlist" className={styles.navlink}>Posts</a>
            </li>
            <li className={styles.navitem}>
              <a onClick={() => toggleBtn()} href="#" className={styles.navbutton}>Reach Out</a>
            </li>
          </ul>
        </section>
      )}
    </nav>
  )
}

export default Header
