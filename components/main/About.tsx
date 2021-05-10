import React from 'react'
import styles from './Main.module.scss'
import Paper from '@material-ui/core/Paper';


const About: React.FC = () => {
    return (
        <section id="about">
            <div className={styles.about}>
                <Paper elevation={3} className={styles.paper}>
                    デプロイテスト


                </Paper>
            </div>

        </section>
    )
}

export default About