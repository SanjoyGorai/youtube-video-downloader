
import React, { useState } from 'react'
import VideoContext from './VideoContext';
import { DownloadButton } from '../components/DownloadButton';

const videoInfo = {
    audios: {
        errorId: "Success",
        expiration: 1722706684,
        items: [
            {
                extension: "m4a",
                lastModified: 1720748673349083,
                lengthMs: 182253,
                mimeType: "audio/mp4; codecs=\"mp4a.40.2\"",
                size: 2950441,
                sizeText: "2.8MB",
                url: "https://redirector.googlevideo.com/videoplayback?expire=1722706684&ei=nBauZsHmJtr_ir4PrKXl4AY&ip=198.98.59.215&id=o-AF6xo-45FGoFZLv5HFtWNSAsjhD1JHUVZIof2S9jwKrS&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Ax&mm=31%2C26&mn=sn-ab5sznzl%2Csn-p5qlsn6l&ms=au%2Conr&mv=m&mvi=2&pl=23&initcwndbps=655000&siu=1&bui=AXc671KC3E3b9pK5PdVZIDLsDYmJxYgtkWfFLZyJidqLVgw7r26DdtB-3LS-AV2gCzyurx3q7A&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=DMKLe0emd3eDvKjaBRhSHXsQ&rqh=1&gir=yes&clen=2950441&dur=182.253&lmt=1720748673349083&mt=1722684557&fvip=5&keepalive=yes&c=WEB&sefc=1&txp=5532434&n=Hs-MyCctdx279A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAN0Fd_VnRXu3pUOKSIyww8gTUHLs3pN4KYwEp4crjBXdAiARCxdMs_997B_OZ6uJ1BtGmQEqaFDmjSLcBNs9q3tzVw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAPYov09X3e8DUCJwGUDucb_Nhx_GSt5IhvArZ_n562e7AiEAiqSyGdTQnpBHPbKP9JcwafOtg8vBQbcJIAGIrc5DVEM%3D&range=0-"
            },
            {
                extension: "m4a",
                lastModified: 1720748743262029,
                lengthMs: 182253,
                mimeType: "audio/mp4; codecs=\"mp4a.40.2\"",
                size: 2950455,
                sizeText: "2.8MB",
                url: "https://redirector.googlevideo.com/videoplayback?expire=1722706684&ei=nBauZsHmJtr_ir4PrKXl4AY&ip=198.98.59.215&id=o-AF6xo-45FGoFZLv5HFtWNSAsjhD1JHUVZIof2S9jwKrS&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Ax&mm=31%2C26&mn=sn-ab5sznzl%2Csn-p5qlsn6l&ms=au%2Conr&mv=m&mvi=2&pl=23&initcwndbps=655000&siu=1&bui=AXc671KC3E3b9pK5PdVZIDLsDYmJxYgtkWfFLZyJidqLVgw7r26DdtB-3LS-AV2gCzyurx3q7A&vprv=1&svpuc=1&xtags=drc%3D1&mime=audio%2Fmp4&ns=DMKLe0emd3eDvKjaBRhSHXsQ&rqh=1&gir=yes&clen=2950455&dur=182.253&lmt=1720748743262029&mt=1722684557&fvip=5&keepalive=yes&c=WEB&sefc=1&txp=5532434&n=Hs-MyCctdx279A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgQjpMOIIZhzbCW_19iN8Zwxq6xARyu-PEGncKN13xmdcCIQCI_tY_XU66SoPcxZAnPS22bAf4IrO6VQJr4U-wNsVPYQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAPYov09X3e8DUCJwGUDucb_Nhx_GSt5IhvArZ_n562e7AiEAiqSyGdTQnpBHPbKP9JcwafOtg8vBQbcJIAGIrc5DVEM%3D&range=0-"
            },
            {
                extension: "weba",
                lastModified: 1720748682787938,
                lengthMs: 182221,
                mimeType: "audio/webm; codecs=\"opus\"",
                size: 1111066,
                sizeText: "1.1MB",
                url: "https://redirector.googlevideo.com/videoplayback?expire=1722706684&ei=nBauZsHmJtr_ir4PrKXl4AY&ip=198.98.59.215&id=o-AF6xo-45FGoFZLv5HFtWNSAsjhD1JHUVZIof2S9jwKrS&itag=249&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Ax&mm=31%2C26&mn=sn-ab5sznzl%2Csn-p5qlsn6l&ms=au%2Conr&mv=m&mvi=2&pl=23&initcwndbps=655000&siu=1&bui=AXc671KC3E3b9pK5PdVZIDLsDYmJxYgtkWfFLZyJidqLVgw7r26DdtB-3LS-AV2gCzyurx3q7A&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=DMKLe0emd3eDvKjaBRhSHXsQ&rqh=1&gir=yes&clen=1111066&dur=182.221&lmt=1720748682787938&mt=1722684557&fvip=5&keepalive=yes&c=WEB&sefc=1&txp=5532434&n=Hs-MyCctdx279A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgQBYWC8UPy8TIXrB_DnKq54QEHV37L4J69R7_bPBiu-kCIQC1AOso0xsB0xpLbUxUnUbraZDZDBWSGLm-Z3V8ZeLvFQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAPYov09X3e8DUCJwGUDucb_Nhx_GSt5IhvArZ_n562e7AiEAiqSyGdTQnpBHPbKP9JcwafOtg8vBQbcJIAGIrc5DVEM%3D&range=0-"

            }
        ]
    },
    title: "Private Bus: উধাও হয়ে যাবে অন্তত ২ হাজার বেসরকারি বাস ! চরমে উঠতে চলেছে যাত্রীদের দুর্ভোগ ?",
    type: "video",
    commentCountText: "570",
    description: "ABP Ananda LIVE: আগামী ২-৩ মাসের মধ্যে শহরের রাস্তা থেকে উধাও হয়ে যাবে অন্তত ২ হাজার বেসরকারি বাস। কারণ, আদালতের নির্দেশ, ১৫ বছরের পুরনো বাস বাতিল করতে হবে। ফলে চরমে উঠতে চলেছে যাত্রীদের দুর্ভোগ। পরিবহণ দফতরের আশঙ্কা, পুরনো বাস বসে গেলে শুধু যে পরিষেবায় প্রভাব পড়বে তাই নয়, কোনও কোনও রুট বাস শূন্য হয়ে যাবে।\r\n\r\n#PrivateBus #WestBengal #KolkataNews #ABPAnanda #BanglaNews #banglanewslive #ABPAnanda #Bengalinews #ABPAnandaDigital #ABPAnandaLIVE #BengaliNews #এবিপিআনন্দ #এবিপিআনন্দলাইভ #এবিপিআনন্দ #এবিপিআনন্দলাইভ\r\n\r\n___________\r\nSubscribe to our YouTube channel here: https://www.youtube.com/user/abpanandatv\r\n\r\nআপনার পছন্দের খবর আর আপডেট পাবেন আপনার পছন্দের চ্যাটিং প্ল্যাটফর্ম হোয়াটস অ্যাপেও। \r\nযুক্ত হোন ABP Ananda হোয়াটস অ্যাপ চ্যানেলে। \r\n\r\nএবিপি আনন্দ সম্পর্কে :\r\nABP আনন্দ বাংলা ও বাঙালির  সবথেকে নির্ভরযোগ্য সংবাদমাধ্যম। জেলা থেকে জেলা, রাজ্য থেকে দেশ, আবার সীমানা পেরিয়ে আন্তর্জাতিক - সবসময় সব খবর সবার আগে নির্ভুলভাবে তুলে ধরাই আমাদের লক্ষ্য। এগিয়ে থাকে এগিয়ে রাখে। \r\n\r\nAbout Channel:\r\nABP Ananda is a regional news hub that provides you with comprehensive up-to-date news coverage from West Bengal and all over India and World. Get the latest top stories, current affairs, sports, business, entertainment, politics, spirituality, and many more here only on ABP Ananda.\r\n\r\nABP Ananda maintains the repute of being a people's channel. Its cutting-edge formats, state-of-the-art newsrooms commands the attention of million of Bengalis weekly.\r\n\r\nDownload ABP App for Apple: https://itunes.apple.com/in/app/abp-l...\r\nDownload ABP App for Android: https://play.google.com/store/apps/de...\r\n\r\nSocial Media Handles (আমাদের অন্যান্য হ্যান্ডেলগুলি):\r\n\r\nWebsite:\r\nhttp://bengali.abplive.com\r\nd\r\nFacebook: https://www.facebook.com/abpananda \r\nTwitter: https://twitter.com/abpanandatv\r\nGoogle+: https://plus.google.com/+abpananda\r\nInstagram: https://www.instagram.com/abpanandatv/\r\nTelegram : https://t.me/abpanandaofficial\r\nKoo : https://www.kooapp.com/fee",
    errorId: "Success",
    id: "A4czTSJYZHo",
    isCommentDisabled: false,
    isLiveNow: false,
    isLiveStream: false,
    isRegionRestricted: false,
    lengthSeconds: 182,
    likeCount: 3565,
    publishedTimeText: "Jul 11, 2024",
    thumbnails: [
        {
            height: 94,
            url: "https://i.ytimg.com/vi/A4czTSJYZHo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAdXUTNYV9umM_grTbOG-Q8ajBt5g",
            width: 168
        },
        {
            height: 110,
            url: "https://i.ytimg.com/vi/A4czTSJYZHo/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAzZK33Z-t55TtO8JaKGYUAI8qXkw",
            width: 196
        },
        {
            height: 138,
            url: "https://i.ytimg.com/vi/A4czTSJYZHo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDU6ceFoz-sCD_oU0Ac5SuTqKV8lw",
            width: 246

        }
    ],
    videos: {
        errorId: "Success",
        expiration: 1722706684,
        items: [
            {
                extension: "mp4",
                hasAudio: true,
                height: 360,
                lastModified: 1720751341813763,
                lengthMs: 182253,
                mimeType: `video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"`,
                quality: "360p",
                size: 13089800,
                sizeText: "12.5MB",
                url: "https://redirector.googlevideo.com/videoplayback?expire=1722706684&ei=nBauZsHmJtr_ir4PrKXl4AY&ip=198.98.59.215&id=o-AF6xo-45FGoFZLv5HFtWNSAsjhD1JHUVZIof2S9jwKrS&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Ax&mm=31%2C26&mn=sn-ab5sznzl%2Csn-p5qlsn6l&ms=au%2Conr&mv=m&mvi=2&pl=23&initcwndbps=655000&siu=1&bui=AXc671L1EKiHLGOjlFB6stenUruapEYfNCNBB50q3hyAAb_MEyOAS75RtoQM3YKYKQItSMBKbA&vprv=1&svpuc=1&mime=video%2Fmp4&ns=XfCvgY7WV7KPahV0dpBHkykQ&rqh=1&gir=yes&clen=13089800&ratebypass=yes&dur=182.253&lmt=1720751341813763&mt=1722684557&fvip=5&c=WEB&sefc=1&txp=5538434&n=1y1mg234ALmbCA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgYWxv_ycltj6bdbPs_nU7PHcQoakB7-802iKghrptOhMCIQCr7RUGgsGSMn4-uPDcokf80gyUbjUyLgw8ZdPqFaOkqQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAPYov09X3e8DUCJwGUDucb_Nhx_GSt5IhvArZ_n562e7AiEAiqSyGdTQnpBHPbKP9JcwafOtg8vBQbcJIAGIrc5DVEM%3D&range=0-",
                width: 640,
            },
            {
                extension: "mp4",
                hasAudio: false,
                height: 1080,
                lastModified: 1720765803342135,
                lengthMs: 182200,
                mimeType: `video/mp4; codecs=\"avc1.640028\"`,
                quality: "1080p",
                size: 46937728,
                sizeText: "44.8MB",
                url: "https://redirector.googlevideo.com/videoplayback?expire=1722706684&ei=nBauZsHmJtr_ir4PrKXl4AY&ip=198.98.59.215&id=o-AF6xo-45FGoFZLv5HFtWNSAsjhD1JHUVZIof2S9jwKrS&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Ax&mm=31%2C26&mn=sn-ab5sznzl%2Csn-p5qlsn6l&ms=au%2Conr&mv=m&mvi=2&pl=23&initcwndbps=655000&siu=1&bui=AXc671KC3E3b9pK5PdVZIDLsDYmJxYgtkWfFLZyJidqLVgw7r26DdtB-3LS-AV2gCzyurx3q7A&vprv=1&svpuc=1&mime=video%2Fmp4&ns=DMKLe0emd3eDvKjaBRhSHXsQ&rqh=1&gir=yes&clen=46937728&dur=182.200&lmt=1720765803342135&mt=1722684557&fvip=5&keepalive=yes&c=WEB&sefc=1&txp=5535434&n=Hs-MyCctdx279A&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAIDtzT4VjLMbwTfUsrqBWlwGl0NEzOYPuEjITeXqVG2yAiAFfhywttj1y8g2w-0esnuH1kRhWY8j4YlbauhjAhF0hw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAPYov09X3e8DUCJwGUDucb_Nhx_GSt5IhvArZ_n562e7AiEAiqSyGdTQnpBHPbKP9JcwafOtg8vBQbcJIAGIrc5DVEM%3D&range=0-",
                width: 1920
            },
            {
                extension: "mp4",
                hasAudio: false,
                height: 1440,
                lastModified: 1720765803342135,
                lengthMs: 182200,
                mimeType: `video/mp4; codecs=\"avc1.640028\"`,
                quality: "1080p",
                size: 46937728,
                sizeText: "44.8MB",
                url: "https://redirector.googlevideo.com/videoplayback?expire=1722706684&ei=nBauZsHmJtr_ir4PrKXl4AY&ip=198.98.59.215&id=o-AF6xo-45FGoFZLv5HFtWNSAsjhD1JHUVZIof2S9jwKrS&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Ax&mm=31%2C26&mn=sn-ab5sznzl%2Csn-p5qlsn6l&ms=au%2Conr&mv=m&mvi=2&pl=23&initcwndbps=655000&siu=1&bui=AXc671KC3E3b9pK5PdVZIDLsDYmJxYgtkWfFLZyJidqLVgw7r26DdtB-3LS-AV2gCzyurx3q7A&vprv=1&svpuc=1&mime=video%2Fmp4&ns=DMKLe0emd3eDvKjaBRhSHXsQ&rqh=1&gir=yes&clen=46937728&dur=182.200&lmt=1720765803342135&mt=1722684557&fvip=5&keepalive=yes&c=WEB&sefc=1&txp=5535434&n=Hs-MyCctdx279A&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAIDtzT4VjLMbwTfUsrqBWlwGl0NEzOYPuEjITeXqVG2yAiAFfhywttj1y8g2w-0esnuH1kRhWY8j4YlbauhjAhF0hw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAPYov09X3e8DUCJwGUDucb_Nhx_GSt5IhvArZ_n562e7AiEAiqSyGdTQnpBHPbKP9JcwafOtg8vBQbcJIAGIrc5DVEM%3D&range=0-",
                width: 1920
            },
            {
                extension: "mp4",
                hasAudio: false,
                height: 1080,
                lastModified: 1720765803342135,
                lengthMs: 182200,
                mimeType: `video/mp4; codecs=\"avc1.640028\"`,
                quality: 720,
                size: 46937728,
                sizeText: "44.8MB",
                url: "https://redirector.googlevideo.com/videoplayback?expire=1722706684&ei=nBauZsHmJtr_ir4PrKXl4AY&ip=198.98.59.215&id=o-AF6xo-45FGoFZLv5HFtWNSAsjhD1JHUVZIof2S9jwKrS&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Ax&mm=31%2C26&mn=sn-ab5sznzl%2Csn-p5qlsn6l&ms=au%2Conr&mv=m&mvi=2&pl=23&initcwndbps=655000&siu=1&bui=AXc671KC3E3b9pK5PdVZIDLsDYmJxYgtkWfFLZyJidqLVgw7r26DdtB-3LS-AV2gCzyurx3q7A&vprv=1&svpuc=1&mime=video%2Fmp4&ns=DMKLe0emd3eDvKjaBRhSHXsQ&rqh=1&gir=yes&clen=46937728&dur=182.200&lmt=1720765803342135&mt=1722684557&fvip=5&keepalive=yes&c=WEB&sefc=1&txp=5535434&n=Hs-MyCctdx279A&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAIDtzT4VjLMbwTfUsrqBWlwGl0NEzOYPuEjITeXqVG2yAiAFfhywttj1y8g2w-0esnuH1kRhWY8j4YlbauhjAhF0hw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAPYov09X3e8DUCJwGUDucb_Nhx_GSt5IhvArZ_n562e7AiEAiqSyGdTQnpBHPbKP9JcwafOtg8vBQbcJIAGIrc5DVEM%3D&range=0-",
                width: 1920
            },
        ],
        status: true
    },

}

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
        button: <DownloadButton />
    },
    {
        resolution: <TQuality />,
        fileSize: fileSize,
        button: <DownloadButton />
    },
    {
        resolution: <TQuality />,
        fileSize: fileSize,
        button: <DownloadButton />
    },
    {
        resolution: <TQuality />,
        fileSize: fileSize,
        button: <DownloadButton />
    }
];

const VideoProvider = ({ children }) => {

    const [videoData, setvideoData] = useState({});

    return (
        <VideoContext.Provider value={{ videoData, setvideoData }}>
            {children}
        </VideoContext.Provider >
    );
}
export default VideoProvider;











