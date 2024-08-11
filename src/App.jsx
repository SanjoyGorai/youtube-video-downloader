import { useContext, useState, useEffect } from 'react'
import { ThreeDot } from 'react-loading-indicators';
import { DownloadButton } from './components/DownloadButton';
import { BasicTable } from './components/Table';
import { ImArrowRight } from "react-icons/im";
import VideoContext, { SearchVideoContext } from './contexts/VideoContext';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";

import Video from './components/Video';
import { VideoNotFound } from './components/VideoNotFound';
import { SubContent } from './components/SubContent';
import { Guide } from './components/Guide';
import { AdImage } from './components/AdImage';
import { useStepperContext } from '@mui/material';
import ImageLoadContext from './contexts/ImageLoadContext';
import { SearchVideos } from './components/SearchVideos';
import ShortsCard from './components/ShortsCard';
import ShortsContext from './contexts/ShortsContext';
import InputForm from './components/InputForm';
import FormSumbitContext from './contexts/FormSubmitContext';
import LoadingContext from './contexts/LoadingContext';
import FromUrlContext from './contexts/input/VideoUrlContext';
import ShortsUrlContext from './contexts/input/ShortsUrlContext';
import ErrorContext from './contexts/ErrorContext';
import YouTube from './components/ImageLoadingSkeleton';
import InputValueContext from './contexts/input/InputValueContext';
import fetchYTSubtitle from './util/fetchYTSubtitle';


function App() {


  const { inputValue, setInputValue } = useContext(InputValueContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { isError, setIsError } = useContext(ErrorContext);
  const { videoData, setVideoData } = useContext(VideoContext);
  const { searchVideoData, setSearchVideoData } = useContext(SearchVideoContext);
  const { showElement, setShowElement } = useContext(ImageLoadContext);
  const { videoFromUrl, setVideoFromUrl } = useContext(FromUrlContext);
  const { isShortFromUrl, setIsShortFromUrl } = useContext(ShortsUrlContext);
  const { shortsData, setShortsData } = useContext(ShortsContext);
  const { isSubmitted, setIsSubmitted } = useContext(FormSumbitContext);

  if (inputValue !== '') {
    fetchYTSubtitle(inputValue)
  }

  return (
    <>
      <div className='flex flex-col m-auto max-w-[900px] text-center p-0'>
        <Navbar />
        <div className='border flex flex-col justify-center items-center border-green-500 p-4 rounded mt-2'>
          <div className='flex flex-col items-center'>

            <InputForm />

          </div>
          {console.log('isError from app', isError)
          }
          {isError ? <BeatLoader color='#00FF00' className='mt-5' /> :
            <div className='mt-3 mb-2'>

              {isSubmitted ? (isLoading ? <BeatLoader color='#00FF00' className='mt-5' /> :
                <div className='mt-2'>
                  {
                    videoFromUrl || isShortFromUrl ?
                      (
                        videoFromUrl ? (
                          <div className=''>
                            <div className='grid lg:grid-cols-2 '>
                              <Video />
                              <BasicTable />
                            </div>
                            <AdImage />
                          </div>
                        ) : <ShortsCard />
                      ) : < SearchVideos />
                  }
                </div>
              )
                : ''}

            </div>}
          <SubContent />
        </div>
        <Guide />
        {/* <Footer /> */}
      </div >

      <div className=''>
        <Footer />
      </div>
    </>

  )
}

export default App



const url1 = 'https://www.youtube.com/watch?v=YWA-xbsJrVg'
const url2 = 'https://youtu.be/YWA-xbsJrVg?si=VB8MkWhxGEg7vtEX'
const url3 = 'https://youtu.be/A4czTSJYZHo?si=FCnjwo7HtlEd_RPa' //Private Bus: উধাও হয়ে যাবে অন্তত ২ হাজার বেসরকারি বাস ! চরমে উঠতে চলেছে যাত্রীদের দুর্ভোগ ?
const url4 = 'https://youtu.be/dz458ZkBMak?si=7QL66Exc2HYCAlS5'
const url5 = 'https://youtu.be/Fcammw5Dh2Y?si=1aBh6RM4D6IDPlkk'
const url8k = 'https://youtu.be/ZgFrE4jfAPE?si=Jvylwc1nAIoX0bvh'  // WILDLIFE & ANIMAL ADVENTURES 60FPS 8K VIDEO ULTRA HD #8K
const urlOlderVideo = 'https://youtu.be/LeAltgu_pbM?si=oHdxhpV0hGkLgO9F'
// WILDLIFE & ANIMAL ADVENTURES 60FPS 8K VIDEO ULTRA HD #8K
const url12k = 'https://youtu.be/7PIji8OubXU?si=lDVqYV4VyFjbt16F'
const url12KHDR = 'https://www.youtube.com/watch?v=fCVm5U2ob8U' //12K HDR Video ULTRA HD 240 FPS Dolby Vision
