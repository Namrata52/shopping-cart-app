import { TiShoppingCart } from "react-icons/ti";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return <div className=" bg-slate-900 text-white ">
    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto ">
      <NavLink to={"/"}>
        <div className="ml-5">
          <img src="../logo.png" className="h-14"/>
        </div>
      </NavLink>
      

      <div className="flex justify-evenly items-center font-medium text-slate-100">
        <NavLink to="/">
           <p className="px-4">Home</p>
        </NavLink>
        <NavLink to="/cart">
        <div className="relative">
          <TiShoppingCart size="1.3em" className="text-2xl"/>
          {
            cart.length>0 && <span className="absolute -top-1 -right-2 text-xs bg-green-600
            w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
          }
          
        </div>
          
        </NavLink>
        
      </div>
    </div>
  </div>;
};

export default Navbar;
