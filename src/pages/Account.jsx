import { MdChevronLeft } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import img from "../assets/avatar.jfif"
import { CiCamera } from "react-icons/ci"
import AccountComp from "../components/account/AccountComp"
import OrdersComp from "../components/account/OrdersComp"
import { useDispatch, useSelector } from "react-redux"
import { setNum } from "../store/NumSlice"
import WishlistComp from "../components/account/WishlistComp"

function Account() {
    const navigate = useNavigate()

    const {num} = useSelector(state => state.number)
    const dispatch = useDispatch()
    
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
                                        <select value={num} onInput={(e) => dispatch(setNum(Number(e.target.value)))} className="block w-full lg:hidden border-[#6C7275] border-2 rounded-lg p-2 outline-none">
                                            <option value="1" className="font-semibold text-black text-[1em]">Account</option>
                                            <option value="3" className="font-semibold text-black text-[1em]">Orders</option>
                                            <option value="4" className="font-semibold text-black text-[1em]">Wishlist</option>
                                            <option value="5" className="font-semibold text-black text-[1em]">Log Out</option>
                                        </select>
                                    </div>
                                    <div className="hidden lg:block">
                                        <ul>
                                            <li className={`py-3  ${num === 1 ? 'border-b border-[#dc375f]' : ''}`}>
                                                <button onClick={() => dispatch(setNum(1))} className={` font-semibold text-[1em] ${ num === 1 ? 'text-[#DC375F]' : 'text-[#6C7275]'}`}>Account</button> 
                                            </li>
                                            <li className={`py-3  ${num === 3 ? 'border-b border-[#dc375f]' : ''}`}>
                                                <button onClick={() => dispatch(setNum(3))} className={` font-semibold text-[1em] ${ num === 3 ? 'text-[#DC375F]' : 'text-[#6C7275]'}`}>Orders</button>
                                            </li>
                                            <li className={`py-3  ${num === 4 ? 'border-b border-[#dc375f]' : ''}`}>
                                                <button onClick={() => dispatch(setNum(4))} className={` font-semibold text-[1em] ${ num === 4 ? 'text-[#DC375F]' : 'text-[#6C7275]'}`}>Wishlist</button>
                                            </li>
                                            <li className={`py-3  ${num === 5 ? 'border-b border-[#dc375f]' : ''}`}>
                                                <button onClick={() => dispatch(setNum(5))} className={` font-semibold text-[1em] ${ num === 5 ? 'text-[#DC375F]' : 'text-[#6C7275]'}`}>Log Out</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-8/12 xl:w-9/12 lg:pl-8">
                                {num === 1 ? <AccountComp /> : num === 4 ? <WishlistComp /> : <OrdersComp />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Account