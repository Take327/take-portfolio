
import React from 'react'
import styles from './Top.module.scss'

const Top: React.FC = () => {

    return (
        <section id="top">
            <div className={styles.top}>
                <div className={styles.titlearea}>
                    <h1>Take’s Portfolio</h1>
                    <a className={styles.btn} href="#"><span>Zoning In</span></a>
                </div>
            </div>
        </section>
    )

}
export default Top