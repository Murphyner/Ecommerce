import { FaCheck } from 'react-icons/fa'

function ColorComp({ item, flag, i, setFlag, setcolor }) {
    let color = item.toLowerCase();
    const borderColor = flag === i ? `border-${color}-500` : 'border-white';
    const bgColor = `bg-${color}-500`;

    function chooseColor(){
        setFlag(i)
        setcolor(color)
    }

    return (
        <div
            onClick={chooseColor}
            className={`p-1 ${borderColor} shadow-md cursor-pointer border-[3px] rounded-[50%]`}>
            <span className={`flex justify-center items-center text-white w-8 h-8 rounded-[50%] ${bgColor}`}>
                {flag === i ? <FaCheck className='text-[#f1f1f1]' /> : ''}
            </span>
        </div>
    );
}

export default ColorComp;
