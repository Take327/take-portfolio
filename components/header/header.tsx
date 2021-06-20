import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderNavi from '../navi/headerNavi'
import styles from './header.module.scss'

type Props = {
    chengeOpenState: Function
}

const Header: React.FC<Props> = ({ chengeOpenState }) => {


    return (
        <header className={styles.headerbar}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => { chengeOpenState() }}
                    className={styles.menubutton}
                >
                    <MenuIcon color="action" />
                </IconButton>

                <h2>
                    Take's portfolio
                </h2>

                <HeaderNavi />
        </header>

    )
}

export default Header