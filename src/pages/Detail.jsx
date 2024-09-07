import { Link } from "react-router-dom"
import DetailSlick from "../components/slider/DetailSlick"
import { FaCheck, FaFacebookF, FaPinterest, FaRegStar, FaStar, FaTwitter } from "react-icons/fa"
import { FiMinus, FiPlus } from "react-icons/fi"
import { CiHeart } from "react-icons/ci"
import img from "../assets/1.jfif"
import ResponsiveSlick from "../components/slider/ResponsiveSlick"

function Detail() {
    return (
        <main>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='px-8 md:px-0'>
                    <div className="py-10">
                        <div className="mb-3 lg:hidden">
                            <nav aria-label="breadcrumb" className="w-full p-4">
                                <ul className="flex space-x-2 justify-center">
                                    <li className="flex items-center">
                                        <Link to={'/'} title="Back to homepage" className="flex items-center hover:underline">Home</Link>
                                    </li>
                                    <li className="flex items-center space-x-1">
                                        <span className="dark:text-gray-600">/</span>
                                        <Link to={'/products'} className="flex items-center px-1 capitalize hover:underline">Products</Link>
                                    </li>
                                    <li className="flex items-center space-x-1">
                                        <span className="dark:text-gray-600">/</span>
                                        <span className="flex items-center px-1 capitalize cursor-default">Shop</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div id="detailSlick" className="flex justify-between flex-wrap">
                            <div className="w-full lg:mb-0 lg:w-5/12 mb-14">
                                <DetailSlick />
                            </div>
                            <div className="w-full lg:pl-3 lg:mb-0 lg:w-5/12 mb-4">
                                <div>
                                    <div className='flex items-center mb-2 xl:mb-4'>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            index < 4 ? <FaStar key={index} className='text-yellow-500' /> : <FaRegStar key={index} />
                                        ))}
                                    </div>
                                    <div className="mb-3">
                                        <h2 className="text-[1.875em] font-bold text-[#222]">Contrasting Design T-Shirt</h2>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-[0.75em] text-[#BBBBBB] font-normal">SKU: AB1609456789</p>
                                    </div>
                                    <div className="mb-3">
                                        <span className="text-[#DC375F] text-[1.5em]">$95.90</span>
                                    </div>
                                    <div className="hidden lg:mb-3 lg:block">
                                        <p className="text-[#B9BBBF] font-medium">Choose a Color</p>
                                        <div className="flex gap-2 py-3">
                                            <div className="p-1 border-[3px] border-[#394772] cursor-pointer rounded-[50%]">
                                                <span className="flex justify-center items-center text-white w-12 h-12 rounded-[50%] bg-[#394772]">
                                                    <FaCheck />
                                                </span>
                                            </div>
                                            <div className="p-1 cursor-pointer rounded-[50%]">
                                                <span className="block w-12 h-12 rounded-[50%] bg-[#BBD278]"></span>
                                            </div>
                                            <div className="p-1 cursor-pointer rounded-[50%]">
                                                <span className="block w-12 h-12 rounded-[50%] bg-[#BBC1F8]"></span>
                                            </div>
                                            <div className="p-1 cursor-pointer rounded-[50%]">
                                                <span className="block w-12 h-12 rounded-[50%] bg-[#FFD3F8]"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-[#777] w-6/12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                    <div className="flex pb-10 border-b border-[#EAEAEA] flex-wrap">
                                        <div className="w-6/12 lg:w-4/12 pr-2 mb-3">
                                            <div className="flex items-center justify-between px-2 border rounded-sm border-[#EAEAEA] lg:py-3 py-2">
                                                <button>
                                                    <FiMinus />
                                                </button>
                                                <span className="text-[0.875em]">1</span>
                                                <button>
                                                    <FiPlus />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-6/12 lg:px-2 pl-2 mb-3">
                                            <button className="bg-[#222222] lg:py-3 font-medium text-white rounded-sm py-2 block w-full">
                                                Add to cart
                                            </button>
                                        </div>
                                        <div className="w-full lg:w-2/12 lg:pl-2 mb-3">
                                            <button className="w-full text-[#999] rounded-sm border lg:py-3 border-[#EAEAEA] gap-2 py-2 flex justify-center items-center">
                                                <CiHeart />
                                                <span className="lg:hidden">Add to wishlist</span>
                                            </button>
                                        </div>
                                        <div className="w-full">
                                            <button className="w-full lg:py-3 text-[0.875em] font-bold uppercase bg-[#DC375F] rounded-sm text-white py-2 flex justify-center items-center">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="pb-10 pt-5">
                                        <ul className="mb-10">
                                            <li className="text-[0.9375em] text-[#999] mb-2"><span className="text-[0.875em] text-[#222] mr-1 uppercase font-bold">Category:</span>Wallets & Cases</li>
                                            <li className="text-[0.9375em] text-[#999] mb-2"><span className="text-[0.875em] text-[#222] mr-1 uppercase font-bold">Tags:</span>Clothing, t-shirt, woman</li>
                                        </ul>
                                        <ul className="flex items-center gap-3">
                                            <li>
                                                <FaFacebookF />
                                            </li>
                                            <li>
                                                <FaTwitter />
                                            </li>
                                            <li>
                                                <FaPinterest />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="border-t border-b border-[#EAEAEA] gap-3 py-3 flex lg:gap-6 lg:flex-row lg:justify-center lg:py-5 flex-col">
                                <div>
                                    <p className="text-[#DC375F] text-[.95em] font-bold lg:font-medium cursor-pointer">Description</p>
                                </div>
                                <div>
                                    <p className="text-[#BBBBBB] text-[.95em] font-bold lg:font-medium cursor-pointer">More Information</p>
                                </div>
                                <div>
                                    <p className="text-[#BBBBBB] text-[.95em] font-bold lg:font-medium cursor-pointer">Reviews</p>
                                </div>
                            </div>
                            <div className="py-20">
                                <div className="flex lg:flex-row flex-col lg:justify-between">
                                    <div className="w-full mb-5 lg:w-5/12">
                                        <div className="flex flex-col">
                                            <div className="mb-5">
                                                <h2 className="text-[1.2em] font-normal lg:text-[1.5em] mb-5">Introduction</h2>
                                                <p className="text-[.8em] lg:text-[1em] font-normal text-[#777]">With ultralight, quality cotton canvas, the
                                                    JanSport Houston backpack is ideal for a life-
                                                    on-the-go. This backpack features premium faux
                                                    leather bottom and trim details, padded 15 in
                                                    laptop sleeve and tricot lined tablet sleeve</p>
                                            </div>
                                            <div>
                                                <h2 className="text-[1.2em] font-normal lg:text-[1.5em] mb-5">Features</h2>
                                                <ul className="list-disc">
                                                    <li className="text-[#777777] text-[.8em] font-normal lg:text-[1em] mb-2">Fully padded back panel, web hauded handle</li>
                                                    <li className="text-[#777777] text-[.8em] font-normal lg:text-[1em] mb-2">Internal padded sleeve fits 15″ laptop &
                                                        unique fabric application</li>
                                                    <li className="text-[#777777] text-[.8em] font-normal lg:text-[1em] mb-2">Internal tricot lined tablet sleeve</li>
                                                    <li className="text-[#777777] text-[.8em] font-normal lg:text-[1em] mb-2">One large main compartment and zippered</li>
                                                    <li className="text-[#777777] text-[.8em] font-normal lg:text-[1em] mb-2">Premium cotton canvas fabric</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-5/12">
                                        <div className="h-[460px] flex justify-end lg:h-[550px]">
                                            <img src={img} alt="" className="h-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="detailSlider">
                            <h2 className="text-[#222] text-center text-[1.875em] font-semibold mb-8">Related products</h2>
                            <div>
                                <ResponsiveSlick />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Detail