import React from 'react'
import styles from './Portfolio.module.scss'
import PortfolioBackdrop from './PortfolioBackdrop';
import { profileItems } from '../../../dataset/profileItems'





const PortFolio: React.FC = () => {

    return (
        <section id="portfolio">
            <div className={styles.portfolio}>
                <h2>works</h2>
                <div className={styles.portfolioItemsArea}>
                    {profileItems.map((profileItem,index) => {
                        return (
                            <PortfolioBackdrop profileItem={profileItem} key={index}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PortFolio;