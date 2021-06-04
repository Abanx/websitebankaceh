import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useTheme, useMediaQuery} from '@material-ui/core';

export default function Logo() {
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isLG = useMediaQuery(theme.breakpoints.down('lg'));
    const isXL = useMediaQuery(theme.breakpoints.down('xl'));
    let logoHeight = 20;
    if(isSM){
        logoHeight = 30;
    }
    else if(isMD){
        logoHeight = 40;
    }
    else if(isLG){
        logoHeight = 50;
    }
    else if(isXL){
        logoHeight = 60;
    }

    const useStyles = makeStyles((theme)=>({
        logo : {
            height:logoHeight,
            cursor:'pointer',
        }
    }));

    const classes = useStyles();
    const logoClick = ()=>{
        window.location = window.location.origin;
    }
    return (
        <div onClick={logoClick}>
            <img src={window.location.origin + "/images/bank_aceh_oke.png"} className={classes.logo} alt="logo"/>
        </div>
    )
}
