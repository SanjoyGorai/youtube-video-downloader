import React, { useContext } from 'react'
import VideoContext from '../contexts/VideoContext'
import { BasicTable } from './Table';

const imageUrl = 'https://i.ytimg.com/vi/fCVm5U2ob8U/mqdefault.jpg'

const Video = () => {

  const { videoData, setvideoData } = useContext(VideoContext);
  const length = Object.keys(videoData).length;

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

  return (
    <div>
      <div className='mt-2'>
        <div className='flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-center lg:items-start '>
          <div className='flex-col items-start mt-3'>
            {
              length > 3 ?
                <><img src={videoData.thumbnail[1].url}
                  alt="thumbnail" className='max-w-96 object-fill' />
                  <h5 className='font-bold max-w-80 text-start '> {videoData.title}  </h5>
                  <p className='mt-2 font-roboto text-start'>{`Duration: ${msToTimeFormat(videoData.adaptiveFormats[0].approxDurationMs)} `} </p>
                </>
                : `An error occurred!`
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video