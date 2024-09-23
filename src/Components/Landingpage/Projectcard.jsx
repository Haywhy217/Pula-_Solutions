import React from 'react'
import './Projectcard.css';

const Projectcard = ({cardPic, cardTitle,cardPara, cardButton}) => {
  return (
    <div className='card_ctn'>
      <div className='card'>
        <img src={cardPic}/>
      </div>
      <div className='card_para'>
        <h1>{cardTitle}</h1>
        <p>{cardPara}</p>
        {cardButton}
      </div>
      
    </div>
  )
}

export default Projectcard