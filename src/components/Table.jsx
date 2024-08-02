import React from 'react'
import { useTable } from 'react-table';
import { Button } from './Button';

const randomNumber = Math.round(Math.random() * (100 - 3) + 3);
const file = `${randomNumber} MB`
const data = [
    {
        resolution: '1080p (.mp4)',
        fileSize: file,
        button: <Button />
    },
    {
        resolution: '720p (.mp4)',
        fileSize: file,
        button: <Button />
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
                                    <td className='border p-2' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        
        </>

    );
}


