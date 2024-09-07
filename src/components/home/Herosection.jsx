import bgImg from '../../assets/hero.png'

function Herosection() {
    return (
        <section
            id='heroSection'
            style={{
                backgroundImage: `url('${bgImg}')`,
                backgroundPositionY : '20%'
            }}
            className='bg-cover bg-center bg-no-repeat w-full'>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='flex px-8 py-10 sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] md:px-0'>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <div
                                style={{
                                    writingMode: "vertical-rl",
                                    textOrientation: "mixed"
                                }}
                                className='mr-2 md:mr-5 flex items-center' id='eyricumle'>
                                <div className='h-5 w-[1px] lg:h-8 xl:h-14 mb-3 bg-white'></div>
                                <p className='text-[0.625em] md:text-[0.75em] lg:text-[0.875em] xl:text-[1em] tracking-widest text-white'>
                                    Stylish shop
                                </p>
                            </div>
                            <div>
                                <h2 className='text-[1.625em]  md:text-[2.2em] lg:text-[3em] xl:text-[4em] leading-8 md:leading-10 lg:leading-[1.1em] text-white'>Women’s <br /> New <br /> Arrivals</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Herosection