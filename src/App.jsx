import { useContext, useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { ThreeDot } from 'react-loading-indicators';
import { DownloadButton } from './components/DownloadButton';
import { BasicTable } from './components/Table';
import { FaLongArrowAltRight } from "react-icons/fa";
import VideoContext from './contexts/VideoContext';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import { BsGiftFill } from "react-icons/bs";
import { FaAudioDescription } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";

function App() {


  const [inputValue, setInputValue] = useState('');
  // const [videoData, setvideoData] = useState(null);
  // console.log(videoData);

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { videoData, setvideoData } = useContext(VideoContext);
  console.log(videoData);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const url1 = 'https://www.youtube.com/watch?v=YWA-xbsJrVg'
  const url2 = 'https://youtu.be/YWA-xbsJrVg?si=VB8MkWhxGEg7vtEX'
  const url3 = 'https://youtu.be/A4czTSJYZHo?si=FCnjwo7HtlEd_RPa' //Private Bus: উধাও হয়ে যাবে অন্তত ২ হাজার বেসরকারি বাস ! চরমে উঠতে চলেছে যাত্রীদের দুর্ভোগ ?
  const url4 = 'https://youtu.be/dz458ZkBMak?si=7QL66Exc2HYCAlS5' //Private Bus: উধাও হয়ে যাবে অন্তত ২ হাজার বেসরকারি বাস ! চরমে উঠতে চলেছে যাত্রীদের দুর্ভোগ ?

  function extractVideoId(url) {
    if (url.includes('youtu.be')) {
      return url.split('/').pop().split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
      return url.split('?v=')[1].split('&')[0];
    }
  }
  function handleDownload(event) {
    console.log(event.target.id);
  }

  function msToTimeFormat(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  const handleStartButtonClick = (event) => {
    event.preventDefault();
    console.log(`Input value: ${inputValue}`);
    const videoUrl = inputValue;
    const videoId = extractVideoId(videoUrl)
    console.log(videoId);
    const url = `https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${videoId}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
        'x-rapidapi-host': 'youtube-media-downloader.p.rapidapi.com'
      }
    };

    if (inputValue == '') {
      console.log("Null value");
    } else {
      setIsSubmitted(true);
      setLoading(true);
      axios.get(url, options)
        .then(res => {
          setvideoData(res.data);
          console.log("Axios Data: ", res.data)
          setLoading(false);
        })
        .catch(e => console.log(e));
    }

    const indi = document.getElementById('indi')
    if (indi.id != null) {
      console.log(indi.id);
      indi.style.visibility = 'visible'
    }

  };

  const handleButtonClickFetch = async (event) => {
    event.preventDefault();
    if (inputValue == '') {
      console.log("Null value");
    } else {
      const url = inputValue;
      try {
        setIsSubmitted(true);
        setLoading(true);
        await axios.get(url)
          .then(res => {
            setTimeout(() => {
              console.log("Response: ", res.data)
              setvideoData(res.data);
              // setData(res.data)
              setLoading(false);
            }, 1000);
          });
      } catch (e) {
        console.log(e);
      }
    }

  };



  return (
    <>
      <Navbar />
      <div className='border border-green-500 p-4 rounded-s mt-2'>
        <h2 className='mb-8 text-3xl text-cyan-300 font-roboto lg:text-4xl'>Download video Youtube 4K</h2>
        <form action="" className='flex justify-center m-auto '>

          <input type="text" value={inputValue} onChange={handleInputChange}
            placeholder='Paste link here...' className='p-2.5 min-w-96   
            border-2 border-pink-600 rounded-s outline-none lg:w-[500px]'  />

          <button type='submit' className='bg-pink-600 hover:bg-pink-500 flex items-center rounded-none rounded-e ps-3 pe-3'
            onClick={handleStartButtonClick}> Start <FaLongArrowAltRight /> </button>

        </form>

        {isSubmitted ? (loading ? <BeatLoader color='#00FF00' /> : <div className='mt-2 '>
          <div className='lg:flex justify-center flex flex-row'>
            <div className=' lg:flex flex-col items-start'>
              <img src={videoData.thumbnails[3].url} alt="thumbnail" className='max-w-80' />
              <h5 className='font-bold max-w-80 text-start '> {videoData.title}</h5>
              <p className='mt-2 font-roboto'>Duration: {msToTimeFormat(videoData.videos.items[0].lengthMs)}</p>
            </div>

            <div className='ms-4 '>
              <BasicTable />
              {/* <DownloadButton click={handleDownload} /> */}
            </div>
          </div>
        </div>) : ''}

        <div className='mt-5 invisible' id='indi'>
          <ThreeDot color="#32cd32" size="medium" text="" textColor="" />
        </div>

        <hr className='mb-4 mt-03' />
        <div className='flex flex-col items-start'>
          <p className='mt-3 mb-2 text-start '>Tip: Insert "zz" after the word "youtube" in the link to download videos and mp3 files from YouTube as Link faster way.</p>
          <img src="src/assets/download_img.jpg" alt="" className='mt-2 mb-2' />

          <div className='flex flex-col lg:flex-row '>
            <div>
              <div className='flex justify-center text-start '>
                <div className='w-36 mt-2 flex flex-col items-start  '>
                  <img src="src/assets/hills.jpeg" alt="jew" className='' />
                  <span className='font-semibold text-xl'>Find Your Path</span>
                </div>
                <div className='w-36 mt-2 flex flex-col items-start ms-2.5  '>
                  <img src="src/assets/jewllery.jpeg" alt="jew" className='' />
                  <span className='font-semibold text-xl'>Discover Hidden Gems</span>
                </div>
              </div>
              <div className='flex justify-center text-start '>
                <div className='w-36 mt-2 flex flex-col items-start  '>
                  <img src="src/assets/hills.jpeg" alt="jew" className='' />
                  <span className='font-semibold text-xl'>Find Your Path</span>
                </div>
                <div className='w-36 mt-2 flex flex-col items-start ms-2.5  '>
                  <img src="src/assets/jewllery.jpeg" alt="jew" className='' />
                  <span className='font-semibold text-xl'>Discover Hidden Gems</span>
                </div>
              </div>
            </div>

            <div className='flex flex-col ms-4 items-start text-start'>
              <p className='mt-2 text-[16px] font-roboto'>If you can’t directly download video to your PC, please follow the <br />
                guidelines below: </p>
              <p className='mt-2 text-[16px] font-roboto'> Step1: Select the format you want and click "Download" button.</p>
              <p className='mt-2 text-[16px] font-roboto'>  Step2: In new window, press "CTRL + S" to save video OR right click to <br />
                video, then select "Save as Video".</p>
            </div>

          </div>
        </div>

      </div>
      <div className='lg:flex'>
        <div className='mt-3 w-96 flex flex-col items-center'>
          <BsGiftFill style={{ fontSize: '2rem', marginBottom: '1rem' }} />
          <h5 className='font-bold text-xl text-pink-600'> Free Download</h5>
          <span className='text-xl mt-2 font-roboto semo'>Unlimitedly free conversions and <br /> downloads.</span>
        </div>
        <div className='mt-3 w-96  flex flex-col items-center'>
          <FaAudioDescription style={{ fontSize: '2rem', marginBottom: '1rem' }} />
          <h5 className='font-bold text-xl text-pink-600'>  Video & Audio</h5>
          <span className='text-xl mt-2 font-roboto semo'> Directly Download Video & <br /> Music.</span>
        </div>
        <div className='mt-3 w-96  flex flex-col items-center'>
          <MdOutlineDownloadDone style={{ fontSize: '2rem', marginBottom: '1rem' }} />
          <h5 className='font-bold text-xl text-pink-600'> Easy Download</h5>
          <span className='text-xl mt-2 font-roboto semo'>Fully compatible with all <br />  browsers.</span>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
