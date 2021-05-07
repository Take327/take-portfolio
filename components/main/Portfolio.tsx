import React from 'react'
import styles from './Main.module.css'
import Paper from '@material-ui/core/Paper';



export const PortfolioItem: React.FC<{ itemTitle: string, itemImgPath: string }> = ({ itemTitle, itemImgPath }) => {
    return (
        <Paper elevation={3} className={styles.paper}>
            {itemTitle}
        </Paper>
    )

}









const PortFolio: React.FC = () => {

    return (
        <section>
            <div id="portfolio" className={styles.portfolio}>
                <h2>works</h2>
                <div className={styles.portfolioItem}>
                    <PortfolioItem itemTitle="test" itemImgPath="testpath" />
                    <PortfolioItem itemTitle="test" itemImgPath="testpath" />
                    <PortfolioItem itemTitle="test" itemImgPath="testpath" />

                </div>
            </div>
        </section>
    )
}

export default PortFolio;