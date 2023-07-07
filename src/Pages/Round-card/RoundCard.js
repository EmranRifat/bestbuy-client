import React from "react";

const RoundCard = ({ card }) => {
  const { image, name } = card;

  return (
    <div>
      <div className=" card ">
        <figure className="px-10 pt-8">
         <div className="rounded-full h-28 w-46	bg-gray-300 flex justify-center">
         <img src={image} alt="Shoes" className="w-20 h-20 mt-4" />
         </div>
        </figure>
        <div className=" py-4 items-center text-center text-gray-500">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default RoundCard;
