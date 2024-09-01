import { MdChevronLeft } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import img from "../assets/avatar.jfif"
import { CiCamera } from "react-icons/ci"
import AccountForm from "../components/AccountForm"
import PasswordForm from "../components/PasswordForm"

function Account() {
    const navigate = useNavigate()
    return (
        <main>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='px-8 md:px-0'>
                    <div className="pb-5">
                        <div>
                            <button onClick={() => navigate('/')} className='flex md:hidden items-center gap-1 pr-1 py-1 text-[0.875em] font-medium text-[#605F5F]'>
                                <MdChevronLeft />
                                <span>back to home</span>
                            </button>
                        </div>
                        <div className="py-5">
                            <h2 className="text-[2em] md:text-[2.5em] lg:text-[3.375em] font-medium text-center">My Account</h2>
                        </div>
                        <div className="flex py-5 flex-wrap">
                            <div className="w-full mb-6 lg:mb-0 lg:w-4/12 xl:w-3/12">
                                <div className="bg-[#F3F5F7] pt-10 pb-5 px-4">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="relative mb-2">
                                            <div className="w-20 h-20 rounded-[50%] overflow-hidden">
                                                <img src={img} alt="" className="w-full h-full object-cover" />
                                                <span className="w-7 h-7 flex justify-center items-center absolute z-10 bottom-[-5px] right-[-5px] rounded-[50px] bg-[#FE5196] text-white border-[1.5px] border-white">
                                                    <CiCamera />
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="text-[1.25em] mb-5 font-semibold text-center">Sofia Havertz</h3>
                                        <select className="block w-full lg:hidden border-[#6C7275] border-2 rounded-lg p-2 outline-none">
                                            <option value="Account" className="font-semibold text-black text-[1em]">Account</option>
                                            <option value="Address" className="font-semibold text-black text-[1em]">Address</option>
                                            <option value="Orders" className="font-semibold text-black text-[1em]">Orders</option>
                                            <option value="Wishlist" className="font-semibold text-black text-[1em]">Wishlist</option>
                                            <option value="Log Out" className="font-semibold text-black text-[1em]">Log Out</option>
                                        </select>
                                    </div>
                                    <div className="hidden lg:block">
                                        <ul>
                                            <li className="py-3 border-b border-[#dc375f]">
                                                <button className="text-[#DC375F] font-semibold text-[1em]">Account</button>
                                            </li>
                                            <li className="py-3">
                                                <button className="text-[#6C7275] font-semibold text-[1em]">Address</button>
                                            </li>
                                            <li className="py-3">
                                                <button className="text-[#6C7275] font-semibold text-[1em]">Orders</button>
                                            </li>
                                            <li className="py-3">
                                                <button className="text-[#6C7275] font-semibold text-[1em]">Wishlist</button>
                                            </li>
                                            <li className="py-3">
                                                <button className="text-[#6C7275] font-semibold text-[1em]">Log Out</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-8/12 xl:w-9/12 lg:pl-8">
                                <div>
                                    <div className="mb-6">
                                        <h3 className="text-[1.25em] font-semibold mb-4">Account Details</h3>
                                        <AccountForm />
                                    </div>
                                    <div className="mb-6">
                                        <h3 className="text-[1.25em] font-semibold mb-4">Password</h3>
                                        <PasswordForm />
                                    </div>
                                    <div>
                                        <button className="bg-[#DC375F] font-medium text-[1em] text-white rounded-lg py-3 px-10">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Account