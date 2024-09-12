import React from 'react'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { setNum } from '../../store/NumSlice'
import { useNavigate } from 'react-router-dom'

function LogoutComp({setFlag}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function cancel(){
        setFlag(false)
        dispatch(setNum(1))
    }

    function logOut(){
        localStorage.clear()
        navigate(`/account`)
        window.location.reload()
    }

    return (
        <div className='flex fixed z-[999] inset-0 bg-[#00000080] min-h-[60vh] items-center justify-center'>
            <div className='w-[250px] sm:w-[350px] md:w-[450px] bg-white rounded-lg'>
                <div className="p-5 flex items-center justify-end">
                    <button onClick={cancel} className="text-[1.5em] hover:bg-gray-700 text-gray-400 hover:text-white">
                        <IoClose />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-5">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="mx-auto h-20 w-20 text-red-600"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <div className="py-5 px-10">
                        <p className="text-xl font-normal text-center text-gray-400">Are you sure you want to log out?</p>
                    </div>
                    <div className="py-5 flex justify-center gap-3">
                        <button onClick={logOut} className="border font-medium text-base px-4 py-2 border-transparent text-white bg-red-600 rounded-lg">
                            Yes, I'm sure
                        </button>
                        <button onClick={cancel} className="px-4 hidden md:block py-2 font-medium text-base border border-gray-600 hover:bg-gray-700 hover:text-white duration-300 bg-transparent text-gray-400 rounded-lg">
                            No, cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutComp