import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { ThreeDot } from 'react-loading-indicators';
import { Button } from './components/Button';
import { Table } from './components/Table';
import { FaLongArrowAltRight } from "react-icons/fa";

function App() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const url1 = 'https://www.youtube.com/watch?v=YWA-xbsJrVg'
  const url2 = 'https://youtu.be/YWA-xbsJrVg?si=VB8MkWhxGEg7vtEX'

  function extractVideoId(url) {
    if (url.includes('youtu.be')) {
      return url.split('/').pop().split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
      return url.split('?v=')[1].split('&')[0];
    }
  }

  const handleButtonClick = (event) => {
    event.preventDefault()
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

    // axios.get(url, options)
    //   .then(r => console.log(r.data))
    //   .catch(e => console.log(e));

    const indi = document.getElementById('indi')
    if (indi.id != null) {
      console.log(indi.id);
      indi.style.visibility = 'visible'
    }

  };


  return (
    <>
      <div className='border border-green-500 p-14 rounded'>
        <h1 className='mb-4'>Download video from Youtube 4k, 8k</h1>
        <form action="" className='mt-5 mb-4 flex justify-center'>

          <input type="text" value={inputValue} onChange={handleInputChange}
            placeholder='Paste link here...' className='p-2.5 w-[480px] border
           border-red-700 rounded-sm' />

          <button type='submit' className='bg-pink-600 flex items-center'
            onClick={handleButtonClick}>Start   <FaLongArrowAltRight /> </button>

        </form>
        <div className='flex justify-center'>
          <div className='flex flex-col items-start'>
            <img src="/thumbnail.jpg" alt="thumb" />
            <h5 className='font-bold max-w-80'> How to Make a Website in 10 mins - Simple & Easy</h5>
            <p>Duration: 00:11:22</p>
          </div>
          <div className='ms-4'>
            <Table />
          </div>
        </div>

        <div className='mt-5 invisible' id='indi'>
          <ThreeDot color="#32cd32" size="medium" text="" textColor="" />
        </div>

      </div>
    </>
  )
}

export default App
