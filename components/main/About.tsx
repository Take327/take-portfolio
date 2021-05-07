import React from 'react'
import styles from './Main.module.css'
import Paper from '@material-ui/core/Paper';


const About: React.FC = () => {
    return (
        <section>
            <div id="about" className={styles.about}>
                <Paper elevation={3} className={styles.paper}>
                    test
                </Paper>
            </div>

        </section>
    )
}

export default About