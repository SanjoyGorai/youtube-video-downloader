import React, { useContext } from 'react'
import { useTable } from 'react-table';
import { DownloadButton } from './DownloadButton';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.css';

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
const file = `${randomNumber} MB`
const data = [
    {
        resolution: <TQuality />,
        fileSize: file,
        button: <DownloadButton />
    },
    {
        resolution: <TQuality />,
        fileSize: file,
        button: <DownloadButton />
    },
    {
        resolution: <TQuality />,
        fileSize: file,
        button: <DownloadButton />
    },
    {
        resolution: <TQuality />,
        fileSize: file,
        button: <DownloadButton />
    }
];

const columns = [
    {
        Header: 'Resolution',
        accessor: 'resolution'
    },
    {
        Header: 'File Size',
        accessor: 'fileSize'
    },
    {
        Header: 'Download',
        accessor: 'button'
    }
];
export const Table = () => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th className='border p-2' {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td className='border ps-5 p-2 pe-5' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </>

    );
}




