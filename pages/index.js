import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';

// User Defined Components
import HomeNavigation from 'clientComponents/HomeNavigation';
import InterestingGallery from 'clientComponents/InterestingGallery';
import HomeMagazineAdd from 'clientComponents/HomeMagazineAdd';
import ModellingGallery from 'clientComponents/ModellingGallery';
import Footer from 'clientComponents/Footer';
import ModellingGallerySlide from 'clientComponents/ModellingGallerySlide';
import HomeOpenRightDoors from 'clientComponents/HomeOpenRightDoors';
import HomeTrendingAdd from 'clientComponents/HomeTrendingAdd';
import ShortRealityVideo from 'clientComponents/ShortRealityVideo';
import RelationLounges from 'clientComponents/RelationLounges';
import PersonalLinks from 'clientComponents/PersonalLinks';
import HomeBanner from 'clientComponents/HomeBanner';
import {VideoListData} from 'data/VideoListData'
// new sdf



export default function Home() {
  return (
    <div >
      <Head>
        <title>THE HONEST ELITE REALTIONSHIP SYLLABUS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <main>
          <HomeNavigation navigationType={1}/>
          <HomeBanner bannerType={1} VideoListData={VideoListData} />
          <InterestingGallery/>
          <HomeMagazineAdd/>
          <ModellingGallery/>
          <ModellingGallerySlide/>
          <HomeOpenRightDoors/>
          <HomeTrendingAdd/>
          <ShortRealityVideo/>
          <RelationLounges/>
          <PersonalLinks/>
          <Footer/>
      </main>

      
    </div>
  )
}
