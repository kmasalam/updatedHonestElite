import { useState, useEffect } from "react";
import Masonry from 'react-masonry-css'

//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Material Ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PerfectScrollbar from "react-perfect-scrollbar";
// Next js
import Link from "next/link";
import Image from "next/image";
// data
import { RandomGalleryData } from "../data/RandomGalleryData";
const _ = require("lodash");
//
import SearchBar from "clientComponents/SearchBar";
import GalleryHoverCard from "clientComponents/GalleryHoverCard";
import GalleryHead from "clientComponents/GalleryHead";
import { RandomGalleryCategoryData } from "data/RandomGalleryCategoryData";
import AstrologyCard from "clientComponents/AstrologyCard";
import AstrologyMiniCard from "clientComponents/AstrologyCard/AstrologyMiniCard";
import AstrologyMasonaryCard from "clientComponents/AstrologyCard/AstrologyMasonaryCard";

import { HororscopeCategory, astrologyData } from "data/HororscopeData";
//
import PoetryAuthorCard from "clientComponents/PoetryAuthorCard";
import { PoetryData } from "data/PoetryData";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import VideoCommentInput from "clientComponents/SingleTubeVideo/VideoCommentInput";
import { SingleTubeVideoData } from "data/SingleTubeVideoData";
import {astrologyComments} from 'data/HororscopeData'
//
import SingleAstrologyMetaBar from 'clientComponents/AstrologyCard/SingleAstrologyMetaBar'
import CommentCard from 'clientComponents/SingleTubeVideo/CommentCard'
import AstrologyBoxCard from 'clientComponents/AstrologyCard/AstrologyBoxCard'


