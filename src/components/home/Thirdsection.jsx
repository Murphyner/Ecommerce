import { Link } from 'react-router-dom'
import { useAllCategoryQuery } from '../../store/api'
import Loading from '../static/Loading'
import { useDispatch } from 'react-redux'
import { setCategoryId } from '../../store/FilterSlice'
import pants from '../../assets/pants.png'
import blouse from '../../assets/blouse.png'
import coat from '../../assets/coat.png'
import dress from '../../assets/dress.png'
import tshirt from '../../assets/tshirt.png'
import underwear from '../../assets/underwear.png'

function Thirdsection() {
    const dispatch = useDispatch()
    const { data, isLoading } = useAllCategoryQuery()
    return (
        <section className='hidden lg:block pb-10'>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div>
                    <div className='mb-8'>
                        <h2 className='font-medium text-[1.5em] text-[#333333] mb-2 text-center'>CATEGORIES</h2>
                        <p className='text-[1em] font-normal text-center text-[#787878]'>Our campaigns, the latest trends and new collections</p>
                    </div>
                    <div className='flex items-center justify-around'>
                        {isLoading ? <Loading /> : (
                            data.map((item, index) => (
                                <div key={index}>
                                    <Link onClick={() => dispatch(setCategoryId(item.id))} to={`/products/${item.name}`} className="flex flex-col items-center justify-center">
                                        <div className='w-12 mb-3 h-12'>
                                            <img 
                                            src={
                                                index === 0 ? dress : 
                                                index === 1 ? coat :
                                                index === 2 ? pants : 
                                                index === 3 ? underwear : 
                                                index === 4 ? tshirt : 
                                                index === 5 ? blouse : ''
                                            } 
                                            className='w-full h-full' alt="" />
                                        </div>
                                        <p className='text-[0.859375em] font-medium capitalize text-[#333]'>{item.name}</p>
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Thirdsection