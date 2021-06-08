import React from 'react';
import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {Grid, Typography, Breadcrumbs, CssBaseline} from '@material-ui/core';
import axios from 'axios';
import Navbar from '../include/Navbar';
import Footer from '../include/Footer';

export default function BlogPage(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`http://dev.semangatngedrakor.my.id/api/blog/${props.id}`).then(res=>{
          console.log(res.data);
          setData(res.data.data);
      });
    }, []); 

    return (
        <Grid container justify="center" spacing={2}>
            <CssBaseline/>
            <Grid item xs={12}>
                <Navbar/>
            </Grid>
            <Grid item xs={12} sm={11}>
                <Breadcrumbs aria-label="breadcrumb" style={{backgroundColor:"#FEF5E7", padding:10}}>
                    <Typography color="textPrimary">{props.path}</Typography>
                    <Typography color="textPrimary">{props.id}</Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} sm={11} style={{minHeight:350}}>
                <Typography variant="h5" style={{textAlign:"center"}} color="textPrimary">{(data != null) ? data.title : ""}</Typography>
                {(data != null) ? <div style={{margin:10}} dangerouslySetInnerHTML={{__html: data.body}}></div> : "fetching.."}
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )
}

if (document.getElementById('blogpage_div')) {
    const el = document.getElementById('blogpage_div');
    const props = Object.assign({}, el.dataset);
    ReactDOM.render(<BlogPage {...props}/>, document.getElementById('blogpage_div'));
}
