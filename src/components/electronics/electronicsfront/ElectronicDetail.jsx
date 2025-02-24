import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { addCart,productData } from "../../../features/cartSlice/cartSlice";
import CustomButton from "../../../commoncomponents/addtocartbtn/CartBtn";
function ElectronicDetail() {
  const location = useLocation();
  const { id, image, title, price } = location.state || {};
  const dispatch=useDispatch()

  return (
    <div className="max-w-5xl mx-auto p-6">
      {image ? (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <p className="text-2xl text-blue-600 font-semibold mt-4">${price}</p>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada ultricies libero, non pharetra purus.
            </p>
            <div className="mt-6 flex gap-4">
            <CustomButton title={'Add to Cart'} onClick={() => {
               dispatch(addCart());
               dispatch(productData({ id, image, price, title }));
              }}/>
              <NavLink to='/login'>
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
  );
}

export default ElectronicDetail;
