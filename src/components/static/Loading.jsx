import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center w-full h-[50vh] items-center'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#DC375F]"></div>
    </div>
  )
}

export default Loading