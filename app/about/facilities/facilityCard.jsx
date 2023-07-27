import React from 'react'
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { stringify } from 'querystring';

function Card(props) {
    return (
        <Link href={{ pathname: `/about/facilities/${props.cellData.slug}`, query: { slug: props.cellData.slug } }} >
            <div className='max-w-[1250px] max-h-[1000px] h-fit w-full flex items-center justify-between row-switch card gap-4'>
                <div className='w-full min-h-[250px] h-[250px] flex-[4] flex justify-800' >
                    <div className='w-full h-[250px] max-w-[375px]' style={{ backgroundImage: `url(${props.cellData.url})`, backgroundSize: '100% 100%' }}>
                    </div>
                </div>
                <div className='w-full h-[250px] min-h-[250px] flex-[8] flex flex-col text-style justify-between'>
                    <div className='font-bold text-3xl'>{props.cellData?.index}. {props.cellData?.heading}</div>
                    <div className='text-[19px] italic'>{props.cellData?.shorttext}</div>
                    <div className='h-[80px] w-full flex gap-4 resize'>
                        {props.cellData.tags?.map((index) => {
                            return (
                                <>
                                    {
                                        index.index < 3 ? <div className='h-full jump cursor-pointer aspect-[1] rounded-[50%]' style={{ backgroundImage: `url(${index.url})`, backgroundSize: '100% 100%' }}>
                                        </div> : <></>
                                    }
                                </>

                            )
                        })}
                        {props.cellData.tags.length > 4 ? <div className='h-full cursor-pointer jump aspect-[1] rounded-[50%] bg-gray-300 text-sm flex items-center justify-center'>+{props.cellData.tags.length - 3} More</div> : <></>}
                    </div>
                </div>
                <div className='w-full h-[250px] flex-[1] disappear relative flex items-center'>
                    <div className='absolute right-0 disappear'><ArrowForwardIosIcon /></div>
                </div>
            </div>
        </ Link >
    )
}

export default Card