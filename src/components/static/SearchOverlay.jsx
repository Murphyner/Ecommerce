import { useEffect, useRef, useState } from "react"
import { useFilterProductQuery, useSearchProductQuery } from "../../store/api"
import Loading from "./Loading"
import SearchSlider from "../slider/SearchSlider"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

function SearchOverlay({ value }) {

    const searchRef = useRef()
    const [arr, setArr] = useState([])
    const [flag, setFlag] = useState(false)

    const { data, isLoading, isSuccess } = useSearchProductQuery(value)

    const { data: response, isLoading: load } = useFilterProductQuery({
        page: 1,
        limit: 10,
        sortBy: 'price',
        sortOrder: 'asc',
    })


    useEffect(() => {
        if (isSuccess && data.length > 0) {
            setArr(data)
            setFlag(true)
        }
        if (isSuccess && data.length === 0 && !load) {
            setArr(response.data)
            setFlag(false)
        }
    }, [isLoading, value, isSuccess])

    return (
        <div className={`fixed ${value.length >= 3 ? 'bg-white' : 'bg-[#000000b7]'} top-[77px] border-t border-black bottom-0 left-0 right-0 z-[600]`}>
            <div className={`container 2xl:w-[1280px] ${value.length >= 3 ? "" : 'hidden'} mx-auto md:px-4`}>
                <div className="py-10">
                    {isLoading ? <Loading /> : (
                        <div>
                            <div className={`${flag ? 'hidden' : ''} py-6`}>
                                <p className="text-center uppercase font-bold">no results found</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <h2 className="font-bold uppercase text-[1.5em]">
                                    {!flag ? 'Trending Now' : 'Results'}
                                </h2>
                                <div className="flex gap-2">
                                    <div>
                                        <button onClick={() => console.log(searchRef.current.slickPrev())}>
                                            <FaAngleLeft />
                                        </button>
                                    </div>
                                    <div>
                                        <button onClick={() => searchRef.current.slickNext()}>
                                            <FaAngleRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-10">
                                <SearchSlider arr={arr} ref={searchRef} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchOverlay