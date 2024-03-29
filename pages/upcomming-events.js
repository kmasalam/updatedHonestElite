import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import Link from 'next/link';
import Router from 'next/router'
//

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
//

// User Defined Components
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HomeNavigation from "clientComponents/HomeNavigation";
import InterestingGallery from "clientComponents/InterestingGallery";
import HomeMagazineAdd from "clientComponents/HomeMagazineAdd";
import ModellingGallery from "clientComponents/ModellingGallery";
import Footer from "clientComponents/Footer";
import ModellingGallerySlide from "clientComponents/ModellingGallerySlide";
import HomeOpenRightDoors from "clientComponents/HomeOpenRightDoors";
import HomeTrendingAdd from "clientComponents/HomeTrendingAdd";
import ShortRealityVideo from "clientComponents/ShortRealityVideo";
import RelationLounges from "clientComponents/RelationLounges";
import PersonalLinks from "clientComponents/PersonalLinks";
import HomeBanner from "clientComponents/HomeBanner";
import KnowledgeBaseComponent from "clientComponents/KnowledgeBaseComponent";
import SectionTitle from "clientComponents/SectionTitle";
import EventsCard from "clientComponents/EventsCard";
import { KnowledgeBaseData } from "data/KnowledgeBaseData";
import { eventsCategoriesData, eventsListData } from "data/EventData";
import {upcommingEventsData} from 'data/VideoListData'
import { useEffect, useState } from "react";
const _ = require("lodash");

// new sdf

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ED028C",
    fontFamily: "Rubik",
  },
  "& .MuiInput-underline:after": {
    border: "none",
    fontFamily: "Rubik",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
    "&:hover fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
    "&.Mui-focused fieldset": {
      border: "none",
      fontFamily: "Rubik",
    },
  },
});

