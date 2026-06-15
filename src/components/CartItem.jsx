import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  function removefromCart(){
    dispatch(remove(item.id))
    toast.success("item removed")
  }
  return <div>
    <div className=" flex flex-col items-center px-4 py-3 gap-10 border rounded-2xl cursor-pointer hover:shadow-lg shadow-slate-400 m-3 transition-shadow duration-300 ease-in">
      <div className="flex justify-between items-start gap-6">
        {/* image div */}
      <div className="h-[180px] w-full flex justify-center items-center">
        <img className="h-full max-w-full object-contain "  src={item.image} alt="product"/>
      </div>
     
      <div className="flex justify-between items-start gap-16">
          {/* title and description div */}
          <div className="flex flex-col items-center gap-3">
            <h2 className=" text-gray-700 font-semibold text-lg truncate w-40 
       mt-1 text-left">{item.title}</h2>
            <p className="text-gray-400 w-40 text-xs">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
          </div>
          {/* price and remove div */}
          <div className="flex justify-between items-center  gap-3">
            <p className="text-green-600 font-bold">${item.price}</p>
            <button onClick={removefromCart} className="flex items-center justify-center p-2 rounded-full
               bg-red-50 text-red-500 border border-red-200
               hover:bg-red-500 hover:text-white
               transition-all duration-200 shadow-sm" >
              <MdDelete />
            </button>
          </div>
      </div>
      
    </div>
      
    </div>

  </div>;
};

export default CartItem;
