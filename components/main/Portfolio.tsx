import React from 'react'
import styles from './Main.module.scss'
import PortfolioBackdrop from './portfolios/PortfolioBackdrop';



const profileItems: { itemTitle: string, itemImgPath: { main: string, imgs: string[] } }[] = [
    {
        itemTitle: "Take's portfolio",
        itemImgPath: {
            main: '/img/portfolio/it-typing/it-typing_top.jpg',
            imgs: [
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_top.jpg',
            ]
        }
    },
    {
        itemTitle: "IT-TYPING",
        itemImgPath: {
            main: '/img/portfolio/it-typing/it-typing_typing.jpg',
            imgs: [
                '/img/portfolio/it-typing/it-typing_top.jpg',
                '/img/portfolio/it-typing/it-typing_typing.jpg',
                '/img/portfolio/it-typing/it-typing_registration.jpg',
                '/img/portfolio/it-typing/it-typing_login.jpg',
                '/img/portfolio/it-typing/it-typing_signup.jpg',
                '/img/portfolio/it-typing/it-typing_contact.jpg',
            ]
        }
    }
]



const PortFolio: React.FC = () => {

    return (
        <section id="portfolio">
            <div className={styles.portfolio}>
                <h2>works</h2>
                <div className={styles.portfolioItemsArea}>
                    {profileItems.map((item) => {
                        return (
                            <PortfolioBackdrop itemTitle={item.itemTitle} itemImgPaths={item.itemImgPath} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PortFolio;