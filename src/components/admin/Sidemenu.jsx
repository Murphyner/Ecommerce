import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoutModal from './modal/logout/LogoutModal'

function Sidemenu() {
    const [flag, setFlag] = useState(false)

    return (
        <div className='p-4'>
            {flag && <LogoutModal flag={flag} setFlag={setFlag} />}
            <ul>
                <li className='mb-3'>
                    <NavLink to={'/admin'} className='flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 text-gray-200 hover:bg-gray-700'>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            data-testid="flowbite-sidebar-collapse-icon"
                            className="h-6 w-6 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white text-gray-900"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className='flex-1 whitespace-nowrap px-3'>Product</span>
                    </NavLink>
                </li>
                <li className='mb-3'>
                    <NavLink to={'category'} className='flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 text-gray-200 hover:bg-gray-700'>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            data-testid="flowbite-sidebar-item-icon"
                            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <span className='flex-1 whitespace-nowrap px-3'>Category</span>
                    </NavLink>
                </li>
                <li className='mb-3'>
                    <NavLink to={'brands'} className='flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 text-gray-200 hover:bg-gray-700'>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            data-testid="flowbite-sidebar-item-icon"
                            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                        <span className='flex-1 whitespace-nowrap px-3'>Brand</span>
                    </NavLink>
                </li>
                <li className='mb-3'>
                    <button onClick={() => setFlag(true)} className='flex gap-2 w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 text-gray-200 hover:bg-gray-700'>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="h-7 w-7 text-gray-400"
                            height="14px"
                            width="14px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className=' whitespace-nowrap'>Log Out</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Sidemenu