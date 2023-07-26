import React from 'react'

function Card(props) {
    return (
        <div className='max-w-[1250px] mb-8 border max-h-[1000px] h-fit w-full flex items-center justify-between row-switch'>
            <div className='w-full min-h-[250px] h-[250px] flex-[4] flex justify-800' >
                <div className='w-full h-[250px] max-w-[350px]' style={{ backgroundImage: `url(${props.cellData.url})`, backgroundSize: '100% 100%' }}>
                </div>
            </div>
            <div className='w-full h-[250px] min-h-[250px] flex-[8] bg-gray-200'></div>
            <div className='w-full h-[250px] flex-[1] disappear relative flex items-center'>
                <div className='absolute right-0 disappear'>Arrow</div>
            </div>
        </div>
    )
}

export default Card