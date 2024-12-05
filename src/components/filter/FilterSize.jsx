function FilterSize({ item, setFilterSize, filterSize }) {
    const isSelected = filterSize.includes(item);

    function changeColor() {
        if (!isSelected) {
            setFilterSize(prevFilterSize => [...prevFilterSize, item]);
        } else {
            setFilterSize(prevFilterSize => prevFilterSize.filter((element) => element !== item));
        }
    }

    return (
        <div 
        className='flex mb-2 items-center gap-2'>
            <input
            onChange={changeColor}
            checked={isSelected}
            type="checkbox" className='cursor-pointer' />
            <span className='font-medium text-[.825em] lg:text-[.925em] text-[#999999] capitalize'>
                {item}
            </span>
        </div>
    )
}

export default FilterSize