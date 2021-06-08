import React from 'react';
import ReactDOM from 'react-dom';
import {Button, CssBaseline, Grid, makeStyles} from '@material-ui/core';
import Navbar from './include/Navbar';
import Carosel from './homepage/Carosel';
import BlokMenus from './homepage/BlokMenus';
import TabsMenu from './homepage/TabsMenu';
import Footer from './include/Footer';
import Kerjasama from './homepage/Kerjasama';
import ProfilVideos from './homepage/ProfilVideos';

export default function HomePage() {
    const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: "white"
        }
      }));
    const classes = useStyles();
    return (
        <Grid container xs={12} justify="center" spacing={0} className={classes.root}>
            <CssBaseline/>
            {/* Navbar Menu Segmen */}
            <Grid item xs={12}>
                <Navbar/>
            </Grid>
            {/* Carousel Display Segmen */}
            <Grid item xs={12}>
                <Carosel/>
            </Grid>
            {/* Bloks Menu Segmen */}
            <Grid item justify="center" xs={12} md={11}>
                <br></br>
                <BlokMenus/>
                <br></br>
            </Grid>
            {/* Profil Vides Menu Segmen */}
            <Grid item justify="center" xs={12} md={11}>
                <br></br>
                <ProfilVideos/>
                <br></br>
            </Grid>
            {/* Tabs Menu Segmen */}
            <Grid item justify="center" xs={12} sm={11}>
                <TabsMenu/>
            </Grid>
            {/* Kerjasama Segmen */}
            <Grid item justify="center" xs={12} sm={11}>
                <Kerjasama/>
            </Grid>
            {/* Footer Segmen */}
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>   
    )
}

//export default HomePage;

if (document.getElementById('homepage_div')) {
    ReactDOM.render(<HomePage/>, document.getElementById('homepage_div'));
}
