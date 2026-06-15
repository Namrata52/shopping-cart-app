import { useDispatch, useSelector } from "react-redux";
import { remove ,add} from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";
const Product = ({post}) => {

  const {cart} = useSelector((state) => state)
  const dispatch =useDispatch();

  const addtoCart = ()=>{
    dispatch(add(post));
    toast.success("Item add to cart")
  }

  const removefromCart =()=>{
    dispatch(remove(post.id));
    toast.success("Item removed from cart")
  }
  return ( 
  <div className="flex flex-col items-center border cursor-pointer border-slate-300  rounded-lg hover:scale-110 transition  
  duration-300 ease-in gap-3 p-4 mt-10 ml-5
  hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ">
    <div>
      <h2 className=" text-gray-700 font-semibold text-lg truncate w-40 
       mt-1 text-left">{post.title}</h2>
    </div>
    <div>
      <p className="text-gray-400 w-40 text-xs">{post.description.split(" ").slice(0,10).join(" ")  + "..."}</p>

    </div>
    {/* image div */}
    <div className="h-[180px] w-full flex justify-center items-center">
      <img className="h-full max-w-full object-contain " src={post.image} alt="product"/>
    </div>
    
    {/* price and button div */}
    <div className="flex justify-between gap-12 w-full mt-auto items-center">
        <div>
           <p className="text-green-600 font-bold">${post.price}</p>
        </div>
      <div>
      
        {
          cart.some((p)=> p.id === post.id)?(<button 
            className ="border-2 border-slate-900 rounded-full 
            font-semibold text-[12px] text-slate-900 p-1 px-3 
            uppercase hover:bg-slate-900 
            hover:text-slate-100 transition duration-300 ease-in" 
            onClick={removefromCart}>Remove Item</button>)
          :(<button 
            className ="border-2 border-slate-900 rounded-full 
            font-semibold text-[12px] text-slate-900 p-1 px-3 
            uppercase hover:bg-slate-900 
            hover:text-slate-100 transition duration-300 ease-in" 
            onClick={addtoCart}>Add to cart</button>)
        }
      
       </div>
    </div>
    
  </div>)
};

export default Product;
