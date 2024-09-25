import { nanoid } from '@reduxjs/toolkit'
import img from '../assets/productbg.jfif'
import ProductCard from '../components/static/ProductCard'
import FilterSide from '../components/filter/FilterSide'
import { useEffect, useState } from 'react'
import FilterComp from '../components/filter/FilterComp'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/static/Loading'
import { Pagination } from '@mui/material'
import { setPage } from '../store/FilterSlice'
import { useAllProductQuery } from '../store/api'

function Products() {
    const [flag, setFlag] = useState(false)
    const flagScheme = { flag, setFlag }

    const dispatch = useDispatch()

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    const { filterData, load, opacity,totalProduct, page } = useSelector(state => state.FilterSlice)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    useEffect(() => {
        if (!isMobile) {
            setFlag(false)
        }
    }, [isMobile])

    return (
        <main>
            <FilterSide flagScheme={flagScheme} />
            <section
                style={{
                    backgroundImage: `url('${img}')`
                }}
                className='bg-cover bg-center py-20 lg:py-32'
            >
                <div className='flex justify-center'>
                    <h2 className='text-[1.5em] text-white font-bold text-center md:text-[2em] lg:text-[3em] xl:text-[4.375em] uppercase'>Products Categories</h2>
                </div>
            </section>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='px-8 md:px-0'>
                    <div className='py-10'>
                        <div className='border-t md:hidden border-b border-[#E8ECEF] py-2'>
                            <button onClick={() => setFlag(true)} className='flex items-center w-full gap-3'>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21"
                                            stroke="#FE5196"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                <span className='font-medium text-[1em]'>
                                    Filtrele
                                </span>
                            </button>
                        </div>
                        <div className='pt-10 flex flex-wrap items-start'>
                            <div className='hidden relative md:block md:w-3/12'>
                                <div className={`${opacity ? 'opacity-[0.5]' : 'opacity-[1]'}`}>
                                    <h2 className='font-medium mb-4 text-[2.2em]'>Filter</h2>
                                    <FilterComp />
                                </div>
                            </div>
                            <div className='flex flex-col w-full md:w-9/12 md:pl-4'>
                                {load ? <Loading /> : (
                                    <div className='flex w-full flex-wrap'>
                                        {filterData.map((item, index) => (
                                            <div key={nanoid()} className='w-6/12 lg:w-4/12 px-5'>
                                                <ProductCard item={item} x={index % 2 ? 2 : 3} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className='flex justify-center w-full my-4'>
                                    <Pagination page={page} onChange={(event, value) => dispatch(setPage(value))} count={Math.ceil(totalProduct / 9)} />
                                </div>
                            </div>
                        </div>
                        <div className='py-10 border-t border-b border-[#CBCBCB]'>
                            <div className='mb-6'>
                                <h2 className='mb-4 text-[1.25em] text-[#333] font-medium'>New products for women at reasonable prices in Logo!</h2>
                                <p className='leading-[1.5em] text-[#333] lg:text-[1em] text-[1.125em] font-normal'>It is possible to have a stylish and eye-catching style thanks to the manufactured clothing pieces. Women's dress models stand out with their stylish designs. Dress types designed in trendy colors of the season offer different combination options. Simple, floral, long, mini, multicolored, ruffled, buttoned, chiffon and knitted designs are signed. A separate product group is created under the heading of women's hijab dresses. It is aimed at the audience that wants to dress to size. Hijab dress models form a wide range. The prepared pieces are easily used in different combinations. Hijab dress models are a regular choice whenever you want to look stylish. Heeled shoes are preferred for classic clothing style. Those who don't want to compromise on comfort choose sports shoes. Women's jeans models include high waist, wide leg, slit, light blue, button detail and cargo pocket. These pieces combined with sports shoes in summer can be preferred with women's boots in winter. You can easily create your summer and winter style with women's sports shoes.</p>
                            </div>
                            <div className='mb-6'>
                                <h2 className='mb-4 text-[1.25em] text-[#333] font-medium'>Stylish and High Quality Women's Sweater Models</h2>
                                <p className='leading-[1.5em] text-[#333] lg:text-[1em] text-[1.125em] font-normal'>The women's sweatshirt model is stylish and comfortable and completes all season outfits. The products feature hooded, zippered, knitted, tear-resistant, digital zippered models with bicycle collar, stand-up collar, and high collar designs. You can complement your classic and sports style with women's sweater models. Outerwear pieces are combined with women's pants designs. The combinations made vary according to the seasons. Women's t-shirts, which are important parts of the summer collection, are tops with V-neck, bicycle collar, round neck and stand-up collar models. In addition to the existing simple and colorful lines, it is also grouped as separation from boyfriend, non-tearable, marriage, mother-daughter combination, separation with detail and sleeveless. Wide cut, boyfriend, running t-shirts, patterned and sporty models are preferred for daily wear. Fabrics purchased for use on special occasions are combined with women's jacket options. You can use jackets as a complement to women's blouse models. If you wish, you can choose one of the types of women's shirts and catch a classic look.</p>
                            </div>
                            <div className='mb-6'>
                                <h2 className='mb-4 text-[1.25em] text-[#333] font-medium'>Eye-catching Women's Watch Options</h2>
                                <p className='leading-[1.5em] text-[#333] lg:text-[1em] text-[1.125em] font-normal'>Women's watch models of clothing items vary according to strap material, strap color, case color, case print, case material, water resistance and dial shape. The types of women's necklaces are among the accessories that make outfits look stylish. Bijouterie, silver, steel, gold, pearl and diamond models complement the combinations made for both everyday and special occasions. You can also use women's bag models with an impressive design to match your outfits. Depending on the place of use, you can find many different models with color options, from shoulder bags to handbags, backpacks and sports bags. Women's sunglasses are a must-have for the summer months. The products help protect against the harmful effects of sun damage. Model options are combined with cam color, frame formula, frame color, material, frame type, cam type and price. You can buy both accessories and women's clothing by taking advantage of Trendyol discounts.</p>
                            </div>
                            <div className='mb-6'>
                                <h2 className='mb-4 text-[1.25em] text-[#333] font-medium'>Popular Plus Size Women's Products</h2>
                                <p className='leading-[1.5em] text-[#333] lg:text-[1em] text-[1.125em] font-normal'>Large size women's clothing includes different types of products. From dresses to skirts, from blouses to t-shirts, there are many different alternatives. Featured women's cardigan models act as a savior for the winter months. The brand's product range includes zippered, pocket-detailed, seasonal, knitted, patterned, colorful and simple fabrics. The range of women's coats is complete with quilted, stone-detailed, fur-lined, draped, belted, and buttoned crotch-knitted models in winter. Women's coat models have waterproof and windproof properties suitable for seasons. The trench coat design is usually purchased for use in seasonal transitions. In addition to outerwear, homewear is also followed with interest. Women's pajama set comes to the fore with polka dot, frilly, lace embroidered, buttoned, and separate models. During the production stage, different fabric and mold choices are made. The common features of the products is the comfort they have. Women's nightgowns are popular with their comfortable fabric structure and stylish design. In addition to simple relationships, models with frills, embroidery, embroidery can also be preferred.</p>
                            </div>
                            <div className='mb-6'>
                                <h2 className='mb-4 text-[1.25em] text-[#333] font-medium'>Women's Shoe Models Adding Style to Combinations</h2>
                                <p className='leading-[1.5em] text-[#333] lg:text-[1em] text-[1.125em] font-normal'>The item represented by the clothes varies according to the location. People who integrate sports can do their morning jogging with light and comfortable women's running shoes. Women's tracksuit attracts attention with high-waist, elasticated, combed, summer, seasonal, wide leg, large size and pocket detailed designs. Tracksuits, women's shoes models</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products