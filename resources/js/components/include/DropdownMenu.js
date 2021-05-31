import React from 'react';
import {Grid, Button, Menu, MenuItem} from '@material-ui/core';
import './dropdownmenu.css';

export default function DropdownMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container justify="flex-end" style={{marginLeft:20}}>
            <div className="menu-bar">
                <ul>
                    <li>
                        <a href="#">Beranda</a>
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
                        <a href="#">Perusahaan</a>
                        <div className="sub-menu1">
                            <ul>
                                <li><a href="#">Sejarah</a></li>
                                <li><a href="#">Visi-Misi</a></li>
                                <li><a href="#">Target dan Sasaran</a></li>
                                <li><a href="#">Penghargaan</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Produk & Layanan</a></li>
                    <li><a href="#">Jaringan</a></li>
                    <li><a href="#">UMKM corner</a></li>
                </ul>
            </div>
        </Grid>
    )
}