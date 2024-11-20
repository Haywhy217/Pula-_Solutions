import React from 'react'
import styles from './Projectcard.module.css';

const Projectcard = ({cardPic, cardTitle,cardPara, cardButton}) => {
  return (
    <div className={styles.card_ctn}>
      <div className={styles.card}>
        <img src={cardPic}/>
      </div>
      <div className={styles.card_para}>
        <h1>{cardTitle}</h1>
        <p>{cardPara}</p>
        {cardButton}
      </div>
      
    </div>
  )
}

export default Projectcard