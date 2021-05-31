import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, useMediaQuery, useTheme} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';

function Navbar() {

    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isLG = useMediaQuery(theme.breakpoints.down('lg'));
    const isXL = useMediaQuery(theme.breakpoints.down('xl'));

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        toolBar:{
          paddingTop:"5px",
          paddingBottom:'5px'
        }
      }));

      const classes = useStyles();

    return (
            <Grid container>
                <AppBar position="sticky" color="white">
                    <Toolbar variant="dense" className={classes.toolBar}>
                      <Logo/>
                      <Grid container justify="flex-end">
                        {isXS? <IconButton><MenuIcon/></IconButton> : <DropdownMenu/>}
                      </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
    );
}

export default Navbar;
