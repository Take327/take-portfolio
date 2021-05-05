import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { naviData } from '../../dataset/naviData'



const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },

    })
);

type Props = {
    openState: boolean,
    chengeOpenState: Function
}

const SideNavi: React.FC<Props> = ({ openState, chengeOpenState }) => {
    const classes = useStyles();

    return (
        <Hidden smUp implementation="css">
            <Drawer
                //container={this.props.container}
                variant="temporary"
                //anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={openState}
                onClose={() => chengeOpenState()}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} >
                    <Divider />
                    <List>
                        {naviData.map((value) => {
                            return (
                                <ListItem button key={value.title}>
                                    <ListItemText primary={value.title} />
                                </ListItem>
                            )
                        })}
                    </List>
                    <Divider />
                </div>
            </Drawer>
        </Hidden>
    )
}

export default SideNavi

