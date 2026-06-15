import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} =useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState();
  
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, cur) => acc+cur.price,0));
  },[cart])

  return( 
    <div className="max-w-6xl mx-auto px-4 py-8">
  
      {
        (cart.length >0) ? 
          (<div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - Products */}
            <div className="w-full lg:w-[68%] space-y-4">
            {
              cart.map((item,index) =>{
                return <CartItem key={index} item={item} itemIndex ={index}/>
              })
            }
          </div>
            <div className="w-full lg:w-[32%]">
              <div className="sticky top-24 border rounded-xl shadow-md p-6 bg-white">
                <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                <p className="text-gray-500 mt-1 mb-6">
                  Summary
                </p>
                
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Total Items</span>
                  <span className="font-semibold">{cart.length}</span>
                </div>

                <div className="flex justify-between py-4">
                  <span className="text-lg font-medium">
                    Total Amount
                  </span>

                  <span className="text-2xl font-bold text-green-600">
                    ${totalAmount}
                  </span>
                </div>
                <button className="w-full mt-4 bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg font-semibold">
                  Checkout Now
                </button>

              </div>
            </div>

          </div>
        
      ): 
        (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
              <h2 className="text-3xl font-bold text-gray-700">Cart Empty</h2>
            <Link to={"/"}>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"> Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
