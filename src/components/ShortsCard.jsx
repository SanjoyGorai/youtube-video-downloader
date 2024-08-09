import React, { useContext } from 'react'
import ShortsContext from '../contexts/ShortsContext.js'

const ShortsCard = () => {


    const { shortsData, setShortsData } = useContext(ShortsContext);
    console.log('Shorts Data ShortsCard : ', shortsData);


    return (
        <>
            <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
                {/* Image */}
                <img
                    src={shortsData.thumbnail[0].url}
                    alt={''}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-xl text-start font-medium text-gray-900">{shortsData?.title}</h3>
                    <h3 className="text-xl text-start mt-3 font-medium text-gray-900">{'Duration: '}</h3>
                </div>
            </div>
        </>
    )
}

export default ShortsCard