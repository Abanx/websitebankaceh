import React from 'react';
import { Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Pengumuman() {

    return (
            <Grid container justify="center" xs={12} style={{backgroundColor:"white"}}>
                <ol>
                    <li>Pengumuman 1</li>
                    <li>Pengumuman 2</li>
                    <li>Pengumuman 3</li>
                </ol>
            </Grid>
    );
}

export default Pengumuman;