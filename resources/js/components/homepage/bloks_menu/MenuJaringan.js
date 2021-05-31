import React from 'react';
import { Grid, Paper, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function MenuJaringan() {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
          },
        },
        tombol:{
          backgroundColor:"#25E476",
          opacity:0.7,
          color:"red",
          width:"100%",
          borderRadius:20
        }
      }));
    const classes = useStyles();
    const backgroundImage = "images/network.jpg";

    return (
        <Grid item xs={12} sm={6} md={4} className={classes.root}  justify="center">
            <div style={{height:0, width:"90%", paddingBottom:"100%", borderRadius:10, textAlign:"center", backgroundImage:`url(${backgroundImage})`, backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <h2 style={{textAlign:"center"}}>Jaringan</h2>
                <Grid container xs={12} spacing={3} justify="center" style={{ margin:"auto"}}>
                  <Grid item xs={12}>
                    <Button href="https://www.bankaceh.co.id/?page_id=231" variant="contained" className={classes.tombol}>Kantor Bank Aceh</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button href="https://www.bankaceh.co.id/?page_id=237" variant="contained" className={classes.tombol}>ATM Bank Aceh</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button href="https://www.bankaceh.co.id/?page_id=397" variant="contained" className={classes.tombol}>Bank Peserta ATM Bersama</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button href="https://www.bankaceh.co.id/?page_id=787" variant="contained" className={classes.tombol}>Bank Peserta MEPS</Button>
                  </Grid>
                </Grid>
            </div>
        </Grid>
    );
}

export default MenuJaringan;
