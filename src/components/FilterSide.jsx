import { MdOutlineClose } from 'react-icons/md'
import FilterComp from './FilterComp'

function FilterSide({ flagScheme }) {
    const { flag, setFlag } = flagScheme
    return (
        <div className={`${flag ? 'translate-x-[0]' : 'translate-x-[-300%]'} duration-300 md:hidden bg-white overflow-y-auto fixed inset-0 z-[900]`}>
            <div className='py-8 px-5'>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-medium text-[1.2em]'>Filter</h2>
                    <button onClick={() => setFlag(false)} className='text-[1.2em] text-[#777]'>
                        <MdOutlineClose />
                    </button>
                </div>
                <FilterComp />
            </div>
        </div>
    )
}

export default FilterSide