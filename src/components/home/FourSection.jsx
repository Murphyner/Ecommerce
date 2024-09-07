import img from '../../assets/banner2.jfif'

function FourSection() {
    return (
        <section
            style={{
                backgroundImage: `url('${img}')`,
                backgroundPositionY: '20%'
            }}
            className='bg-cover bg-center bg-no-repeat w-full'
        >
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='sm:py-20 xl:py-32'>
                    <div className='flex justify-end h-[30vh] sm:h-auto items-center px-8 md:px-0'>
                        <div>
                            <h4 className='text-[0.625em] lg:mb-3 sm:text-[0.85em] md:text-[1.5em] mb-1 sm:mb-2 font-medium uppercase text-[#333333]'>
                                New Season New Style
                            </h4>
                            <h2 className='font-medium mb-1 lg:text-[2.5em] xl:text-[3.75em] lg:mb-3 sm:mb-2 text-[0.875em] md:text-[2em] sm:text-[1em]'>
                                40-80% off <br /> On Women's Apparel
                            </h2>
                            <button className='bg-[#DC375F] lg:px-8 lg:py-3 md:text-[1.1em] md:px-5 md:py-1 text-white py-[3px] px-[10px] text-[0.625em] sm:text-[0.75em] font-normal rounded-[25px]'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FourSection