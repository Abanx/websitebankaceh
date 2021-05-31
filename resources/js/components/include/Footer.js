import { Grid, Link, useTheme, useMediaQuery } from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

export default function Footer() {
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));
    let titleText = "left";
    if(isXS){
        titleText = "center";
    }
    const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor:"gray"
        },
        title : {
            textAlign: titleText,
            marginLeft:10,

        },
        hakCipta:{
            backgroundColor:"#808080"
        }
      }));

      const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={12} md={4}>
                <h5 className={classes.title}>Bank Aceh Syariah Terdaftar dan diawasi oleh</h5>
                <ul style={{marginLeft:10}}>
                    <li><Link href="#">Otoritas Jasa Keuangan</Link></li>
                    <li><Link href="#">Lembaga Penjamin Simpanan</Link></li>
                </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <h5 className={classes.title}>Kantor Pusat</h5>
                <p style={{marginLeft:10}}>Jl. Mr. Mohd. Hasan No. 89, Batoh, Banda Aceh, Contact Center 1500845 Telp. (0651) 22966 (hunting), Faks. (0651) 32598.</p>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <h4 style={{textAlign:"center"}}>Tautan Berguna</h4>
                <ul>
                    <li><Link href="#">Peta Situs</Link></li>
                    <li><Link href="#">Security Awareness</Link></li>
                    <li><Link href="#">Situs Karir</Link></li>
                    <li><Link href="#">Situs Lelang Angunan</Link></li>
                    <li><Link href="#">Situs Lelang Pengadaan</Link></li>
                </ul>
            </Grid>
            <hr></hr>
            <Grid item xs={12} justify="center" className={classes.hakCipta}>
                <p style={{textAlign:"center"}}>Hak Cipta &copy; 2021 | PT.Bank Aceh Syariah</p>
            </Grid>
        </Grid>
    )
}
