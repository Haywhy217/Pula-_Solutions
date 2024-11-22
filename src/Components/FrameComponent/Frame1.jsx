import React from 'react'
import styles from './Frame1.module.css';
import './Projectcard'
import Projectcard from './Projectcard';
import greenpic from '../../assets/Images/pimage_c.png'
import tomatoes from '../../assets/Images/pimage_d.png'
import goat from '../../assets/Images/pImage_e.png'
import greenfield from '../../assets/Images/pImage_f.png'
import tank from '../../assets/Images/pImage_g.png'
import desktop from '../../assets/Images/pImage_h.png'
const Landingpage = () => {
  return (
    <div className={styles.LP_Ctn}>
      <div className={styles.lp}><h1>Providing High Quality Products and
      Services</h1></div>
      <div className={styles.projects}> 
        <div className={styles.project_1}>
        <Projectcard cardPic={greenpic} cardTitle={'AYII'} cardPara={'Safeguard against crop yield volatility at the regional level with our Area Yield Index Insurance, fostering resilience in agricultural communities'}
        cardButton={'Learn More'}
        />
        <Projectcard cardPic={tomatoes} cardTitle={'HYII'} cardPara={'Protect crops from yield fluctuations with our innovative index insurance, ensuring stability and prosperity for farmers'} cardButton={'Learn More '}/>
        <Projectcard cardPic={goat} cardTitle={'Livestock Insurance'} cardPara={' Shield livestock assets from unforeseen risks and losses, ensuring the well-being and livelihoods of farmers.'} cardButton={'Learn More'}/>
        </div>
        <div className={styles.project_2}>
        <Projectcard cardPic={greenfield} cardTitle={'FieldSense'} cardPara={'Empower farmers with real-time data and insights to optimize crop management decisions and maximize yields sustainably'} cardButton={'Learn More '}/>
        <Projectcard cardPic={tank} cardTitle={'Disaster Risk Funding'} cardPara={'Prepare for and mitigate the impact of natural disasters on agricultural communities through accessible and responsive funding solutions '} cardButton={'Learn More '}/>
        <Projectcard cardPic={desktop} cardTitle={'Consulting'} cardPara={'Tap into our expertise and tailored solutions to address unique agricultural challenges, driving innovation and sustainable growth.' } cardButton={'Learn More '} />
        </div> 
      </div>

    </div>
  )
}

export default Landingpage