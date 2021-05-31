import { Grid, makeStyles } from '@material-ui/core'
import { Height } from '@material-ui/icons';
import React from 'react'

export default function Kerjasama() {
    const useStyles = makeStyles((theme)=>({
        root: {
            backgroundColor: "white"
        },
        title : {
            textAlign:"center",
            padding: 5,
            color:"white",
            backgroundColor:"darkgreen",
            opacity: 0.6
        },
        image : {
            width:"100%",
            Height: 200,
            objectFit:"cover"
        }
    }));

    const classes = useStyles();

    return (
        <Grid container justify="center" spacing={0} className={classes.root}>
            <Grid item xs={12} sm={6}>
                <h3 className={classes.title}>Club Members</h3>
                <img src="images/banner-club-member.jpg" alt="img" className={classes.image}></img>
            </Grid>
            <Grid item xs={12} sm={6}>
                <h3 className={classes.title}>Partners and Programs</h3>
                <img src="images/partners.jpg" alt="img" className={classes.image}></img>
            </Grid>
        </Grid>
    )
}
