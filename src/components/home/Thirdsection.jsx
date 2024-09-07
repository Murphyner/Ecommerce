import { Link } from 'react-router-dom'
import img from '../../assets/category.png'

function Thirdsection() {
    return (
        <section className='hidden lg:block pb-10'>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div>
                    <div className='mb-8'>
                        <h2 className='font-medium text-[1.5em] text-[#333333] mb-2 text-center'>CATEGORIES</h2>
                        <p className='text-[1em] font-normal text-center text-[#787878]'>Our campaigns, the latest trends and new collections</p>
                    </div>
                    <div className='flex items-center justify-around'>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index}>
                                <Link to={'/'} className="flex flex-col items-center justify-center">
                                    <div className='w-12 mb-3 h-12'>
                                        <img src={img} className='w-full h-full' alt="" />
                                    </div>
                                    <p className='text-[0.859375em] font-normal text-[#333]'>Salam</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Thirdsection