import React from 'react';
import { Grid, Breadcrumbs, Typography, List, ListItem, useTheme, useMediaQuery } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import BeritaCard from '../homepage/bloks_menu/BeritaCard';
import BeritaCardHorizontal from './BeritaCardHorizontal';

export default function BeritaLists() {
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
                <Breadcrumbs aria-label="breadcrumb" style={{backgroundColor:"#FEF5E7", padding:10}}>
                    <Typography color="textPrimary">Beranda</Typography>
                    <Typography color="textPrimary">Berita</Typography>
                </Breadcrumbs>
            </Grid>
            {!isXS ? <Grid item sm={3} style={{backgroundColor:"lightgray"}}><ListMenu/></Grid> : ""}
            <Grid item xs={12} sm={9}>
                <ListContent/>
            </Grid>
        </Grid>
    )
}

function ListMenu(){
    return(
        <List component="nav"  aria-label="main mailbox folders">
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
        <Grid container justify="center" xs={12} spacing={2} style={{ marginBottom:5}}>
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
            <Grid item xs={12} style={{paddingBottom:10}}>
                <Pagination count={10} />
            </Grid>
        </Grid>
    );
}
