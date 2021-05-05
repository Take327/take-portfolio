import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import HeaderNavi from './navi/headerNavi'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: '#FFF'
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        title:{
            [theme.breakpoints.up('sm')]: {
                marginLeft:'60px'
            },
        },
    }),
);

type Props = {
    chengeOpenState: Function
}

const Header: React.FC<Props> = ({ chengeOpenState }) => {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar} color="default">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    className={classes.menuButton}
                    onClick={() => { chengeOpenState() }}
                >
                    <MenuIcon color="action" />
                </IconButton>

                <Typography className={classes.title}>
                    Take's portfolio
                </Typography>

                <HeaderNavi />

            </Toolbar>
        </AppBar>
    )
}

export default Header