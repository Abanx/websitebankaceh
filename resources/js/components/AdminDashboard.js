import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Grid, IconButton} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function AdminDashboard() {
    return (
        <div>
            <p>React Component -- Admin Dashboard</p>
            <Button variant="contained" color="primary">Tombol</Button>
            <IconButton>
                <FacebookIcon/>
            </IconButton>
            <Grid container xs={12} md={12} justify="center">
                <Grid item>
                    <IconButton>
                        <FacebookIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton>
                        <FacebookIcon style={{fontSize:40, color:"blue"}}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/fyDFdfx1SNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                </Grid>
                <Grid item>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/8mz7hn-RJyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
            </Grid>
        </div>
    )
}

if (document.getElementById('dashboard_div')) {
    ReactDOM.render(<AdminDashboard />, document.getElementById('dashboard_div'));
}
