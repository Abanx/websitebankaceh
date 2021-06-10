import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import EditIcon from '@material-ui/icons/Edit';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import { mainListItems, secondaryListItems } from './listItems';
import Copyright from '../footer/Copyright';
import BlogContents from './BlogContents';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
},
toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
},
toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
},
appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
},
appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
    }),
},
menuButton: {
    marginRight: 36,
},
menuButtonHidden: {
    display: 'none',
},
title: {
    flexGrow: 1,
},
drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
    }),
},
drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
    width: theme.spacing(9),
    },
},
appBarSpacer: theme.mixins.toolbar,
content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
},
container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
},
paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
},
fixedHeight: {
    height: 240,
},
dashboardMenu: {
    color: 'rgba(0, 0, 0, 0.87)',
    textDecorationLine: 'none',
},
usersMenu: {
    color: 'rgba(0, 0, 0, 0.87)',
    textDecorationLine: 'none',
},
blogsMenu: {
    // color: 'rgba(0, 0, 0, 0.87)',
    // textDecorationLine: 'none',
},
logoutMenu: {
    color: 'rgba(0, 0, 0, 0.87)',
    textDecorationLine: 'none',
}
}));

export default function Blogs() {
const classes = useStyles();
const [open, setOpen] = React.useState(true);
const handleDrawerOpen = () => {
    setOpen(true);
};
const handleDrawerClose = () => {
    setOpen(false);
};
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
            <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Blogs
        </Typography>
        {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
            </Badge>
        </IconButton> */}
        </Toolbar>
    </AppBar>
    <Drawer
        variant="permanent"
        classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
    >
        <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
        </IconButton>
        </div>
        <Divider />
        <List className={classes.dashboardMenu} component="a" href="/admin/dashboard">
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </List>
        <List className={classes.usersMenu} component="a" href="/admin/users">
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItem>
        </List>
        <List className={classes.blogsMenu}>
            <ListItem button selected>
                <ListItemIcon>
                    <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Blogs" />
            </ListItem>
        </List>
        <List>
            <ListItem button>
                <ListItemIcon>
                    <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Menu" />
            </ListItem>
        </List>
        <List>
            <ListItem button>
                <ListItemIcon>
                    <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Menu 4" />
            </ListItem>
        </List>
        <Divider />
        <List className={classes.logoutMenu} component="a" href="/admin">
            <ListItem button>
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Keluar"/>
            </ListItem>
        </List>
    </Drawer>
    <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
            {/* <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaper}>
                
            </Paper>
            </Grid> */}
            <BlogContents />
        </Grid>
        <Box pt={4}>
            <Copyright />
        </Box>
        </Container>
    </main>
    </div>
);
}