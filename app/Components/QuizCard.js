import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsis, faCode, faPlay} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export const QuizCard = (props) => {
  return (
    <div className='rounded-[10px] flex flex-col gap-2 border border-gray-300 bg-white p-4'>
    {/* Image Container */}
        <div className='relative bg-green-700 w-full h-32 flex justify-center items-center rounded-md'>
            {/* Options Icon */}
            <div className='absolute cursor-pointer top-3 right-3'>
                <FontAwesomeIcon 
                    className="text-white"
                    height={13}
                    width={13}
                    icon={faEllipsis}
                />
            </div>
            {/* Quiz Icon */}
            <FontAwesomeIcon 
                className="text-white"
                height={80}
                width={80}
                icon={faCode}
            />
        </div>
        <h3 className='font-bold'>Quiz Card</h3>
        {/* Questions */}
        <p className='text-sm font-light'>20 questions</p>
        {/* Footer area */}
        <div className='flex gap-3'>
            {/* success rate area */}
            <div className='flex gap-1 items-center'>
                <Image 
                    src="/target.png"
                    width={20}
                    height={20}
                    alt=''
                />
                <span className='text-[12px]'>Success rate: 100%</span>
            </div>
            <div className='rounded-full w-7 h-7 bg-green-700 flex items-center justify-center'>
                <FontAwesomeIcon 
                    className='text-white'
                    width={15}
                    height={15}
                    icon={faPlay}
                />
            </div>
        </div>
    </div>
  )
}
