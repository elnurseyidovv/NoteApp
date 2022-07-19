import React from 'react'
import {AppBar, Button, Divider, makeStyles, Toolbar} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const drawerWidth = 240
const appBarHeight = 70

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%',
    },
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    active: {
        background: '#f4f4f4'
    },
    drawerTitle: {
        borderStyle: 'dashed',
        marginTop: '30px',
        marginLeft: '10px',
        marginRight: '10px',
        textAlign: 'center',
    },
    appBar: {
        height: appBarHeight,
        backgroundColor: 'white',
        width: `calc(100% - ${drawerWidth}px)`,
        borderStyle: 'outset',
    },
    appBarTitle: {
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'All Notes',
            icon: <SubjectOutlined color="primary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="primary" />,
            path: '/create'
        },
    ];

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar>
                    <Typography color={"primary"} variant='h4' className={classes.appBarTitle}>
                        {location.pathname === '/create' ? 'CREATE PAGE' : (location.pathname === '/' ? 'NOTES PAGE' : 'NOT FOUND')}
                    </Typography>
                    {location.pathname === '/' && <Button
                        onClick={() => {window.scrollTo(0, 0)}}
                        startIcon={<ArrowUpwardIcon />}
                        color={"primary"}
                    />}
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
            >
                <div>
                    <Typography variant="h5" color='primary' className={classes.drawerTitle}>
                        Notes App
                    </Typography>
                </div>
                <br/>
                <Divider />
                <br/>
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <div className={classes.page}>
                { children }
            </div>
        </div>
    )
}