import React, { useEffect, useState } from 'react';
import Modal from '../../Pages/Shared/Modal';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [modalData, setModalData] = useState({});

//   const allProduct=products?.products;
  //    http://localhost:5000/products

  useEffect(() => {
    fetch(' http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-4 mt-8 mx-4">
      {
        products.map((p) => (
        <Product setModalData={setModalData} key={p._id} product={p}></Product>
      ))}
      <Modal className="hidden" modalData={modalData}></Modal>
    </div>
  );
};

export default Products;
