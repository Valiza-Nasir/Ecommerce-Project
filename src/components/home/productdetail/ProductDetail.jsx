import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import CustomButton from "../../../commoncomponents/addtocartbtn/CartBtn";
import { getProductData } from "../../../apis/productdetail";
import { addCart } from "../../../apis/addtocartapi";
import { useDispatch } from "react-redux";
import { productData } from "../../../features/cartSlice/cartSlice";
import { getTokenFromLocal } from "../../../utils";

function ProductDetail() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchFunction = async () => {
    try {
      const response = await getProductData(id);
      setData(response.data);
      return response;
    } catch (error) {
      console.error("Failed to fetch Data");
    }
  };
  const handleClick = async () => {
    if (data) {
      try {
        const cartItems = { productId: data._id, quantity: 1 };
        console.log("item", cartItems);
        const token = getTokenFromLocal();
        console.log("tokens0", token);
        await addCart(cartItems, token);
        dispatch(productData(data));
      } catch (error) {
        console.error("Failed to add Product to Cart");
      }
    }
  };

  useEffect(() => {
    fetchFunction();
  }, []);

  return (
    <>
      {data ? (
        <div className="max-w-5xl mx-auto p-6">
          {data.image ? (
            <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
              {/* Product Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={`https://ecommerce-backend-3u6d.vercel.app/${data.image}`}
                  alt={data.title}
                  className="w-full h-96 object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
                <p className="text-2xl text-blue-600 font-semibold mt-3">${data.price}</p>
                <p className="text-gray-600 mt-2 leading-relaxed">{data.description}</p>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  <CustomButton title="Add to Cart" onClick={handleClick} />
                  <NavLink to="/checkout">
                    <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-md">
                      Buy Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div> 
          ) : (
            <p className="text-center text-gray-600">Loading...</p>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading product details...</p>
      )}
    </>
  );
}

export default ProductDetail;   
