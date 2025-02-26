import React, { useState, useEffect, useMemo } from 'react';
import { viewBasket } from '../../apis/viewbasket';
import { getTokenFromLocal } from '../../utils';
import { deleteCart } from '../../apis/deletecartapi';
import { increment,decrement } from '../../features/cartSlice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify'
export default function ProductTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const dispatch=useDispatch()
  const handleDelete=async(id)=>{
    const token=getTokenFromLocal()
    try {
      await deleteCart(id,token);
      toast.success('Data Deleted successfully')  
      const response = await viewBasket(token);
      setRows(response.items || []);
    } catch (error) {
     console.log('Failed to Delete Products');  
    }
  }
    const fetchData = async () => {
      const token = getTokenFromLocal();
      try {
        const response = await viewBasket(token);
        setRows(response.items || []);
      } catch (error) {
        console.error('FAILED TO LOAD DATA', error);
      }
    };
    
  useEffect(()=>{
  fetchData();
  },[])
  const handlePageChange = (direction) => {
    if (direction === 'next' && (page + 1) * rowsPerPage < rows.length) {
      setPage(page + 1);
    }
    if (direction === 'prev' && page > 0) {
      setPage(page - 1);
    }
  };

  const visibleRows = useMemo(() => {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [rows, page, rowsPerPage]);

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Your Cart</h2>

      <table className="w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 text-gray-600">PRODUCT IMAGE</th>
            <th className="p-3 text-gray-600">TITLE</th>
            <th className="p-3 text-gray-600">PRICE</th>
            <th className="p-3 text-gray-600">QUANTITY</th>
            <th className="p-3 text-gray-600">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((value) => (
            <tr key={value.product._id} className="border-t hover:bg-gray-50">
              <td className="p-3">
                <img src={value.product.image} alt={value.product.title} className="w-16 h-16 object-cover rounded-md" />
              </td>
              <td className="p-3 text-gray-800">{value.product.title}</td>
              <td className="p-3 text-gray-800">${value.product.price}</td>
              <td className="p-3">
  <div className="flex items-center space-x-2">
    <button
      className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
      onClick={() => dispatch(decrement(value.product._id))}
    >
      -
    </button>
    <span className="px-3 text-gray-800">{value.quantity}</span>
    <button
      className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
      onClick={() => dispatch(increment(value.product._id))}
    >
      +
    </button>
  </div>
</td>
              <td className="p-3">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={()=>handleDelete(value.product._id)}>DELETE</button>
                <ToastContainer position='top-right' autoClose={3000} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-6">
     <button className="bg-green-500 text-white px-6 py-2 rounded-md text-lg font-semibold">
    Subtotal: ${rows.reduce((accu, value) => accu + (value.product.price || 0) * (value.quantity || 1), 0).toFixed(2)}
  </button>
</div>


      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <span>
          Showing {page * rowsPerPage + 1}–
          {Math.min((page + 1) * rowsPerPage, rows.length)} of {rows.length} items
        </span>

        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Rows per page:</span>
          <span className="text-gray-800 font-medium">{rowsPerPage}</span>
        </div>
      </div>

      {/* Pagination Controls - Centered */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={page === 0}
          className={`px-3 py-1 text-lg font-bold rounded ${page === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:text-black'}`}
        >
          &lt;
        </button>

        <span className="text-gray-800 text-lg font-semibold">
          Page {page + 1}
        </span>

        <button
          onClick={() => handlePageChange('next')}
          disabled={(page + 1) * rowsPerPage >= rows.length}
          className={`px-3 py-1 text-lg font-bold rounded ${(page + 1) * rowsPerPage >= rows.length ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:text-black'}`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
