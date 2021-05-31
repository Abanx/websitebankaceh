import React from 'react';
import { Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuJaringan from './bloks_menu/MenuJaringan';
import MenuCall from './bloks_menu/MenuCall';
import MenuSosmed from './bloks_menu/MenuSosmed';

function BlokMenus() {

    return (
            <Grid container justify="center" xs={12} style={{backgroundColor:"white"}}>
                <MenuJaringan/>
                <MenuCall/>
                <MenuSosmed/>
            </Grid>
    );
}

export default BlokMenus;
