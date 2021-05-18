import React, { useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styles from '../Main.module.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


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
    },
    url: string,
    github: string
}

const PortfolioBackdrop: React.FC<Props> = ({ itemTitle, itemImgPaths, url, github }) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [targetImgPath, setTargetImgPath] = useState<string>(itemImgPaths.main)

    const handleClose = (e) => {
        switch (e.target.id) {
            case 'backdrop':
                setOpen(false);
                break;
            default:
                break;
        }
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const changeActiveImg = (imgPath: string) => {
        setTargetImgPath(imgPath);
    }

    return (
        <div className={styles.portfolioItem}>
            <img src={itemImgPaths.main} className={styles.mainImg} alt={itemTitle} onClick={handleToggle} />
            <h4>{itemTitle}</h4>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose} id="backdrop">
                <Paper className={styles.paper}>
                    <div className={styles.itemTexts}>
                        <h2>{itemTitle}</h2>

                        <div className={styles.links}>
                            <Link href={url} >
                                <LinkIcon fontSize="small" />{url}
                            </Link>
                            <Link href={github} target="_blank">
                                <GitHubIcon fontSize="small" />GitHub
                            </Link>

                        </div>
                        <Typography >

                        </Typography>
                    </div>
                    <div className={styles.itemImgArea}>
                        <div className={styles.imgs}>
                            {
                                itemImgPaths.imgs.map((imgPath) => {
                                    return <img src={imgPath} onClick={() => changeActiveImg(imgPath)} />
                                })
                            }
                        </div>
                        <div className={styles.activeImg}>
                            <img src={targetImgPath} />
                        </div>

                    </div>

                </Paper>

            </Backdrop>
        </div >
    )
}

export default PortfolioBackdrop