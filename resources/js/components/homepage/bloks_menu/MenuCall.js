import React from 'react';
import { Grid, Paper, Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import { makeStyles } from '@material-ui/core/styles';

function MenuCall() {
    const backgroundImage = "images/call_center.jpg";
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
        blokDiv:{
          height:0, width:"90%", paddingBottom:"100%", 
          borderRadius:10, backgroundImage:`url(${backgroundImage})`, 
          backgroundPosition:"center center", backgroundRepeat:"no-repeat", 
          backgroundSize:"cover"
        },
        tombol:{
          backgroundColor:"#9CE425",
          opacity:0.7,
          textAlign:"center",
          marginTop:20,
          borderRadius:20
        }
      }));
    const classes = useStyles();
    

    return (
        <Grid item xs={12} sm={6} md={4} className={classes.root}  justify="center">
            <div className={classes.blokDiv}>
                <Grid container justify="center">
                    <Button href="https://www.bankaceh.co.id/?page_id=2" startIcon={<AddIcCallIcon/>} variant="contained" size="large" className={classes.tombol}>Contact Us</Button>
                </Grid>
            </div>
        </Grid>
    );
}

export default MenuCall;
