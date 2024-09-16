import React from 'react'
import ProductCard from '../static/ProductCard'
import { useAllProductQuery } from '../../store/api'

function SixSection() {
    const {data , isLoading} = useAllProductQuery()

    if(isLoading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-600"></div>
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