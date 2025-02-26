import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFunc,increment,decrement } from "../../features/cartSlice/cartSlice";
import { viewBasket } from "../../apis/viewbasket";
import { getTokenFromLocal } from "../../utils";
import { deleteCart } from "../../apis/deletecartapi";
import EnhancedTable from "../../commoncomponents/table/TableComponent";
function CartDetail() {
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)
  let limit=5;
  // const selectItems = useSelector((state) => state.cart.datas);
const dispatch=useDispatch()
 const fetchData=async()=>{
  const token=getTokenFromLocal();
  try {
    const response=await viewBasket(token,page,limit);
    console.log('response of api',response);
    if(response?.cart){
      setData(response.cart.items)
      setTotalItems(response.cart.totalItems)
    }
    
    return response.cart.items
  } catch (error) {
    console.log('Failed to Get Data');
  }
 }
//  const handleDelete=async(id)=>{
//   const token=getTokenFromLocal()
// try {
//   await deleteCart(id,token)
//   alert('Data Deleted Successfully')
//  const response=await viewBasket(token,page,5)
//  if (response.cart.items.length === 0 && page > 1) {
//   setPage(page - 1); // Go back to the previous page if no items are left
// } else {
//   setData(response.cart.items);
// }
//     // console.log('agin check backend response',updatedBasket.response.items)
//     // dispatch(deleteFunc(id))
//     // setData((prevData) => prevData.filter((item) => item._id !== id));
//     // alert('Data Deleted Successfully')

// } catch (error) {
//   console.log('Failed to delete Product'); 
// }
//  }
 useEffect(()=>{
 fetchData();
 },[page])
  return (
    <>
    <EnhancedTable/>
     {/* <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shopping Cart</h2>
      {data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                <th className="p-4 border">Image</th>
                <th className="p-4 border">Title</th>
                <th className="p-4 border">Price</th>
                <th className="p-4 border">Total</th>
                <th className="p-4 border">Quantity</th>
                <th className="p-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
            {data.map((item) => {
  if (!item.productId) return null;
  return (
    <tr key={item._id} className="text-center border-b hover:bg-gray-100">
      <td className="p-4 border">
        <img
          src={item.productId.image}
          alt={item.productId.title}
          className="w-16 h-16 object-cover mx-auto rounded"
        />
      </td>
      <td className="p-4 border font-semibold">{item.productId.title}</td>
      <td className="p-4 border text-green-600 font-semibold">${item.productId.price}</td>
      <td className="p-4 border text-blue-600 font-semibold">
        ${(item.productId.price * item.quantity).toFixed(2)}
      </td>
      <td className="p-4 border flex justify-center items-center gap-3">
        <button
          className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
          onClick={() => dispatch(decrement(item._id))}
        >
          -
        </button>
        <span className="text-lg font-semibold">{item.quantity}</span>
        <button
          className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
          onClick={() => dispatch(increment(item._id))}
        >
          +
        </button>
      </td>
      <td className="p-4 border">
        <button
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          onClick={() => handleDelete(item._id)}
        >
          DELETE
        </button>
      </td>
    </tr>
  );
})}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600 mt-6">Your cart is empty.</p>
      )}
    </div>
    <div className="flex justify-end me-[120px] gap-4 items-center">
      <button className={`bg-blue-600 text-white px-4 py-2 rounded ${page===1?'cursor-not-allowed opacity-50':'cursor-pointer'}`} disabled={page===1}>Pre</button>
      <p className="font-bold text-2xl" >{page}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" >Next</button>

    </div>
   <div className="flex justify-end mt-4 me-[120px]">
  <button className="bg-red-600 text-white px-4 py-2 rounded">
    Subtotal: $
    {data.reduce((accumulator, item) => accumulator + item.quantity * item.productId.price, 0).toFixed(2)}
  </button>
</div> */}

    </>
  );
}

export default CartDetail;
