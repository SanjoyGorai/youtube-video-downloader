import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

 

  const handleButtonClick = (event) => {
    event.preventDefault()
    console.log(`Input value: ${inputValue}`);
    const videoUrl = inputValue;
    const videoId = videoUrl.split('?')[0].split('/').pop();
    console.log(videoId); // Output: YWA-xbsJrVg
    const url = `https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${videoId}`;
    // console.log("Url: ", url);
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
        'x-rapidapi-host': 'youtube-media-downloader.p.rapidapi.com'
      }
    };

    axios.get(url, options)
      .then(r => console.log(r.data))
      .catch(e => console.log(e));
  };


  return (
    <>
      <h1>Download video from Youtube 4k, 8k</h1>
      <form action="">

        <input type="text" value={inputValue} onChange={handleInputChange}
          placeholder='Paste link here...' className='p-2.5 w-[480px]' />

        <button type='submit' className='bg-pink-600'
          onClick={handleButtonClick}>Start</button>

      </form>
    </>
  )
}

export default App
