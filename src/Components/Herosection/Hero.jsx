import React from 'react'
import styles from './Hero.module.css';
import BGpic from "../../assets/Images/pimage_b.png"
import Button from '../Button/Button';


const Hero = () => {
  return (
    <div className={styles.Hero_container}>
        <img src={BGpic} className={styles.Hero_image}/>
        <div className={styles.Hero_text}>
          <h1>
          Cutting-edge agricultural insurance and technology solutions
          </h1>
          <p>We specialize in crafting and delivering innovative products tailored to smallholder farmers worldwide, empowering them to navigate yield risks, enhance farming techniques, and steadily boost their incomes.</p>
          <Button text="Learn More" onClick={() => alert("Button Clicked!")}/>
          </div>
          
    </div>
  )
}

export default Hero