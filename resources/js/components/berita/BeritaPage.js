import React from 'react';
import {useState} from 'react';
import { Grid, Typography, Breadcrumbs } from '@material-ui/core';
import CascadingHoverMenus from './CascadingHoverMenus';

export default function BeritaPage() {

    return (
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
                <Breadcrumbs aria-label="breadcrumb" style={{backgroundColor:"#FEF5E7", padding:10}}>
                    <Typography color="textPrimary">Beranda</Typography>
                    <Typography color="textPrimary">Berita</Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" style={{textAlign:"center"}} color="textPrimary">PENGUMUMAN PEMBIAYAAN BERDAMPAK COVID-19</Typography>
                <CascadingHoverMenus/>
            </Grid>
        </Grid>
    )
}
