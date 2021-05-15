import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styles from '../Main.module.scss'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);

type Props ={
    itemTitle:string,

}

const PortfolioBackdrop = () => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    return (
        <Backdrop className={classes.backdrop} open={open}>
            <Paper className={styles.paper}>
                
            </Paper>
        </Backdrop>
    )
}

export default PortfolioBackdrop