import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Sidebar = () => {

  const [categories,setCategories]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])

  return (
  <div className="space-y-4 ml-8 ">
    <div className="flex justify-between">
    <h2 className="font-bold text-xl text-accent">All Categories</h2>

<MdKeyboardDoubleArrowRight className="mt-2 ml-2 text-gray-500"></MdKeyboardDoubleArrowRight>
    </div>
{
  categories.map(category=><p className=" hover:bg-violet-400 focus:ring-violet-300 " key={category.id}>
    <Link to={`/category/${category.id}`}>{category.name}</Link>
  </p>)
}

  </div>
  );
};

export default Sidebar;
