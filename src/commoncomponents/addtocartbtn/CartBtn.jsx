import React from 'react'
function CustomButton({title,onClick}) {
  return (
   <>
    <button className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition" onClick={onClick}>{title}</button>

   </>
  )
}

export default CustomButton






// <div className="mt-6 flex gap-4">
//               <button className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition" onClick={() => {
//   dispatch(addCart());
//   dispatch(productData({ id, image, price, title }));
// }}>
//                 Add to Cart
//               </button>