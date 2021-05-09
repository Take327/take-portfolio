import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { naviData } from '../../dataset/naviData'
import styles from './navi.module.css'
import { smoothScrollAction } from '../util/smoothScrollAction'

const HeaderNavi = () => {
    return (
        <nav className={styles.navi_header}>
            <List className={styles.navi_list}>
                {naviData.map((value) => {
                    return (
                            <ListItem button key={value.title} className={styles.navi_item} onClick={()=>{smoothScrollAction(value.href)}}>
                                <ListItemText primary={value.title} />
                            </ListItem>
                    )
                })}
            </List>
        </nav>

    )

}

export default HeaderNavi