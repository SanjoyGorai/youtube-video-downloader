import React from 'react'

const ShortsCard = () => {
    return (
        <>
            <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
                {/* Image */}
                <div className="relative">
                    <img
                        src={''}
                        alt={''}
                        className="w-full h-48 object-cover"
                    />
                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                        {''}
                    </div>
                </div>
                {/* Title */}
                <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900">{''}</h3>
                </div>
            </div>
        </>
    )
}

export default ShortsCard