export default function index() {
  const [sportsItem, setSportsItem] = useState(8);
  const [sportsEventList, setSportsEventList] = useState(null);
  const [musicEventList, setMusicEventList] = useState(null);
  const [lodableSportsItem,setLodableSportsItem] = useState(8)
  const [lodableMusicItem,setLodableMusicItem] = useState(8)

  useEffect(() => {
    getSportsData();
    getMusicData();
  }, []);

  const getSportsData = () => {
    let bulkItem = [];
    eventsListData &&
      eventsListData.map((item) => {
        if (_.includes(item.category, "sports")) {
          bulkItem.push(item);
          setSportsEventList(bulkItem);
        }
      });
  };
  const getMusicData = () => {
    let bulkItem = [];
    eventsListData &&
      eventsListData.map((item) => {
        if (_.includes(item.category, "music")) {
          bulkItem.push(item);
          setMusicEventList(bulkItem);
        }
      });
  };

  const handleFindEvents = (e) =>{
      return Router.push('/upcomming-events-search-result')
  }


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeNavigation navigationType={1} />
        <HomeBanner 
        VideoListData={upcommingEventsData}
        bannerType={3} 
        hideDescription={true} 
        hideLeftMenu={true}
        />
        <Container className=" he_container -mt-8">
              <Grid 
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              >
                <Grid item md={5}>
                    <Box 
                    className=" flex items-start justify-between flex-wrap w-full drop-shadow-[1px_2px_5px_rgba(0,0,0,0.15)] bg-white py-2 pl-8 pr-2 rounded-md ">
                        <Box className=" flex items-center " style={{
                            maxWidth: `40%`,
                            flex: `0 0 40%`
                        }}>
                              <span className=" text-base text-c2121 font-medium capitalize inline-flex">
                                Discover
                              </span>
                              <CssTextField 
                              className=" text-sm rubik w-full"
                              size="small"
                              id="input-with-sx" 
                              label="Theater, Concerts, Dance, Sports" />
                        </Box>
                        <Box className=" flex items-center " style={{
                            maxWidth: `35%`,
                            flex: `0 0 35%`
                        }}>
                              <span className=" text-base text-c2121 font-medium capitalize inline-flex">
                                In
                              </span>
                              <CssTextField 
                              className=" text-sm rubik w-full"
                              size="small"
                              id="input-with-sx" 
                              label="TMy Current Location" />
                        </Box>
                        <Box className="  inline-flex" style={{
                            maxWidth: `25%`,
                            flex: `0 0 25%`,
                            height: `44px`
                        }}>
                            <Button 
                            onClick={handleFindEvents}
                            variant="contained" 
                            className=" rounded-md min-w-full h-full w-full text-center  bg-primary text-white font-medium rubik text-base capitalize  ">
                                Find Events
                            </Button>
                        </Box>
                    </Box>
                </Grid>
              </Grid>
        </Container>
        <Container className=" he_container pt-12 pb-4">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={10}>
              <Box>
                <SectionTitle
                  title="Our Top Event Categories"
                  fullWidth={false}
                />
              </Box>
              <Box>
                <KnowledgeBaseComponent
                  height={168}
                  width={160}
                  type={2}
                  sliderData={eventsCategoriesData}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        {/*  */}
        <Container className="he_container">
          <Box>
            <SectionTitle title="Recomended For You" fullWidth={false} />
          </Box>
          <Grid container spacing={1}>
            {eventsListData &&
              [...eventsListData].splice(0, 8).map((item, i) => (
                <Grid item md={3} key={i}>
                  <EventsCard
                    roundedSize={false}
                    type={1}
                    avatarWidth={""}
                    avatarHeight={""}
                    item={item}
                    height={210}
                    width={354}
                    number={i}
                    size={"md"}
                  />
                </Grid>
              ))}
          </Grid>
          <Box className=" text-center pt-8 pb-2">
            <Button>
              <AddIcon className=" text-c6f6f text-5xl" />
            </Button>
          </Box>
        </Container>
        {/*  */}
        {/*  */}
        <Container className="he_container">
          <Box>
            <SectionTitle title="Sports" fullWidth={false} />
          </Box>
          <Grid container spacing={1}>
            {sportsEventList &&
              [...sportsEventList].splice(0,lodableSportsItem).map((item, i) => (
                <Grid item md={3} key={i}>
                  <EventsCard
                    roundedSize={false}
                    type={1}
                    avatarWidth={""}
                    avatarHeight={""}
                    item={item}
                    height={210}
                    width={354}
                    number={i}
                    size={"md"}
                  />
                </Grid>
              ))}
          </Grid>
          <Box className=" text-center pt-8 pb-4">
            {
                sportsEventList && sportsEventList.length <= lodableSportsItem ? <>
                <h4>No More Items To Load</h4>
                </> : <Button onClick={(e)=>setLodableSportsItem(lodableSportsItem+4)}>
                <AddIcon className=" text-c6f6f text-5xl" />
              </Button>
            }
            
          </Box>
        </Container>
        {/*  */}
        {/*  */}
        <Container className="he_container">
          <Box>
            <SectionTitle title="Music" fullWidth={false} />
          </Box>
          <Grid container spacing={1}>
            {musicEventList &&
              [...musicEventList].splice(0,lodableMusicItem).map((item, i) => (
                    <Grid item md={3} key={i}>
                      <EventsCard
                        roundedSize={false}
                        type={1}
                        avatarWidth={""}
                        avatarHeight={""}
                        item={item}
                        height={210}
                        width={354}
                        number={i}
                        size={"md"}
                      />
                    </Grid>
                  ))}
          </Grid>
          <Box className=" text-center pt-8 pb-4">
            {
                musicEventList && musicEventList.length <= lodableMusicItem ? <>
                <h4>No More Items To Load</h4>
                </> : <Button onClick={(e)=>setLodableMusicItem(lodableMusicItem+4)}>
                <AddIcon className=" text-c6f6f text-5xl" />
              </Button>
            }
            
          </Box>
        </Container>
        {/*  */}
        <PersonalLinks />
        <Footer />
      </main>
    </div>
  );
}
