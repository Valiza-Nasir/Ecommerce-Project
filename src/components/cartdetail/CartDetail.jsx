import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFunc,increment,decrement } from "../../features/cartSlice/cartSlice";

function CartDetail() {
   const [page,setPage] =useState(1)
  const selectItems = useSelector((state) => state.cart.datas);
  let limit=5;
  let totalPages=Math.ceil(selectItems.length/5);
  console.log('total pages',totalPages);
  let paginatedItems=selectItems.slice((page-1)*limit,page*limit)
  console.log('paginateditems',paginatedItems);  
const dispatch=useDispatch()
 const handlePrevious=()=>{
 if(page>1){
  setPage(page-1)
 }
 }
 const handleNext=()=>{
  setPage(page+1)
 }


  return (
    <>
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shopping Cart</h2>
      {selectItems.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Total</th>
                <th className="p-3 border">-</th>
                <th className="p-3 border">Quantity</th>
                <th className="p-3 border">+</th>
                <th className="p-3 border">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {selectItems.map((item) => (
                <tr key={item.id} className="text-center border-b hover:bg-gray-100">
                  <td className="p-3 border">{item.id}</td>
                  <td className="p-3 border">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mx-auto" />
                  </td>
                  <td className="p-3 border">{item.title}</td>
                  <td className="p-3 border text-green-600 font-semibold">${item.price}</td>
                  <td className="p-3 border text-blue-600 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                 
                  <td className="p-3 border">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition" onClick={()=>dispatch(decrement(item.id))}>
                      -
                    </button>
                  </td>
                  <td className="p-3 border">{item.quantity}</td>

                  <td className="p-3 border">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition" onClick={()=>dispatch(increment(item.id))}>
                      +
                    </button>
                  </td>
                  <td className="p-3 border">
                    <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition" onClick={()=>dispatch(deleteFunc(item.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600 mt-6">Your cart is empty.</p>
      )}
    </div>
    <div className="flex justify-end p-6 me-16 gap-5 items-center">
  <button 
    className={`px-2 py-2 text-white transition 
      ${page === 1 ? "bg-gray-900 cursor-not-allowed opacity-50" : "bg-black hover:bg-gray-800"}`} 
    onClick={handlePrevious} 
    disabled={page === 1}
  >Previous</button>
  <p className="text-2xl font-bold">{page}</p>
 <button 
    className={`px-2 py-2 text-white transition 
      ${page === totalPages ? "bg-gray-900 cursor-not-allowed opacity-50" : "bg-black hover:bg-gray-800"}`} 
    onClick={handleNext} 
    disabled={page === totalPages}
  >Next
  </button>
</div>

    <div className="flex justify-end p-6 me-16">
      <button className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition">SubTotal : ${selectItems && selectItems.reduce((accumulator,value)=>accumulator+value.quantity*value.price,0).toFixed(3)}</button>
    </div>
    </>
  );
}

export default CartDetail;
