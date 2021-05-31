import React from 'react';
import { Grid, Paper, Button, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function MenuSosmed() {

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
      }));
    const classes = useStyles();
    const backgroundImage = "images/sosial.jpg";

    return (
        <Grid item xs={12} sm={6} md={4} className={classes.root}  justify="center">
            <div style={{height:0, width:"90%", paddingBottom:"100%", borderRadius:10, backgroundImage:`url(${backgroundImage})`, backgroundPosition:"center center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <h2 style={{textAlign:"center"}}>Media Sosial</h2>
                <Grid container justify="center">
                  <Grid item>
                    <IconButton>
                        <FacebookIcon style={{fontSize:50, color:"blue"}}/>
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                        <TwitterIcon style={{fontSize:50, color:"#259AE4"}}/>
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                        <InstagramIcon style={{fontSize:50, color:"#E425CF"}}/>
                    </IconButton>
                  </Grid>
                </Grid>
            </div>
        </Grid>
    );
}

export default MenuSosmed;
