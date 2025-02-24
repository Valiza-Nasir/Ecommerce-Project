import React, { useEffect, useState } from "react";
import { categoryData } from "../../../apis/const";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

function WomenFront() {
  const [data, setData] = useState([]);
  const navigate=useNavigate()
  const fetchData = async () => {
    try {
      const response = await categoryData("women's clothing");
      console.log("Fetched Data:", response);
      setData(response);
    } catch (error) {
      console.log("Error fetching category data:", error);
    }
  };
  const handleClick=(id,image,title,price)=>{
    navigate(`/womendetail/${id}`,{
      state:{id,image,title,price}
    })
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer"  onClick={()=>handleClick(item.id,item.image,item.title,item.price)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description.substring(0, 60)}...</p>
              <p className="text-xl font-semibold text-blue-600 mt-2">${item.price}</p>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      )}
    </div>
  );
}

export default WomenFront;
