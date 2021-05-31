import React from 'react';
import { Grid, Link, List, ListItem, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

function Berita() {

    return (
            <Grid container justify="flex-start" xs={12} style={{backgroundColor:"white", marginLeft:10}}>
                <Grid item xs={12}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem>
                            <Link href="#" variant="body2">Pengumuman Pengadaan Aplikasi Internet Banking Corporate PT. Bank Aceh Syariah</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#" variant="body2">Pengumuman Libur Operasional Bank Dalam Rangka Libur Hari Natal dan Tutup Buku Tahun 2020</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#" variant="body2">Pengumuman Libur Cuti Bersama</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#" variant="body2">Gratis Pulsa Dari Telkomsel di ATM Bank Aceh Syariah</Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} style={{paddingBottom:10}}>
                    <Pagination count={10} />
                </Grid>
            </Grid>
    );
}

export default Berita;

/*
<ol>
                    <li><a href="#">Pengumuman Pengadaan Aplikasi Internet Banking Corporate PT. Bank Aceh Syariah</a></li>
                    <li>Berita 2</li>
                    <li>Berita 3</li>
                </ol>
*/