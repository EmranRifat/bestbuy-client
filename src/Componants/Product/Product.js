import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product, setModalData }) => {
  const { title, price, id } = product;
  const navigate = useNavigate();
  // console.log(product);

  const navigateProductDetail = (id) => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <div>
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
            {title.slice(0, 12)}
          </h1>
        </div>

        <div className="flex items-center justify-center py-4 bg-[#EDF2FD]">
          {/* <img className=" w-28 h-36 mt-2 " src={product.image} alt="NIKE AIR" /> */}
        </div>
        <div className="flex my-2 item-center">
          <svg
            className="w-5 h-5 text-orange-500 fill-current dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 text-orange-500 fill-current dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 text-orange-400 fill-current dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 text-orange-300 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 text-orange-100 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
          <p className="text-gray-500 pl-4 text-sm">(7.5)</p>
        </div>

        <div className="flex items-center justify-between px-4 py-2 bg-accent">
          <h1 className="text-lg font-bold text-white">$ {price}</h1>

          <button
            onClick={() => navigateProductDetail(id)}
            className="btn btn-xs  btn-warning text-white"
          >
            Buy{' '}
          </button>

          <label
            onClick={() => setModalData(product)}
            htmlFor="my-modal-3"
            className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
          >
            Add to cart
          </label>
        </div>
      </div>
    </div>
  );
};

export default Product;
