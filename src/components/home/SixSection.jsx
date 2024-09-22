import React from 'react'
import ProductCard from '../static/ProductCard'
import { useFilterProductQuery } from '../../store/api'
import Loading from '../static/Loading'

function SixSection() {
    const { data, isLoading, isFetching } = useFilterProductQuery({
        page: 1,
        limit: 20,
        sortBy: 'price',
        sortOrder: 'asc'
        // categoryId: categoryId ? categoryId : '',
        // brandId: brandId ? brandId : '',
        // color: filterColor.length > 0 ? filterColor : '', 
        // size: filterSize.length > 0 ? filterSize : '',  
        // minPrice: value[0],
        // maxPrice: value[1],
        // discount: discount ? discount : ''
    })

    if(isLoading){
        return <Loading />
    }

    return (
        <section className='py-10 hidden lg:block'>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='px-8 md:px-0'>
                    <div className='flex flex-wrap'>
                        {!isLoading && data.data.map((item, index) => (
                            <div key={index} className="px-3 w-3/12 xl:w-3/12">
                                <ProductCard item={item} x={index % 2 ? 4 : 5} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SixSection