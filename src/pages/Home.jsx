import { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] =useState(false);
  const [post,setPost] =useState([])

  async function fetchProductData() {
    setLoading(true);
    try{
      const res= await fetch(API_URL);
      const data = await res.json();
      setPost(data);
      console.log(data);
    }
    catch(error){
      console.log("error in api");
      setPost([])
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return (
    <div>
      <div>
        {
          loading? (<p className="font-bold text-center">Loading</p>)
          :(post.length>0 ?
            (<div className="grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 
              space-x-5 min-h-[80vh]">{
            post.map((post)=>(
                <Product key={post.id} post ={post}/>
            ))
            }
              
            </div>) 

            : (<div className="flex justify-center items-center">
              <p>No data found</p>
            </div>))
        }
      </div>
    </div>
  );
};

export default Home;
