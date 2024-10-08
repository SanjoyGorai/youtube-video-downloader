import React, { useContext } from 'react'
import { SearchVideoContext } from '../contexts/VideoContext';
import { Link } from 'react-router-dom';
import { VideoCard } from './VideoCard';

export const SearchVideos = () => {

    const { searchVideoData, setSearchVideoData } = useContext(SearchVideoContext);
    console.log("Search Videos from SearchVideos componant :", searchVideoData);
    if (searchVideoData.thumbnail != undefined) {
        const thumbnail = searchVideoData[0]?.thumbnail[1]?.url
    }
    const title = searchVideoData[0]?.title[0]
    const imagePlaceholder = `https://react.semantic-ui.com/images/image-16by9.png`

    return (
        <div>

            <div className='items-center grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 
            space-x-5 space-y-3'>
                <VideoCard />
            </div>

        </div >
    )
}
