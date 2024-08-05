import React, { useContext } from 'react'
import { BiSolidDownload } from "react-icons/bi";
import VideoContext from '../contexts/VideoContext';


export const DownloadButton = () => {

    const { videoData } = useContext(VideoContext);
    // console.log("button", videoData);
    // const url = videoData.videos.adaptiveFormats

    function downloadFile() {
        const link = document.createElement('a');
        link.href = 'https://redirector.googlevideo.com/videoplayback?expire=1722805936&ei=UJqvZpirH7qXsfIP0arb4QQ&ip=209.141.37.75&id=o-AOfZ1SQBwTu77_U4DgytJfwNy4nZ95UB0DpFzcdw-AO6&itag=278&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C571&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=gO&mm=31%2C26&mn=sn-a5meknde%2Csn-n4v7snly&ms=au%2Conr&mv=m&mvi=3&pl=24&initcwndbps=327500&siu=1&bui=AXc671JoE-JVW0Ipro8UT4turQmAoumH1qJPI04bSPy-XcMzc_UXyR2gvTQ-qAUzUxebFUczDQ&vprv=1&svpuc=1&mime=video%2Fwebm&ns=zXJeZYAdEF4lZGbEMtnwbzwQ&rqh=1&gir=yes&clen=37141922&dur=3881.666&lmt=1712751147630550&mt=1722783924&fvip=5&keepalive=yes&c=WEB&sefc=1&txp=5437434&n=zkhdwTCDmY83pg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgdNXaHdsK6L7UJ-xdHGE3wdheHsltSBfM4FPX4DsaaoACIQCAgapEmuy_rgg_zt5jBFU-CpR9xHxu2L9UkTOFuFEIhg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRQIhAJqDrvOyde3i0wlia2LIppUkIZ-ZbsUI96l2AUQ8dC_zAiAyeMbENrH4oZyoWA_PyxryqlVz4uVjx0NSQ8cQn7Ef1A%3D%3D&range=0-'; // Your file URL here
        link.download = 'video.mp4'; // The file name to save as
        link.click();
    }

    return (
        <div className=''>
            <button onClick={(e) => ''} type='button' id=''
                className='text-white bg-lime-400 rounded p-2 ps-4 pe-4 font-normal flex items-center'>
                <BiSolidDownload style={{ fontSize: '1rem', marginRight: '2px' }} />
                Download
            </button>
        </div>
    )
}
