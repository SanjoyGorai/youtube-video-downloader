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

function App() {

  const info = useContext(VideoContext);
  const [data, setData] = useState(info);
  console.log("VideoContext from App", data.videoInfo);

  const [inputValue, setInputValue] = useState('');
  const [videoData, setvideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const url1 = 'https://www.youtube.com/watch?v=YWA-xbsJrVg'
  const url2 = 'https://youtu.be/YWA-xbsJrVg?si=VB8MkWhxGEg7vtEX'
  const url3 = 'https://youtu.be/A4czTSJYZHo?si=FCnjwo7HtlEd_RPa' //Private Bus: উধাও হয়ে যাবে অন্তত ২ হাজার বেসরকারি বাস ! চরমে উঠতে চলেছে যাত্রীদের দুর্ভোগ ?

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
  // size:71834870
  // lengthMs:1424056
  // expiration: 1722674012

  function msToMinutes(ms) {
    return (ms / 60000).toFixed(2);
  }
  const milliseconds = 1424056;
  const duration = msToMinutes(milliseconds);
  // console.log(duration);


  const handleButtonClick = (event) => {
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

    if (inputValue != ' ') {
      axios.get(url, options)
        .then(r => {
          console.log("Axios Data: ", r.data)
          setvideoData(r.data)
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
        console.log(inputValue);
        setIsSubmitted(true);
        setLoading(true);
        await axios.get(url)
          .then(res => {
            setTimeout(() => {
              // console.log(res.data)
              setvideoData(res.data);
              setLoading(false);
            }, 1000);
          });
      } catch (error) {
        console.log(e);
      }
    }

  };



  return (
    <>
      <Navbar />
      <div className='border border-green-500 p-4 rounded mt-2 '>
        <h2 className='mb-4 text-4xl text-cyan-300 font-roboto'>Download video Youtube 4K</h2>
        <form action="" className='mt-5 mb-4 flex justify-center'>

          <input type="text" value={inputValue} onChange={handleInputChange}
            placeholder='Paste link here...' className='p-2.5 w-[480px] 
            border-[1.9px] border-pink-600 rounded-s outline-none' />

          <button type='submit' className='bg-pink-600 hover:bg-pink-500 flex items-center rounded-none rounded-e ps-3 pe-3'
            onClick={handleButtonClickFetch}> Start <FaLongArrowAltRight /> </button>

        </form>

        {isSubmitted ? (loading ? <ThreeDot /> : <div className='main-div'>
          <div className='flex justify-center '>
            <div className='flex flex-col items-start'>
              <img src='src/assets/bus.jpg' alt="thumbnail" className='max-w-80' />
              {/* <h5 className='font-bold max-w-80'> {videoData?.title}</h5> */}
              <h5 className='font-bold max-w-80 text-start '> {"Private Bus: উধাও হয়ে যাবে অন্তত ২ হাজার বেসরকারি বাস ! চরমে উঠতে চলেছে যাত্রীদের দুর্ভোগ ?"}</h5>
              <p className='mt-2'>Duration: {duration}</p>
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
          <p className='text-[16px] mt-3 mb-2'>Tip: Insert "zz" after the word "youtube" in the link to download videos and mp3 files from YouTube as Link faster way.</p>
          <img src="src/assets/download_img.jpg" alt="" className='mt-2 mb-2' />
          <div className='flex'>
            <div className='w-44 mt-2 flex flex-col items-start'>
              <img src="src/assets/hills.jpeg" alt="jew" className='' />
              <span className='font-bold text-xl'>Find Your Path</span>
            </div>
            <div className='w-44 mt-2 flex flex-col items-start ms-2.5  '>
              <img src="src/assets/jewllery.jpeg" alt="jew" className='' />
              <span className='font-bold text-xl'>Discover Hidden Gems</span>
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

      <Footer />
    </>
  )
}

export default App
