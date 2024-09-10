import { IoClose } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { setAddProductFlag } from "../../../../store/ProductModalSlice"

function AddProductModal() {
    const dispatch = useDispatch()
    return (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-[999]">
            <div className="max-h-[90dvh] bg-gray-800 rounded-lg max-w-2xl w-full">
                <div className="p-5 flex items-center border-gray-700 border-b justify-between">
                    <h3 className="text-xl text-white font-semibold">Add product</h3>
                    <button onClick={() => dispatch(setAddProductFlag(false))} className="text-[1.5em] hover:bg-gray-700 text-gray-400 hover:text-white">
                        <IoClose />
                    </button>
                </div>
                <div></div>
                <div className="p-6 flex items-center border-gray-700 border-t">
                    <button className="text-center px-4 py-2 font-medium border border-transparent text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Add product</button>
                </div>
            </div>
        </div>
    )
}

export default AddProductModal