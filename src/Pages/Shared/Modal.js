import React, { useContext } from 'react';
import { authContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Modal = ({ modalData}) => {
 
const {user}=useContext(authContext)

const booking={
  email:user?.email,
  product:modalData.title,
  image:modalData.images,
  price:modalData.price,
  category:modalData.category,
  brand:modalData.brand,
  description:modalData.description,
  thumbnail:modalData.thumbnail

}

const handleModal=()=>{
fetch("http://localhost:5000/orders",{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(booking)
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  toast.success('Booking confirmed...')
})

}




    return (
        <>
        <label htmlFor="my-modal-3" className="btn">open modal</label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <p className="">User: {user?.email} </p>
    <h3 className="text-lg font-bold">your order : {modalData.title} </h3>
    <img className='h-auto w-28  mt-2 ' src={modalData.image} alt="" />
   <h2 className="text-lg font-semibold text-red-600 " > Price : {modalData.price}$</h2>
    <p className="py-4">{modalData?.description}</p>
    <button onClick={handleModal} className='btn btn-primary'>Confirm</button>
</div>
 
  </div>

        </>
    );
};

export default Modal;