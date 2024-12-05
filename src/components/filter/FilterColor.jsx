import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

function FilterColor({item, setFilterColor, filterColor}) {
    const isSelected = filterColor.includes(item);
    const [flag, setFlag] = useState(isSelected);

    function changeColor() {
        const newFlag = !flag;
        setFlag(newFlag);

        if (newFlag) {
            setFilterColor(prevFilterColor => [...prevFilterColor, item]);
        } else {
            setFilterColor(prevFilterColor => prevFilterColor.filter((element) => element !== item));
        }
    }

    return (
        <div
            onClick={changeColor}
            className='flex mb-2 cursor-pointer items-center gap-2'>
            <span className={`${item.toLowerCase() === 'black' ? 'bg-black' : `bg-${item.toLowerCase()}-500`} relative flex justify-center items-center w-6 h-6  rounded-full shadow-md `}>
                {flag && <FaCheck className='text-[#ccc] text-[.725em]' />} 
            </span>
            <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                {item}
            </span>
        </div>
    )
}

export default FilterColor