import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletebtn } from '../../features/userSlice/userSlice';

function UserData() {
  const data = useSelector((state) => state.user.user);
  const dispatch=useDispatch()
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">User Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-3 px-6">User Name</th>
              <th className="py-3 px-6">User Email</th>
              <th className="py-3 px-6">User Password</th>
              <th className="py-3 px-6">Remove User</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-6">{item.names}</td>
                  <td className="py-2 px-6">{item.email}</td>
                  <td className="py-2 px-6">{item.password}</td>
                  <td className="py-2 px-6">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300" onClick={()=>dispatch(deletebtn(item.id))}>
                      DELETE
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-600">
                  No Data is Present
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default UserData;
