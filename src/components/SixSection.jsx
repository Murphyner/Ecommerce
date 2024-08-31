import React from 'react'
import ProductCard from './ProductCard'

function SixSection() {
    return (
        <section className='py-10 hidden lg:block'>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='px-8 md:px-0'>
                    <div className='flex flex-wrap'>
                        {Array.from({ length: 15 }).map((_, index) => (
                            <div key={index} className="px-3 w-4/12 xl:w-3/12">
                                <ProductCard x={index % 2 ? 4 : 5} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SixSection