import React from 'react'
import styles from './Main.module.scss'
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';



const profileItems: { itemTitle: string, itemImgPath: string }[] = [
    { itemTitle: "Take's portfolio", itemImgPath: '/img/portfolio/it-typing/it-typing_top.jpg' },
    { itemTitle: "IT-TYPING", itemImgPath: '/img/portfolio/it-typing/it-typing_typing.jpg' },
]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);

const PortFolio: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <section id="portfolio">
            <div className={styles.portfolio}>
                <h2>works</h2>
                <div className={styles.portfolioItem}>
                    {profileItems.map((item) => {
                        return (
                            <div>
                                <img src={item.itemImgPath} alt={item.itemTitle} onClick={handleToggle} />
                                <h4>{item.itemTitle}</h4>
                                <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                                    <Paper className={styles.paper}>
                                        {item.itemTitle}
                                    </Paper>
                                </Backdrop>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PortFolio;