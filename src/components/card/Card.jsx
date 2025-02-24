import React from 'react'
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Card({id,title,image,price,description}) {
  const navigate=useNavigate()
  const handleClick=()=>{
   navigate(`/productdetail/${id}`)
  }
  return (
    <div
                key={id}
                className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer" onClick={()=>handleClick()}
                // onClick={()=>handleClick(id,image,title,price,description)}
              >   
                 <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-contain mb-4 rounded"
                />
                <p className="text-lg font-medium text-gray-700">{title}</p>
                <p className="text-xl font-semibold text-blue-600">${price.toFixed(2)}</p>
                 <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
  )
}

export default Card