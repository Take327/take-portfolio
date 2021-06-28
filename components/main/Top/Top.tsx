
import React from 'react'
import styles from './Top.module.scss'
import ScrollButton from './Button/ScrollButton'

const Top: React.FC = () => {

    return (
        <section id="top">
            <div className={styles.top}>
                <div className={styles.titlearea}>
                    <h1>Take’s Portfolio</h1>
                </div>
                <ScrollButton />
            </div>
        </section>
    )

}
export default Top