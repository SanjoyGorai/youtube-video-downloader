import React, { useContext } from 'react'
import { SearchVideoContext } from '../contexts/VideoContext';

export const SearchVideos = () => {

    const { searchVideoData, setSearchVideoData } = useContext(SearchVideoContext);
    console.log("Search Videos :", searchVideoData);
    const thumbnail = searchVideoData[0].thumbnail[1].url
    const title = searchVideoData[0].title[0]

    return (
        <div>
            <div className='grid grid-cols-4 space-x-5'>
                {
                    searchVideoData.map((item) => (
                        <div>
                            <img src={searchVideoData[6].thumbnail[1].url} alt="" />
                            <h5 className='text-start mt-1' >{item.title} (4K Video)</h5>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
