import { Link, useNavigate, useParams } from "react-router-dom"
import DetailSlick from "../components/slider/DetailSlick"
import { FaFacebookF, FaHeart, FaPinterest, FaRegHeart, FaRegStar, FaStar, FaTwitter } from "react-icons/fa"
import { FiMinus, FiPlus } from "react-icons/fi"
import { CiHeart } from "react-icons/ci"
import ResponsiveSlick from "../components/slider/ResponsiveSlick"
import { useAddCartMutation, useFilterProductQuery, useGetProductByIdQuery } from "../store/api"
import { nanoid } from "@reduxjs/toolkit"
import ColorComp from "../components/static/ColorComp"
import { useEffect, useState } from "react"
import SizeComp from "../components/static/SizeComp"
import Loading from "../components/static/Loading"
import { useDispatch, useSelector } from "react-redux"
import { setBasketFlag } from "../store/BasketSlice"
import { toast, ToastContainer } from "react-toastify"
import { setWishArr } from "../store/WishlistSlice"

function Detail() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const { data, isLoading } = useGetProductByIdQuery(id)

    const { wishArr } = useSelector(state => state.WishlistSlice)

    const isInWishList = wishArr.some(wishItem => +wishItem.id === +id); 

    const [screen, setScreen] = useState(isInWishList); 

    const { data: arr, isLoading: load } = useFilterProductQuery({
        page: 1,
        limit: 20,
        sortBy: 'price',
        sortOrder: 'csa'
    })

    const [count, setCount] = useState(1)
    const [color, setcolor] = useState('')
    const [size, setSize] = useState('')

    const [flag, setFlag] = useState(-1)
    const [sizeFlag, setSizeFlag] = useState(-1)

    const token = localStorage.getItem("token")

    const [addCart, { isSuccess, isError }] = useAddCartMutation()


    function handleChange(x) {
        if (count === 1 && x === -1) {
            return
        } else {
            setCount(count + x)
        }
    }

    const { basketFlag } = useSelector((state) => state.BasketSlice)

    function handleAdd() {
        if (token) {
            if (color.length > 0 && size.length > 0) {
                let obj = {
                    productId: Number(id),
                    count: count,
                    color: color.toUpperCase(),
                    size: size.toUpperCase()
                }
                addCart(obj)
            } else {
                toast.info("Please select a size or color", {
                    autoClose: 900
                })
            }

        } else {
            navigate('/account')
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Added to cart", {
                autoClose: 1000
            })
            dispatch(setBasketFlag(!basketFlag))
        }
    }, [isSuccess, isError])

    useEffect(() => {
        setScreen(isInWishList); 
    }, [isInWishList]);

    function handleAddWish() {
        if (!token) {
            toast.error("Please register")
            return;
        }
        dispatch(setWishArr(data)); 
        setScreen(!screen)
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <main className="overflow-hidden">
            <ToastContainer />
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
                            <div className="w-7/12 mx-auto lg:mb-0 lg:w-5/12 lg:pr-10 mb-14">
                                <DetailSlick price={data.price} dis={data.discount} img={data.images} />
                            </div>
                            <div className="w-full lg:pl-3 lg:mb-0 lg:w-6/12 mb-4">
                                <div>
                                    <div className='flex items-center mb-2 xl:mb-4'>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            index < 4 ? <FaStar key={index} className='text-yellow-500' /> : <FaRegStar key={index} />
                                        ))}
                                    </div>
                                    <div className="mb-3">
                                        <h2 className="text-[1.875em] font-bold text-[#222]">{data.name}</h2>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-[0.75em] text-[#BBBBBB] font-normal">SKU: AB1609456789</p>
                                    </div>
                                    <div className="mb-3 flex gap-1 items-center">
                                        <span className={`${data.discount ? 'text-[#777] text-[1em] line-through' : 'text-[#DC375F] text-[1.5em]'}`}>${data.price}</span>
                                        <span className={`text-[#DC375F] ${data.discount ? '' : 'hidden'} text-[1.5em]`}>${(data.price - data.discount).toFixed(2)}</span>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-[#B9BBBF] font-medium">Choose a Color</p>
                                        <div className="flex flex-wrap gap-2 py-3">
                                            {data.Colors.map((item, i) => (
                                                <ColorComp setcolor={setcolor} key={nanoid()} i={i} flag={flag} setFlag={setFlag} item={item} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-[#B9BBBF] font-medium">Choose a Size</p>
                                        <div className="flex flex-wrap gap-2 py-3">
                                            {data.Size.map((item, i) => (
                                                <SizeComp setSize={setSize} key={nanoid()} sizeFlag={sizeFlag} setSizeFlag={setSizeFlag} i={i} item={item} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex pb-10 border-b border-[#EAEAEA] flex-wrap">
                                        <div className="w-6/12 lg:w-4/12 pr-2 mb-3">
                                            <div className="flex items-center justify-between px-2 border rounded-sm border-[#EAEAEA] lg:py-3 py-2">
                                                <button onClick={() => handleChange(-1)}>
                                                    <FiMinus />
                                                </button>
                                                <span className="text-[0.875em]">{count}</span>
                                                <button onClick={() => handleChange(1)}>
                                                    <FiPlus />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-6/12 lg:px-2 pl-2 mb-3">
                                            <button
                                                onClick={handleAdd}
                                                className="bg-[#222222] lg:py-3 font-medium text-white rounded-sm py-2 block w-full">
                                                Add to cart
                                            </button>
                                        </div>
                                        <div className="w-full lg:w-2/12 lg:pl-2 mb-3">
                                            <button onClick={handleAddWish} className="w-full text-[#999] rounded-sm border lg:py-3 border-[#EAEAEA] gap-2 py-2 flex justify-center items-center">
                                                {!screen ? <FaRegHeart /> :
                                                    <FaHeart className={`text-red-600`} />}
                                                <span className="lg:hidden">
                                                    {!screen ? "Add to wishlist" :
                                                        "Remove to wishlist"}
                                                </span>
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
                                            <li className="text-[0.9375em] text-[#999] capitalize mb-2"><span className="text-[0.875em] text-[#222] mr-1 uppercase font-bold">Brand:</span>{data.Brands.name}</li>
                                            <li className="text-[0.9375em] text-[#999] capitalize mb-2"><span className="text-[0.875em] text-[#222] mr-1 uppercase font-bold">Category:</span>{data.category.name}</li>
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
                        <div className="pt-10">
                            <div className="py-20">
                                <div className="flex lg:flex-row flex-col lg:justify-between">
                                    <div className="w-full mb-5 lg:w-5/12">
                                        <div className="flex flex-col">
                                            <div className="mb-5">
                                                <h2 className="text-[1.2em] font-normal lg:text-[1.5em] mb-5">Introduction</h2>
                                                <p className="text-[.8em] lg:text-[1em] font-normal text-[#777]">{data.description}</p>
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
                                            <img src={data.images[1]} alt="" className="h-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="detailSlider">
                            <h2 className="text-[#222] text-center text-[1.875em] font-semibold mb-8">Related products</h2>
                            <div>
                                {!load && <ResponsiveSlick arr={arr.data} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Detail