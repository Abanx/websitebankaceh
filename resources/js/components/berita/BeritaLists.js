import React from 'react';
import { Grid, Breadcrumbs, Typography, List, ListItem } from '@material-ui/core';
import BeritaCard from '../homepage/bloks_menu/BeritaCard';
import BeritaCardHorizontal from './BeritaCardHorizontal';

export default function BeritaLists() {
    return (
        <Grid container justify="center" spacing={2}>
            <Grid item sm={12}>
                <Breadcrumbs aria-label="breadcrumb" style={{backgroundColor:"#FEF5E7", padding:10}}>
                    <Typography color="textPrimary">Beranda</Typography>
                    <Typography color="textPrimary">Berita</Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item sm={3} style={{backgroundColor:"lightgray"}}>
                <ListMenu/>
            </Grid>
            <Grid item sm={9}>
                <ListContent/>
            </Grid>
        </Grid>
    )
}

function ListMenu(){
    return(
        <List style={{backgroundColor:"white"}} component="nav"  aria-label="main mailbox folders">
            <ListItem button>
                Berita
            </ListItem>
            <ListItem button>
                Pengumuman
            </ListItem>
            <ListItem button>
                Lelang
            </ListItem>
        </List>
    );
}

function ListContent(){
    return(
        <Grid container justify="center" xs={12} spacing={2} style={{backgroundColor:"white", marginBottom:5}}>
            <Grid item md={12}>
                <BeritaCardHorizontal/>
            </Grid>
            <Grid item md={12}>
                <BeritaCardHorizontal/>
            </Grid>
            <Grid item md={12}>
                <BeritaCardHorizontal/>
            </Grid>
            <Grid item md={12}>
                <BeritaCardHorizontal/>
            </Grid>
            <Grid item md={12}>
                <BeritaCardHorizontal/>
            </Grid>
        </Grid>
    );
}