function index(props) {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  const imagesLoadedOptions = { background: ".my-bg-image-el" };

  const masonryOptions = {
    transitionDuration: 5000,
  };


    console.log('astrologyComments',astrologyComments)

  return (
    <div className=" bg-cf9f9">
      <div className="bg-white pt-8">
        <Container className=" he_container pb-3">
          <Grid container spacing={3}>
            <Grid item md={3}>
              <Link href="/">
                <a>
                  <Image
                    loader={ImageLoader}
                    src="images/dark-logo.png"
                    alt={"dark logo"}
                    width={92}
                    height={57}
                  />
                </a>
              </Link>
            </Grid>
            <Grid
              item
              md={6}
              className=" flex items-center justify-center pt-3"
            >
              {/*  */}
              <Box className=" w-[46.80rem] mr-[58px] mt-[-6px]">
                <SearchBar
                  searchbarType={"gray_form_box"}
                  size={""}
                  spacing={""}
                />
              </Box>
              {/*  */}
            </Grid>
            <Grid item md={3} className=" text-right">
              <Box>
                <Button className=" py-3 rounded-none px-3 bg-primary text-white text-sm capitalize">
                  Upload all related
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className=" pt-10">
        <GalleryHead
          activeItem={""}
          hasSorting={false}
          hasCategory={true}
          pageLink="/"
          bigText="Astrology & Hororscope"
          categoryList={RandomGalleryCategoryData}
        />
      </div>
      <Container className=" he_container pt-[30px]  pb-[40px]">
          <Grid container>
              <Grid item md={8}>
                  <p className=" text-lg text-c6f6f capitalize rubik ">
                  What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, relationship forecast for couples and free romantic compatibility reading.
                  </p>
              </Grid>
          </Grid>
      </Container>
      <Container className=" he_container">
          <Grid container>
              <Grid item md={2}>
                <PerfectScrollbar className=" top-0 sticky h-screen">
                  <PoetryAuthorCard height={120} width={120} isSticky={true} />
                 </PerfectScrollbar>
              </Grid>
              <Grid item md={7}>
                  <Box className=" pl-[40px]  pr-16">
                      <Box className=" bg-white drop-shadow-md px-10 py-12 rounded-sm ">
                          <h4 className=" text-24 font-medium uppercase text-c2121 pb-5">
                            ALL ABOUT YOUR ZODIAC SIGN FOR TODAY, LET’S SEE WHAT IT SAYS
                          </h4>
                          <p className=" font-normal text-c6f6f text-lg pb-6">
                          What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, relationship forecast for couples and free romantic compatibility reading. love matches, love meter, relationship forecast for All.
                          </p>
                          <Image
                            className=" rounded-md drop-shadow-md bg-white "
                            loader={ImageLoader}
                            src={'images/single-astrology-img1.jpg'}
                            objectFit="cover"
                            alt={'astrology image'}
                            width={789}
                            height={480}
                        />
                        <p className=" rubik capitalize text-c2121 text-20 font-normal mt-6">
                        What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, relationship forecast for couples and free romantic compatibility reading.
                        </p>
                        <p className=" rubik capitalize text-c2121 text-base font-normal mt-4">
                        What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, relationship forecast for couples and free romantic compatibility reading.
                        </p>
                        <p className=" rubik capitalize text-c2121 text-base font-normal mt-4 mb-8">
                        What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, relationship forecast for couples and free romantic compatibility reading.
                        </p>
                        <Grid container>
                            <Grid item md={6}>
                                <Image
                                className=" rounded-md drop-shadow-md bg-white "
                                loader={ImageLoader}
                                src={'images/single-astrology-img2.jpg'}
                                objectFit="cover"
                                alt={'astrology image'}
                                width={380}
                                height={356}
                            />
                            </Grid>
                            <Grid item md={6}>
                            <p className=" text-24 text-c2121 capitalize font-normal pt-6 pr-8 ">
                                What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, 
                                <br />
                                <br />
                                Relationship forecast for couples and free romantic compatibility reading.
                                </p>
                            </Grid>
                        </Grid>
                        <p className=" rubik capitalize text-c2121 text-20 font-normal mt-6 ">
                        What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, relationship forecast for couples and free romantic compatibility reading.
                        </p>
                        <p className=" rubik capitalize text-c2121 text-base font-normal pt-4">
                        What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, relationship forecast for couples and free romantic compatibility reading.
                        </p>
                        <p className=" rubik capitalize text-c2121 text-base font-normal pt-4 mb-8">
                        What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, relationship forecast for couples and free romantic compatibility reading.
                        </p>
                        <Grid container>
                            
                            <Grid item md={6}>
                                <p className=" text-24 text-c2121 capitalize font-normal pt-8 pr-12 ">
                                What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, 
                                <br />
                                <br />
                                Relationship forecast for couples and free romantic compatibility reading.
                                </p>
                            </Grid>
                            <Grid item md={6}>
                                <Image
                                className=" rounded-md drop-shadow-md bg-white "
                                loader={ImageLoader}
                                src={'images/single-astrology-img3.jpg'}
                                objectFit="cover"
                                alt={'astrology image'}
                                width={380}
                                height={356}
                            />
                            </Grid>
                        </Grid>
                        <p className=" rubik capitalize text-c2121 text-base font-normal pt-8">
                        What's in the stars today? Choose your sign for a daily horoscope reading. Free daily horoscopes and astrology, love matches, love meter, relationship forecast for couples and free romantic compatibility reading.
                        </p>

                        <Box className=" border-t-8 border-[#F9F9FB] mt-[25px] pt-[35px] ">
                            <SingleAstrologyMetaBar
                            date={'09 Jan 2022 '}
                            view={'1,234,567'}
                            library={'Library'}
                            report={''}
                            share={''}
                            />
                        </Box>
                        <Box>
                            <h4 className=" text-base capitalize text-c2121 rubik  pb-0 pt-6">
                            102 Comments
                            </h4>
                            <VideoCommentInput
                            data={SingleTubeVideoData}
                            showCommentsInfo={false}
                            />
                        </Box>
                        <Box className=" bg-[#F8F8F8] pt-6 pb-0 px-6 mt-4">
                            {
                                astrologyComments && astrologyComments.map((item,i)=>{
                                    return(
                                        <Box key={i} className=" pb-[27px]">
                                            <CommentCard 
                                                item={item}
                                                commentsType={2}
                                                width={60}
                                                height={60}
                                                />
                                        </Box>
                                    )
                                })
                            }
                            <Box className=" text-center pt-0 pb-3 ">
                                <Button className="min-w-fit inline-flex bg-transparent">
                                    <AddOutlinedIcon className=" text-c6f6f text-6xl "/>
                                </Button>
                            </Box>
                            
                        </Box>

                      </Box>
                  </Box>
              </Grid>
              <Grid item md={3}>
                  <Box className=" pl-[10px]">
                      <h4 className=" text-lg font-medium capitalize text-c2121 pb-[20px]">
                      Trending Now
                      </h4>
                      {
                          astrologyData && [...astrologyData].splice(0,7).map((item,i)=>{
                              return(
                                    <AstrologyBoxCard
                                    key={i}
                                    height={260}
                                    width={457}
                                    item={item}
                                    />
                              )
                          })
                      }
                  </Box>
              </Grid>
          </Grid>
      </Container>
      
      <Container className="he_container ">
        <Box className=" bg-white pt-[100px] pb-[100px] px-[100px] mt-[60px]">
          <Grid container spacing={4}>
            {astrologyData &&
              [...astrologyData].splice(0, 3).map((item, i) => (
                <Grid item md={4} key={i}>
                  <AstrologyMiniCard item={item} width={190} height={180} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
      
      <Container className="he_container mt-[60px]">
            {
              <Masonry breakpointCols={4} className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {
                astrologyData && [...astrologyData].splice(0,8).map((item,i)=>{
                  return(
                    <AstrologyMasonaryCard
                    key={i}
                    item={item}
                    itemIndex={i}
                    />
                  )
                  
                })
              }
            </Masonry>
            }
      </Container>
      <Container className="he_container">
        <Box className=" bg-white pt-[100px] pb-[100px] px-[100px] mt-[25px]">
          <Grid container spacing={4}>
            {astrologyData &&
              [...astrologyData].splice(0, 3).map((item, i) => (
                <Grid item md={4} key={i}>
                  <AstrologyMiniCard item={item} width={190} height={180} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default index;
