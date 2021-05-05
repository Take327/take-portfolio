import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { naviData } from '../../dataset/naviData'



const headerData: { title: string }[] = [

    {
        title: 'トップ'
    },
    {
        title: 'このサイトについて'
    },
    {
        title: 'ポートフォリオ'
    },
    {
        title: '連絡先'
    }

]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navi: {
            marginLeft: 'auto',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        naviList: {
            display: 'flex'
        },
        naviListItem: {
            width: 'auto'
        }
    }),
);




const HeaderNavi = () => {
    const classes = useStyles();


    return (
        <nav className={classes.navi}>
            <List className={classes.naviList}>
                {naviData.map((value) => {
                    return (
                        <ListItem button key={value.title} className={classes.naviListItem}>
                            <ListItemText primary={value.title} />
                        </ListItem>
                    )
                })}
            </List>
        </nav>

    )

}

export default HeaderNavi