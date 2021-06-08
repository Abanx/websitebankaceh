import React from 'react';
import {Grid, Button, Menu, MenuItem, Typography, ClickAwayListener} from '@material-ui/core';
//import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '@fontsource/roboto';
import CascadingHoverMenus2 from '../include/CascadingHoverMenus2';

export default function DropdownMenu(props) {
    
    return (
        <Grid container justify="flex-end" md={12} style={{maxHeight:40, marginRight:50}}>
            {props.menus.map((item)=>(
                <Grid item><CascadingHoverMenus2 menu={item}/></Grid>
            ))}
        </Grid>
    )
}