import React from 'react';
import { Grid, CardMedia, CardContent, Typography, CardActions, Button, Link } from '@material-ui/core';

export default function BeritaCardHorizontal() {
    return (
        <Grid container justify="flex-start" style={{backgroundColor:"white"}}>
            <Grid item md={3}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={window.location.origin + "/images/network.jpg"}
                    title="Contemplative Reptile"/>
            </Grid>
            <Grid item md={9}>
                <CardContent>
                    <Typography variant="body2" color="textPrimary">02 Juni 2021, 14:33 Wib</Typography>
                    <Link href="#" color="primary">PENGUMUMAN PEMBIAYAAN YANG BERDAMPAK COVID-19</Link>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Selengkapnya..</Button>
                </CardActions>
            </Grid>
        </Grid>
    )
}
