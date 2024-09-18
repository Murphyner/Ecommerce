import React from 'react'

function SizeComp({ i, item, sizeFlag, setSizeFlag, setSize }) {
    function chooseSize(){
        setSizeFlag(i)
        setSize(item)
    }
    return (
        <div className='px-2'>
            <div onClick={chooseSize} className={`w-10 cursor-pointer h-10 text-[.875em] duration-300 hover:border-black ${sizeFlag === i ? 'border-black' : ''} font-medium border flex items-center justify-center`}>
                {item}
            </div>
        </div>
    )
}

export default SizeComp