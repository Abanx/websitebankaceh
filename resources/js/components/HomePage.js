import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Grid, makeStyles} from '@material-ui/core';
import Navbar from './include/Navbar';
import Carosel from './homepage/Carosel';
import BlokMenus from './homepage/BlokMenus';
import TabsMenu from './homepage/TabsMenu';
import Footer from './include/Footer';
import Kerjasama from './homepage/Kerjasama';

function HomePage(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: "#28B463"
        }
      }));
    const classes = useStyles();
    return (
        <Grid container xs={12} justify="center" spacing={1} className={classes.root}>
            {/* Navbar Menu Segmen */}
            <Grid item xs={12} md={11}>
                <Navbar/>
            </Grid>
            {/* Carousel Display Segmen */}
            <Grid item xs={12} md={11}>
                <Carosel/>
            </Grid>
            {/* Bloks Menu Segmen */}
            <Grid item xs={12} md={11}>
                <BlokMenus/>
            </Grid>
            {/* Tabs Menu Segmen */}
            <Grid item xs={12} md={11} >
                <TabsMenu/>
            </Grid>
            {/* Kerjasama Segmen */}
            <Grid item xs={12} md={11}>
                <Kerjasama/>
            </Grid>
            {/* Footer Segmen */}
            <Grid item xs={12} md={11} >
                <Footer/>
            </Grid>
        </Grid>   
    )
}

export default HomePage;

if (document.getElementById('homepage_div')) {
    ReactDOM.render(<HomePage/>, document.getElementById('homepage_div'));
}
