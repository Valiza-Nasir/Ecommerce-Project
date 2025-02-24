import React, { useEffect, useState } from "react";
import { NavLink,useParams } from "react-router-dom";
import CustomButton from "../../../commoncomponents/addtocartbtn/CartBtn";
import { getProductData } from "../../../apis/productdetail";
function ProductDetail() {
  const[data,setData]=useState(null)
  const { id } = useParams();
  const fethcfunction=async()=>{
 try {
  const response=await getProductData(id);
  setData(response.data)
  return response;
 } catch (error) {
  
 }
  }
  console.log('data',data);
  
  useEffect(()=>{
    fethcfunction()
  },[])
  return (
    <>
    {data ? <div>
      <div className="max-w-5xl mx-auto p-6">
      {data.image ? (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src={`https://ecommerce-backend-3u6d.vercel.app/${data.image}`}
              alt={data.title}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
            <p className="text-2xl text-blue-600 font-semibold mt-4">${data.price}</p>
            <p className="text-gray-600 mt-2">
            {data.description}
            </p>
            <div className="mt-6 flex gap-4">
              <CustomButton title={'Add to Cart'} onClick={() => {
              // handleClick();
              //  dispatch(addCart());
              //  dispatch(productData({ id, image, price, title }));
              }}/>
              <NavLink>
              <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition">
                Buy Now
              </button>
              </NavLink>   
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">Product Not Found</p>
      )}
    </div>
    </div>:<p>Loading...</p>}
    </>
   
  );
}

export default ProductDetail;
