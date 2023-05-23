import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <h1 className={styles.footertitle}>
          Musings from a<br></br>
          Double sided<br></br>
          Couch
        </h1>
      </section>
      <section className={styles.closersection}>
        <p className={styles.closer}>©musingsfromadoublesidedcouch2023</p>
        <p className={styles.closer}>All Rights Reserved</p>
      </section>
    </footer>
  )
}

export default Footer
