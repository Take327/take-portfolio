import React from 'react'
import styles from './Main.module.css'
import Paper from '@material-ui/core/Paper';


const profileItems: { itemTitle: string, itemImgPath: string }[] = [
    { itemTitle: "Take's portfolio", itemImgPath: '../' },
    { itemTitle: "IT-TYPING", itemImgPath: '../' },
]

const PortFolio: React.FC = () => {

    return (
        <section>
            <div id="portfolio" className={styles.portfolio}>
                <h2>works</h2>
                <div className={styles.portfolioItem}>
                    {profileItems.map((item) => {
                        return (<Paper elevation={3} className={styles.paper}>
                            {item.itemTitle}
                        </Paper>)
                    })}

                </div>
            </div>
        </section>
    )
}

export default PortFolio;