import { Grid, Link, useTheme, useMediaQuery, Typography, IconButton, CssBaseline} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));
    
    const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor:"gray"
        },
        title : {
            textAlign: "center"
        },
        hakCipta:{
            backgroundColor:"#808080",
            marginTop:0
        }
      }));

      const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={12} md={4}>
                <h5 className={classes.title}>Bank Aceh Syariah Terdaftar dan diawasi oleh</h5>
                <ul style={{marginLeft:10}}>
                    <li><Link href="#" color="textPrimary">Otoritas Jasa Keuangan</Link></li>
                    <li><Link href="#" color="textPrimary">Lembaga Penjamin Simpanan</Link></li>
                </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <h5 className={classes.title}>Kantor Pusat</h5>
                <p style={{marginLeft:10}}>Jl. Mr. Mohd. Hasan No. 89, Batoh, Banda Aceh, Contact Center 1500845 Telp. (0651) 22966 (hunting), Faks. (0651) 32598.</p>
            </Grid>
            <Grid item justify="center" xs={12} sm={6} md={4} >
                <h5 className={classes.title}>Sosial Media</h5>
                {/* <Typography variant="body1" style={{textAlign:"center"}} color="textSecondary" component="h5">Tautan Berguna</Typography> */}
                <Grid container justify="center">
                    <IconButton href="https://www.facebook.com">
                        <FacebookIcon style={{fontSize:40, color:"blue"}}/>
                    </IconButton>
                    <IconButton href="https://www.twitter.com">
                        <TwitterIcon style={{fontSize:40, color:"#259AE4"}}/>
                    </IconButton>
                    <IconButton href="https://www.instagram.com">
                        <InstagramIcon style={{fontSize:40, color:"#E425CF"}}/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item xs={12} justify="center" className={classes.hakCipta}>
                <p style={{textAlign:"center"}}>Hak Cipta &copy; 2021 | PT.Bank Aceh Syariah</p>
            </Grid>
        </Grid>
    )
}
