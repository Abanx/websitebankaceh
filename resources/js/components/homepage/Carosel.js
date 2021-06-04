import React from 'react';
import {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid} from '@material-ui/core';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import './custom_carosel_css.css';

function Carosel() {
    const [data, setData] = useState([]);

    // format data to ImageGallery
  /*  const images = [
      {
        original: 'https://www.bankaceh.co.id/wp-content/uploads/2018/10/1-BALIHO-Copy.jpg',
        thumbnail: 'https://www.bankaceh.co.id/wp-content/uploads/2017/03/wa1-edit.jpg',
      },
      {
        original: 'https://www.bankaceh.co.id/wp-content/uploads/2021/05/IMG-20210507-WA0006.jpg',
        thumbnail: 'https://www.bankaceh.co.id/wp-content/uploads/2017/03/wa1-edit.jpg',
      },
      {
        original: 'https://www.bankaceh.co.id/wp-content/uploads/2021/04/5-X-10-HOR.png',
        thumbnail: 'https://www.bankaceh.co.id/wp-content/uploads/2017/03/wa1-edit.jpg',
      },
    ]; */

    useEffect(() => {
      axios.get(`http://dev.semangatngedrakor.my.id/api/carousell`).then(res=>{
          console.log(res.data.carousel);
          const resp = res.data.carousel;
          const caroselData = [];
          resp.map((item, index)=>(
            caroselData[index] = {original: item.image, thumbnail:""}
          ));
          setData(caroselData);
      });
    }, []);

    
    return (
        <Grid container justify="center">
          <ImageGallery items={data} showThumbnails={false} showIndex={true} autoPlay={true} showPlayButton={false} showBullets={true} showFullscreenButton={false}/>  
        </Grid>
    );
}

export default Carosel;
