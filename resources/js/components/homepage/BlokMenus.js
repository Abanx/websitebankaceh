import React from 'react';
import { Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuJaringan from './bloks_menu/MenuJaringan';
import MenuCall from './bloks_menu/MenuCall';
import MenuSosmed from './bloks_menu/MenuSosmed';
import BeritaCard from './bloks_menu/BeritaCard';

function BlokMenus() {
    const datas = [
        {image: window.location.origin+"/images/berita1.jpg",
         judul: "PENGUMUMAN PEMBIAYAAN YANG BERDAMPAK COVID-19",
         desc: "Pengumuman pembiayaan yang berdampak covid-19"
        },
        {image: window.location.origin+"/images/berita2.jpg",
         judul: "PENGUMUMAN PEMBIAYAAN YANG BERDAMPAK COVID-19",
         desc: "Pengumuman pembiayaan yang berdampak covid-19"
        },
        {image: window.location.origin+"/images/berita3.jpg",
         judul: "PENGUMUMAN PEMBIAYAAN YANG BERDAMPAK COVID-19",
         desc: "Pengumuman pembiayaan yang berdampak covid-19"
        },
        {image: window.location.origin+"/images/berita4.jpg",
         judul: "PENGUMUMAN PEMBIAYAAN YANG BERDAMPAK COVID-19",
         desc: "Pengumuman pembiayaan yang berdampak covid-19"
        }
    ]
    return (
            <Grid container justify="center" xs={12} spacing={2} style={{backgroundColor:"white"}}>
                {/* <MenuJaringan/> */}
                {/* <MenuCall/> */}
                {/* <MenuSosmed/> */}
                <Grid item md={3}>
                    <BeritaCard data={datas[0]}/>
                </Grid>
                <Grid item md={3}>
                    <BeritaCard data={datas[1]}/>
                </Grid>
                <Grid item md={3}>
                    <BeritaCard data={datas[2]}/>
                </Grid>
                <Grid item md={3}>
                    <BeritaCard data={datas[3]}/>
                </Grid>
            </Grid>
    );
}

export default BlokMenus;
