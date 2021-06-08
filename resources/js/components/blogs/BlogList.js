import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Typography, Breadcrumbs, CssBaseline} from '@material-ui/core';
import Navbar from '../include/Navbar';
import Footer from '../include/Footer';

export default function BlogList() {
    return (
        <Grid container justify="center" spacing={2}>
            <CssBaseline/>
            <Grid item xs={12}>
                <Navbar/>
            </Grid>
            <Grid item xs={12}>
                <Breadcrumbs aria-label="breadcrumb" style={{backgroundColor:"#FEF5E7", padding:10}}>
                    <Typography color="textPrimary">Level 1</Typography>
                    <Typography color="textPrimary">Level 2</Typography>
                    <Typography color="textPrimary">Level 3</Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} style={{minHeight:350}}>
                <Typography variant="h5" style={{textAlign:"center"}} color="textPrimary">List of Pages</Typography>
                <ul>
                    <li><a href="###">halaman 1</a></li>
                    <li><a href="###">halaman 2</a></li>
                    <li><a href="###">halaman 3</a></li>
                </ul>
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )
}

if (document.getElementById('bloglist_div')) {
    ReactDOM.render(<BlogList/>, document.getElementById('bloglist_div'));
}
