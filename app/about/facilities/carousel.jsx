import React, { useState } from 'react'
import '../../../styles/about/carousel/carousel.css'

function Carousel(props) {

    const [i, setI] = useState(0)
    return (
        <div className='w-full pad-adjust flex items-center justify-center'>
            <div className='relative w-full max-w-[1250px] bg-gray-400 h-adjust rounded-2xl' style={{ backgroundImage: `url(${props.carouselData[i].url})`, backgroundSize: '100% 100%' }}>
                <div className='absolute flex z-10 h-auto mb-8 gap-2 w-full bottom-0 items-center justify-center'>
                    {props.carouselData.map((index) => {
                        return (
                            <div className={index.index === i ? 'bg-white h-2 w-2 rounded-[50%] border cursor-pointer' : 'bg-gray-500 h-2 w-2 rounded-[50%] cursor-pointer border'} onClick={() => setI(index.index)}>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Carousel