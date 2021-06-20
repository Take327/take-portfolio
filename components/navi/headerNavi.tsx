import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { naviData } from '../../dataset/naviData'
import { smoothScrollAction } from '../util/smoothScrollAction'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import styles from './navi.module.scss'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navi_header: {
            marginLeft: 'auto',
            marginRight: '10vw'
        },
        navi_list: {
            display: 'flex',
            alignItems: 'center',
            width: 'auto'
        },
        navi_item: {
            flexBasis: 'auto',
            whiteSpace: 'nowrap',
        },
        navi_item_text: {
            fontSize: '2rem',
        }


    })
);

const HeaderNavi = () => {
    const classes = useStyles();


    return (
        <nav className={styles.navi_area}>
            <ul className={styles.navi_ul}>
                {naviData.map((value, index) => {
                    return (
                        <li className={styles.navi_button} onClick={() => { smoothScrollAction(value.href) }} key={index}>
                            <a>
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