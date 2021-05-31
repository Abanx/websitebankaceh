import React from 'react';
import {useState} from 'react';
import { Grid, Paper, Tabs, Tab, AppBar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Berita from './tabs_menu/Berita';
import Pengumuman from './tabs_menu/Pengumuman';
import Lelang from './tabs_menu/Lelang';

function TabsMenu() {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = (event, newValue)=>{
        setSelectedTab(newValue);
    }
    return (
        <Grid container xs={12} style={{backgroundColor:"white"}}>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChange} >
                    <Tab label="Berita" />
                    <Tab label="Pengumuman" />
                    <Tab label="Lelang Pengadaan"/>
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <Berita/>}
            {selectedTab === 1 && <Pengumuman/>}
            {selectedTab === 2 && <Lelang/>}
        </Grid>
    );
}

export default TabsMenu;