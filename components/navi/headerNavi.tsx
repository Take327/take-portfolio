import { naviData } from '../../dataset/naviData'
import { smoothScrollAction } from '../util/smoothScrollAction'
import styles from './navi.module.scss'

const HeaderNavi = () => {
    return (
        <nav className={styles.navi_area}>
            <ul className={styles.navi_ul}>
                {naviData.map((value, index) => {
                    return (
                        <li className={styles.navi_button} key={index}>
                            <a onClick={() => { smoothScrollAction(value.href) }}>
                                {value.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )

}

export default HeaderNavi