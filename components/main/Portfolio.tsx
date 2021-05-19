import React from 'react'
import styles from './Main.module.scss'
import PortfolioBackdrop from './portfolios/PortfolioBackdrop';
import { profileItems } from '../../dataset/profileItems'





const PortFolio: React.FC = () => {

    return (
        <section id="portfolio">
            <div className={styles.portfolio}>
                <h2>works</h2>
                <div className={styles.portfolioItemsArea}>
                    {profileItems.map((item) => {
                        return (
                            <PortfolioBackdrop itemTitle={item.itemTitle} itemImgPaths={item.itemImgPath} url={item.url} github={item.github} text={item.text} tech={item.tech} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PortFolio;