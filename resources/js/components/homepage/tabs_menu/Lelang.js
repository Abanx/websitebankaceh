import React from 'react';
import { Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Lelang() {

    return (
            <Grid container justify="center" xs={12} style={{backgroundColor:"white"}}>
                <ol>
                    <li>Lelang 1</li>
                    <li>Lelang 2</li>
                    <li>Lelang 3</li>
                </ol>
            </Grid>
    );
}

export default Lelang;