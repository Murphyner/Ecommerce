import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

function LogoutModal({setFlag}) {

    const navigate = useNavigate()

    function handleLogOut(){
        localStorage.clear()
        navigate('/admin')
        window.location.reload()
    }

    return (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-[999]">
            <div className="max-h-[90dvh] bg-gray-800 rounded-lg max-w-md w-full">
                <div className="p-5 flex items-center justify-end">
                    <button onClick={() => setFlag(false)} className="text-[1.5em] hover:bg-gray-700 text-gray-400 hover:text-white">
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
                        <button onClick={handleLogOut} className="border font-medium text-base px-4 py-2 border-transparent text-white bg-red-600 rounded-lg">
                            Yes, I'm sure
                        </button>
                        <button onClick={() => setFlag(false)} className="px-4 py-2 font-medium text-base border border-gray-600 hover:bg-gray-700 hover:text-white duration-300 bg-transparent text-gray-400 rounded-lg">
                            No, cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutModal