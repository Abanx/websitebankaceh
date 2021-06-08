
import React from 'react';
import { CssBaseline, Grid, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function ProfilVideos() {
    return (
        <Grid container justify="center" spacing={2}>
            <Grid item md={6}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/8mz7hn-RJyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
            </Grid>
            <Grid item md={6}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/fyDFdfx1SNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Grid>
        </Grid>
    )
}
