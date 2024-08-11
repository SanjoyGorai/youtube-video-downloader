import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SearchVideoContext } from '../contexts/VideoContext';
import LoadingContext from '../contexts/LoadingContext';
import YouTube from './ImageLoadingSkeleton';

export const VideoCard = () => {

    const { searchVideoData, setSearchVideoData } = useContext(SearchVideoContext);
    console.log('searchVideoData ', searchVideoData);
    const { isLoading, setIsLoading } = useContext(LoadingContext);

    return (
        <>
            {
                searchVideoData?.filter(item => item.type === 'video')
                    ?.map((item, index) => (
                        <div key={index} className=" max-w-sm  ">
                            <div className="relative">
                                <div className="items-center max-w-sm bg-gray-800 ">
                                    <Link to={''}>
                                        <div className="relative">
                                            <img
                                                className="w-full object-cover"
                                                src={item.thumbnail != undefined ? item?.thumbnail[0]?.url : imagePlaceholder}
                                                alt="Video Thumbnail"
                                            />
                                            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                                {item.lengthText}
                                            </span>
                                        </div>
                                        <div className="p-1">
                                            <h3 className="text-start font-normal text-sm text-slate-100 hover:text-pink-600 ">{item.title.substring(0, 48)}</h3>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))
            }
        </>
    )
}


{/* <div key={index}>
    < img
        src={item?.thumbnail != undefined ? item.thumbnail[0].url : imagePlaceholder}
        alt=""
    />
    <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
        3:22
    </span>
    <div className="p-1">
        <h3 className="text-white font-normal text-start">Video Title</h3>
        {/* <p className="text-gray-400 text-sm mt-2 text-start">REACT</p> */}
//     </div>
// </div> */}