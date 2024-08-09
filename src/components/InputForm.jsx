import { useContext, useState } from "react";
import { ImArrowRight } from "react-icons/im";
import VideoContext, { SearchVideoContext } from "../contexts/VideoContext";
import ImageLoadContext from "../contexts/ImageLoadContext";
import ShortsContext from "../contexts/ShortsContext";
import axios from "axios";
import FormSumbitContext from "../contexts/FormSubmitContext";

const InputForm = () => {

    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    // const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(null)
    const { videoData, setVideoData } = useContext(VideoContext);
    const { searchVideoData, setSearchVideoData } = useContext(SearchVideoContext);
    const { showElement, setShowElement } = useContext(ImageLoadContext);
    const [videoFromUrl, setVideoFromUrl] = useState(false);
    const [isShortFromUrl, setIsShortFromUrl] = useState(false);
    const { shortsData, setShortsData } = useContext(ShortsContext);
    const { isSubmitted, setIsSubmitted } = useContext(FormSumbitContext);


    const url = 'https://youtube.com/shorts/ZrUPwrZBYHo?si=R16gagF4j5C8WIFE';
    // console.log(`${url} is ${isYouTubeVideo(url) ? '' : 'not '}a valid YouTube video URL`);

    async function getShorts(inputValue) {
        const shortId = extractYouTubeShortsID(inputValue);
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/shorts/info',
            params: { id: shortId },
            headers: {
                'x-rapidapi-key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            // console.log("Axios Shorts Data: ", response)
            console.log('Shorts data getShorts: ', response.data);
            setShortsData(response.data)
            setLoading(false);
            setIsShortFromUrl(true)
            setTimeout(() => {
                setShowElement(true);
            }, 2000);
        } catch (error) {
            console.log("Fetch Error: ", error);
            setIsError(true);
            setLoading(false);
        }
    }

    async function getSearchedVideos() {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/search',
            params: { query: inputValue },
            headers: {
                'x-rapidapi-key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log("Axios Searched Data: ", response.data.data)
            const responseData = response.data;
            setSearchVideoData(responseData.data);
            setLoading(false);
            setTimeout(() => {
                setShowElement(true);
            }, 2000);
        } catch (error) {
            console.log("Fetch Error: ", error);
            setIsError(true);
            setLoading(false);
        }
    }
    async function getVideo(inputValue) {
        const videoId = extractVideoId(inputValue);
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/dl',
            params: { id: videoId },
            headers: {
                'x-rapidapi-key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setVideoData(response.data);
            console.log("Axios Data from getVideo: ", response.data);
            setVideoFromUrl(true);
            setLoading(false);
            setTimeout(() => {
                setShowElement(true);
            }, 2000);
        } catch (error) {
            console.log("Fetch Error getVidoe!: ", error);
            setIsError(true);
            setLoading(false);
        }
    }

    const handleStartButtonClick = (event) => {
        event.preventDefault();
        const videoUrl = inputValue;
        const videoId = extractVideoId(videoUrl)
        const url = `https://yt-api.p.rapidapi.com/dl`; // YT-API
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/dl',
            params: { id: videoId },
            headers: {
                'x-rapidapi-key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
                // 'x-rapidapi-host': 'youtube-media-downloader.p.rapidapi.com'
            }
        };

        if (inputValue == '') {
            console.log("Null value");
        }
        else {
            setIsError(false);
            setVideoFromUrl(false);
            setIsShortFromUrl(false);
            setIsSubmitted(true);
            setLoading(true);
            if (isValidURL(inputValue)) {
                if (isYouTubeShorts(inputValue)) {
                    console.log('from isYouTubeShorts blog');
                    getShorts(inputValue)
                } else {
                    console.log('from getVideo blog');
                    getVideo(inputValue)
                }
            }
            else {
                getSearchedVideos()
                console.log('from getSearchedVideos blog');
            }
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);

    };

    function extractVideoId(url) {
        if (url.includes('youtu.be')) {
            return url.split('/').pop().split('?')[0];
        } else if (url.includes('youtube.com/watch')) {
            return url.split('?v=')[1].split('&')[0];
        }
    }

    function isValidURL(url) {
        try {
            const parsedURL = new URL(url);
            return ['http:', 'https:'].includes(parsedURL.protocol);
        } catch (error) {
            return false;
        }
    }

    const ur = 'https://youtube.com/shorts/-VOUImxh8ew?si=_k6AIzPXMZxVuXIa'
    const urv = 'https://youtu.be/7m-FTPAedEg?si=nMkRaQ6cpSiYouPS'
    function isYouTubeShorts(url) {
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/shorts\/[a-zA-Z0-9_-]+(\?.*)?$/;
        return regex.test(url);
    }
    // console.log(isYouTubeShorts(urv));

    function extractYouTubeShortsID(url) {
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/shorts\/([a-zA-Z0-9_-]+)/;
        const match = url.match(regex);
        if (match && match[4]) {
            return match[4];
        } else {
            return null;
        }
    }
    function isYouTubeVideo(url) {
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]+/;
        return regex.test(url);
    }

    return (
        <div>
            <div className='flex flex-col items-center'>
                {/* <h2 className='mb-8 font-normal text-2xl font-roboto lg:text-3xl'>Download Video and Audio from Youtube </h2> */}
                <div className=''>
                    <form action="" className='flex flex-row'>
                        <input type="text" value={inputValue} onChange={handleInputChange}
                            placeholder='Search or Paste link here...' className='p-2.5 lg:min-w-96   
            border-2 border-pink-600 rounded-l outline-none lg:w-[500px]'  />

                        <button type='submit' className='text-white font-semibold bg-pink-600 w-20 hover:bg-pink-500 flex items-center rounded-none rounded-e ps-3 pe-3'
                            onClick={handleStartButtonClick}> Start <ImArrowRight style={{ marginLeft: '2px' }} />
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default InputForm