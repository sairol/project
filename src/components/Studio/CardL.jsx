import React from 'react'

function CardL({ name, imgURL, role, desc }) {
    return (
        <div className='px-12 py-4 md:col-span-1 col-span-3'>
            <img src={imgURL} alt="" />
            <div className='flex justify-between px-2 py-4 items-baseline'>
                <span>
                    {role}
                </span>
                <div className='flex space-x-1 items-baseline'>
                    <span className='h-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false"
                            style={{
                                userSelect: 'none',
                                width: '100%',
                                height: '100%',
                                display: 'inline-block',
                                fill: 'rgba(14, 16, 17, 0.6)',
                                color: 'rgba(14, 16, 17, 0.6)',
                                flexShrink: 0
                            }}
                        >
                            <g color="rgba(14, 16, 17, 0.6)" weight="light">
                                <path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path>
                            </g>
                        </svg>

                    </span>
                    <span className="h-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            focusable="false"
                            color="rgba(14, 16, 17, 0.6)"
                            style={{
                                userSelect: 'none',
                                width: '100%',
                                height: '100%',
                                display: 'inline-block',
                                fill: 'rgba(14, 16, 17, 0.6)',
                                color: 'rgba(14, 16, 17, 0.6)',
                                flexShrink: 0
                            }}
                        >
                            <g color="rgba(14, 16, 17, 0.6)" weight="light">
                                <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z"></path>
                            </g>
                        </svg>
                    </span>

                    <span className="h-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            focusable="false"
                            color="rgba(14, 16, 17, 0.6)"
                            style={{
                                userSelect: 'none',
                                width: '100%',
                                height: '100%',
                                display: 'inline-block',
                                fill: 'rgba(14, 16, 17, 0.6)',
                                color: 'rgba(14, 16, 17, 0.6)',
                                flexShrink: 0
                            }}
                        >
                            <g color="rgba(14, 16, 17, 0.6)" weight="light">
                                <path d="M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z"></path>
                            </g>
                        </svg>
                    </span>

                </div>

            </div>
            <span className='text-3xl px-2 py-2'>
                {name}
            </span>
            <p className='px-2 text-zinc-500'>
                {desc}
            </p>
        </div >
    )
}

export default CardL