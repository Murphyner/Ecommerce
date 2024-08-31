import BasketCupon from './BasketCupon'
import BasketSummary from './BasketSummary'
import MobileBasketList from './MobileBasketList'

function BasketMobile() {
    return (
        <div className='pt-6'>
            <h4 className='font-semibold text-[1em] text-[#121212] border-b border-[#6C7275] pb-3'>Product</h4>
            <div>
                <div className='mb-2'>
                    <MobileBasketList />
                </div>
                <div className='mb-2'>
                    <BasketCupon />
                </div>
                <div className='pt-5'>
                    <BasketSummary />
                </div>
            </div>
        </div>
    )
}

export default BasketMobile