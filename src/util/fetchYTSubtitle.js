import axios from 'axios';

function extractVideoId(url) {
    if (url.includes('youtu.be')) {
        return url.split('/').pop().split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
        return url.split('?v=')[1].split('&')[0];
    }
}

async function fetchYTSubtitle(url) {
    const videoId = extractVideoId(url)
    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/subtitles',
        params: { id: videoId },
        headers: {
            'x-rapidapi-key': '6e4f3542d1msh4d2f7d5fc314f58p1e1532jsn38558c63b3d7',
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log('Subtitle: ', response.data);
        if (response?.data?.subtitles[6]?.url != undefined) {
            const englishSubtitle = response.data.subtitles[6].url;
            console.log('English Subtitle: ', englishSubtitle);
        }

    } catch (error) {
        console.error(error);
    }
}
export default fetchYTSubtitle;