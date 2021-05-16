import React, { ReactElement } from 'react'
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

type Props = {
    itemTitle: string,
    itemImgPaths: {
        main: string,
        imgs: string[]
    }
}

const PortfolioBackdrop: React.FC<Props> = ({ itemTitle, itemImgPaths }) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClose = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target)
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.portfolioItem}>
            <img src={itemImgPaths.main} className={styles.mainImg} alt={itemTitle} onClick={handleToggle} />
            <h4>{itemTitle}</h4>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose} >
                <Paper className={styles.paper}>
                    <div className={styles.itemTexts}>
                        test
                    </div>
                    <div className={styles.itemImgArea}>
                        <div className={styles.imgs}>
                            {
                                itemImgPaths.imgs.map((imgPath) => {
                                    return <img src={imgPath} />
                                })
                            }
                        </div>
                        <div className={styles.activeImg}>

                        </div>

                    </div>

                </Paper>

            </Backdrop>
        </div>
    )
}

export default PortfolioBackdrop