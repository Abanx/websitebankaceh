import React from 'react';
import ReactDOM from 'react-dom';
import {Button, CssBaseline, Grid, makeStyles} from '@material-ui/core';
import Navbar from './include/Navbar';
import Footer from './include/Footer';
import BeritaPage from './berita/BeritaPage';

export default function ShowBerita(props) {
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
            <Grid item xs={12} style={{minHeight:400}}>
                <BeritaPage/>
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>   
    )
}

if (document.getElementById('show_berita_div')) {
    ReactDOM.render(<ShowBerita />, document.getElementById('show_berita_div'));
}
