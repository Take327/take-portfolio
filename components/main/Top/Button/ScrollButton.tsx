import { FC } from 'react'
import styles from './ScrollButton.module.scss'



const ScrollButton: FC = () => {

    return (
        <div className={styles.basicBox}>
            ポートフォリオを見る
            <svg width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                <rect x='0' y='0' fill='none' width='130' height='65' />
            </svg>
        </div>
    )
}

export default ScrollButton