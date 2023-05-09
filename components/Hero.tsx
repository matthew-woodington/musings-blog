import styles from '../styles/Hero.module.css'
import HeroImage from '../assets/images/heroimage.png'
import { BsArrow90DegDown } from 'react-icons/bs'

function Hero() {
  return (
    <section className={styles.herosection}>
      <picture>
        <img className={styles.heroimg} src={HeroImage.src} alt="couch image" />
      </picture>
      <div className={styles.herotext}>
        <h1 className={styles.herotitle}>
          Musings from a<br></br>
          Double sided<br></br>
          Couch
        </h1>
        <a href="#featured" className={styles.featuredlink}>Read the featured post <BsArrow90DegDown className={styles.arrow} /></a>
      </div>
    </section>
  )
}

export default Hero
