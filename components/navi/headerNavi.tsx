import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { naviData } from '../../dataset/naviData'
import styles from './navi.module.css'


const HeaderNavi = () => {
    return (
        <nav className={styles.navi_header}>
            <List className={styles.navi_list}>
                {naviData.map((value) => {
                    return (
                        <a href={value.href}>
                            <ListItem button key={value.title} className={styles.navi_item}>
                                <ListItemText primary={value.title} />
                            </ListItem>
                        </a>

                    )
                })}
            </List>
        </nav>

    )

}

export default HeaderNavi