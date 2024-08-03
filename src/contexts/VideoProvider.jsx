
import React, { useState } from 'react'
import VideoContext from './VideoContext';
import { DownloadButton } from '../components/DownloadButton';

const TQuality = (props) => {

    // const first = useContext()

    return (
        <div>
            <span> 1080p (.mp4)</span>
            <span>  </span>
            <Badge bg="primary" > full-HD </Badge>
        </div>
    )
}
const randomNumber = Math.round(Math.random() * (100 - 3) + 3);
const fileSize = `${randomNumber} MB`
const data = [
    {
        resolution: <TQuality />,
        fileSize: fileSize,
        button: <DownloadButton  />
    },
    {
        resolution: <TQuality />,
        fileSize: fileSize,
        button: <DownloadButton  />
    },
    {
        resolution: <TQuality />,
        fileSize: fileSize,
        button: <DownloadButton  />
    },
    {
        resolution: <TQuality />,
        fileSize: fileSize,
        button: <DownloadButton  />
    }
];

const VideoProvider = ({ children }) => {


    const [value, setValue] = useState();
    const videoInfo = {
        title: 'Abhijit Ganguly, Lok Sabha: স্টুপিডের মতো কথা বলবেন না: অভিজিৎ',
    }

    return (
        <VideoContext.Provider value={{ value, setValue, videoInfo, data }}>
            {children}
        </VideoContext.Provider >
    );
}
export default VideoProvider;











