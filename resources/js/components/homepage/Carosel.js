import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid} from '@material-ui/core';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

function Carosel() {

    return (
            <Grid container>
                <Carousel showThumbs={false} autoPlay={true} transitionTime={500}>
                <div>
                    <img src="images/carosel1.jpg" />
                </div>
                <div>
                    <img src="images/carosel2.jpg" />
                </div>
                <div>
                    <img src="images/carosel3.png" />
                </div>
                <div>
                    <img src="images/carosel4.jpg" />
                </div>
            </Carousel>
            </Grid>
    );
}

export default Carosel;
