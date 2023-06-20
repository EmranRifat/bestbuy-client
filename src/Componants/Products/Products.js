import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Modal from '../../Pages/Shared/Modal';

const Products = () => {
    const [products,setProducts]=useState([])
    const [modalData,setModalData]=useState({})
    
//    http://localhost:5000/products
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-4 mt-8 mx-4'>
            {

                allproduct.map(p=><Product
                setModalData={setModalData}
                key={p.id}
                product={p}
                ></Product>)
        
            }
        <Modal  modalData={modalData}></Modal>
        </div>
    );
};

export default Products;