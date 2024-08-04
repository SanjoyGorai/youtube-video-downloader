import React, { useContext, useState } from 'react'
import { useTable } from 'react-table';
import { DownloadButton } from './DownloadButton';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import VideoContext from '../contexts/VideoContext';

import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TQuality = (props) => {
    return (
        <div>
            <span> 1080p (.mp4)</span>
            <span>  </span>
            <Badge bg="primary" > full-HD </Badge>
        </div>
    )
}

function createData(quality, fileSize, button) {
    return { quality, fileSize, button };
}

const columns = ['Resolution', 'File Size', 'Download'];

export const BasicTable = () => {

    const { videoData, setvideoData } = useContext(VideoContext);
    // console.log('table', videoData);
    const videoItems = videoData.videos.items
    // console.log(quality);


    const rows = [
        createData(<TQuality />, '47.54 MB', <DownloadButton />),
        // createData(<TQuality />, '47.54 MB', <DownloadButton />),
        // createData(<TQuality />, '47.54 MB', <DownloadButton />),
        // createData(<TQuality />, '47.54 MB', <DownloadButton />),
    ];

    function bytesToMB(bytes) {
        const megabytes = bytes / (1024 * 1024);
        return megabytes.toFixed(2);
    }

    return (
        <>
            <TableContainer component={Paper}   >
                <MuiTable sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map((item, key) =>
                            (
                                <TableCell key={key}>{item}</TableCell>
                            )
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {videoItems.map((item, key) => (
                            <TableRow
                                key={key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{item.quality}</TableCell>
                                <TableCell align="right">{bytesToMB(item.size) + ' MB'}</TableCell>
                                <TableCell align="right"><DownloadButton /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>
        </>

    );
}











// const columns = [
//     {
//         Header: 'Resolution',
//         accessor: 'resolution'
//     },
//     {
//         Header: 'File Size',
//         accessor: 'fileSize'
//     },
//     {
//         Header: 'Download',
//         accessor: 'button'
//     }
// ];
// export const Table = () => {

//     const videoInfo = useContext(VideoContext);
//     const [videoData, setvideoData] = useState(videoInfo);
//     console.log(videoData.videoInfo);
//     const quality = videoData.videoInfo.videos.items[0].quality
//     console.log(videoData.videoInfo.videos.items[0].quality);
//     const fileSizeInBytes = videoData.videoInfo.videos.items[0].size

//     function bytesToMB(bytes) {
//         const megabytes = bytes / (1024 * 1024);
//         return megabytes.toFixed(2); // This will return the value rounded to 2 decimal places
//     }
//     const fileSizeInMB = bytesToMB(fileSizeInBytes);
//     const qualityBadge = [`${quality} `, <Badge bg="primary" > full-HD </Badge>]

//     const data = [
//         {
//             resolution: qualityBadge,
//             fileSize: `${fileSizeInMB} MB`,
//             button: <DownloadButton />
//         },
//     ];

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow
//     } = useTable({
//         columns,
//         data
//     });

//     return (
//         <>
//             <table {...getTableProps()}>
//                 <thead>
//                     {headerGroups.map((headerGroup) => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map((column) => (
//                                 <th className='border p-2' {...column.getHeaderProps()}>{column.render('Header')}</th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {rows.map((row) => {
//                         prepareRow(row);
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map((cell) => (
//                                     <td className='border ps-5 p-2 pe-5' {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                 ))}
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>

//         </>

//     );
// }




