import React from 'react';
import {Grid, Button, Menu, MenuItem, Typography, ClickAwayListener} from '@material-ui/core';
//import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './dropdownmenu.css';
import '@fontsource/roboto';
import { ExpandMore } from '@material-ui/icons';
import CascadingHoverMenus from '../berita/CascadingHoverMenus';
import CascadingHoverMenus2 from '../include/CascadingHoverMenus2';

const menu1 = {
    title: "Beranda",
    isParent: "Y",
    children: [
        {title: "Berita", isParent: "N", children: []},
        {title: "Lelang", isParent: "N", children: []},
        {title: "Pengumuman", isParent: "Y", children: [{title:"Internal", isParent:"No", children:[]}, {title:"External", isParent:"No", children:[]}]},
    ]
}
const menu2 = {
    title: "Tentang Kami",
    isParent: "Y",
    children: [
        {title: "Sejarah Singkat", isParent: "N", children: []},
        {title: "Visi, Misi & Motto", isParent: "N", children: []},
        {title: "Logo Bank Aceh", isParent: "N", children: []},
        {title: "Manajemen Periode Berjalan", isParent: "N", children: []}
    ]
}
const menu3 = {
    title: "Investor Relation",
    isParent: "Y",
    children: [
        {title: "Laporan Keuangan", isParent: "N", children: []},
        {title: "Laporan Tahunan", isParent: "N", children: []},
        {title: "Laporan GCG", isParent: "N", children: []},
        {title: "Pemodalan dan Pemegang Saham", isParent: "N", children: []}
    ]
}
const menu4 = {
    title: "Produk & Layanan",
    isParent: "Y",
    children: [
        {title: "Dana", isParent: "Y", children: [{title:"Giro Bank Aceh", isParent:"N", children:[]}, {title:"Deposito Mudharabah", isParent:"N", children:[]}]},
        {title: "Pembiayaan", isParent: "Y", children: [{title:"Pembiayaan Mudharabah", isParent:"N", children:[]}, {title:"Pembiayaan Musyarakah", isParent:"N", children:[]}]},
        {title: "Layanan", isParent: "Y", children: [{title:"RAHN (Gadai Emas)", isParent:"N", children:[]}, {title:"Bank Garansi Syariah", isParent:"N", children:[]}]},
    ]
}
const menu5 = {
    title: "Jaringan",
    isParent: "Y",
    children: [
        {title: "Jaringan Operasional", isParent: "N", children: []}
    ]
}

export default function DropdownMenu(props) {
    
    return (
        <Grid container justify="flex-end" md={12} style={{maxHeight:40, marginRight:50}}>
            <Grid item>
                <CascadingHoverMenus2 menu={menu1}/>
            </Grid>
            <Grid item>
                <CascadingHoverMenus2 menu={menu2}/>
            </Grid>
            <Grid item>
                <CascadingHoverMenus2 menu={menu3}/>
            </Grid>
            <Grid item>
                <CascadingHoverMenus2 menu={menu4}/>
            </Grid>
            <Grid item>
                <CascadingHoverMenus2 menu={menu5}/>
            </Grid>
        </Grid>
    )
}

/*

<div className="menu-bar">
                <ul>
                    <li>
                        <a href="#"><Typography variant="body2">Beranda</Typography></a>
                        <div className="sub-menu1">
                            <ul>
                                <li><a href="#">Berita</a></li>
                                <li><a href="#">Pengumuman</a></li>
                                <li><a href="#">Lelang Pengadaan</a></li>
                                <li><a href="#">Event</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#"><Typography variant="body2">Perusahaan</Typography></a>
                        <div className="sub-menu1">
                            <ul>
                                <li><a href="#">Sejarah</a></li>
                                <li><a href="#">Visi-Misi</a></li>
                                <li><a href="#">Target dan Sasaran</a></li>
                                <li><a href="#">Penghargaan</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#"><Typography variant="body2">Produk & Layanan</Typography></a></li>
                    <li><a href="#"><Typography variant="body2">Jaringan</Typography></a></li>
                    <li><a href="#"><Typography variant="body2">UMKM Corner</Typography></a></li>
                </ul>
            </div>

*/