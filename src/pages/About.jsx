import img from '../assets/aboutBg.png'
import SevenSection from '../components/home/SevenSection'
import boyImg from '../assets/boyImg.png'
import girlImg from '../assets/girlImg.png'

function About() {
    return (
        <main>
            <section className='py-10'>
                <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                    <div className='px-8 md:px-0'>
                        <div className='mb-6 lg:mb-12'>
                            <h2 className='lg:text-[1.75em] text-[1.375em] mb-3 lg:mb-6 text-center font-medium'>Who We Are</h2>
                            <p className='text-[0.875em] lg:text-[1em] mb-3 lg:mb-6 text-[#777] font-light text-center'>Sed pretium, ligula sollicitudin laoreet viverra, tortor
                                libero sodales leo, eget blandit nunc tortor eu nibh.
                                Suspendisse potenti. Sed egestas, ante et vulputate
                                volutpat, uctus metus libero eu augue. Morbi purus
                                libero, faucibus adipiscing, commodo quis, gravida id,
                                est. Sed lectus. Praesent elementum hendrerit tortor.
                                Sed semper lorem at felis.</p>
                            <div className='flex justify-center'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={140}
                                    height={47}
                                    viewBox="0 0 140 47"
                                    fill="none"
                                >
                                    <rect
                                        width={140}
                                        height={46}
                                        transform="translate(0 0.189941)"
                                        fill="url(#pattern0_133_17792)"
                                    />
                                    <defs>
                                        <pattern
                                            id="pattern0_133_17792"
                                            patternContentUnits="objectBoundingBox"
                                            width={1}
                                            height={1}
                                        >
                                            <use
                                                xlinkHref="#image0_133_17792"
                                                transform="scale(0.00714286 0.0217391)"
                                            />
                                        </pattern>
                                        <image
                                            id="image0_133_17792"
                                            width={140}
                                            height={46}
                                            xlinkHref="data:image/png;base64,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"
                                        />
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <SevenSection />
            <section className='py-10'>
                <div className="px-8 md:px-0">
                    <div className='flex lg:px-10 xl:px-20 items-center justify-between'>
                        <div className='md:w-4/12 hidden md:block'>
                            <div>
                                <img src={boyImg} className='w-full scale-x-[-1] h-full' alt="" />
                            </div>
                        </div>
                        <div className='w-full md:w-4/12 flex justify-center'>
                            <div>
                                <h2 className='text-[1.375em] text-nowrap md:text-[1.75em] lg:text-[2.25em] text-[#333] font-medium text-center mb-5'>Subscribe To Our Newsletter</h2>
                                <p className='text-center text-[#333] text-[1em] font-normal mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                                <input
                                style={{
                                    boxShadow: '0px 13.28px 8.52px 0px #00000011'
                                }}
                                className='text-[#333] text-[1em] lg:text-[1em] mb-5 px-3 py-5 outline-none block w-full' type="email" placeholder='michael@ymail.com' />
                                <div className='flex justify-center'>
                                    <button className='rounded-xl flex justify-center items-center text-[1em] font-normal text-white lg:w-52 bg-[#DC375F] h-14 w-40'>Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-4/12 hidden md:block'>
                            <div>
                                <img src={girlImg} className='w-full h-full' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About