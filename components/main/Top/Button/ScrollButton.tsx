import { FC } from 'react'
import styles from './ScrollButton.module.scss'
import {smoothScrollAction} from '../../../util/smoothScrollAction'



const ScrollButton:FC = () => {

    return (
        <div className={styles.basicBox}>
            CONTACT
            <svg width="200" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg" onClick={()=>smoothScrollAction('#contact')}>
                <rect x='0' y='0' fill='none' width='200' height='65' />
            </svg>
        </div>
    )
}

export default ScrollButton