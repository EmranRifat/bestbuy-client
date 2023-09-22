import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register,getValues ,handleSubmit, formState: { errors }} = useForm();


  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  const options=['Mobles','Electronics','Home & Living','Sports','Educational','Laptops', 'smartphones','skincare','groceries','fragrances','home-decoration']

  return (
    <div>
      <h1>Add new product: </h1>
      <div className=" h-[800px]  flex -mt-10 justify-center items-center">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "name is required" })}
                placeholder=" Name"
                className="input input-bordered w-full max-w-lg bg-green-50 border border-green-300 focus:outline-green-500"
              />
         
           
            </div>
           
           
            <div className="form-control w-full">
              <div className="form-control w-full max-w-lg text-gray-800 ">
                <label className="label">
                  <span className="label-text text-sm ">Catagory</span>
                </label>
                <select className=" bg-green-50 py-2 rounded text-sm select-bordered max-w-lg border border-green-300 focus:outline-green-500  "
                {...register("select", { required: "option is required" })}

                >
                 {
                  options.map((option,i)=>
                    <option 
                    key={i}
                    className="text-gray-600 select "   defaultValue> {option} </option>)
                 }
                 
                </select>
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-sm">Brand Name</span>
              </label>
              <input
                type="text"
                {...register("brand", { required: "brand is required" })}
                placeholder=" brand"
                className="input input-bordered w-full max-w-lg bg-green-50 border border-green-300 focus:outline-green-500"
              />
         
           
            </div>


            <div className='flex justify-between gap-2 pt-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600 text-sm'>
                  Price
                </label>
                <input
                {...register("price", { required: "price is required" })}
                  className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='Rating' className='block text-gray-600 text-sm'>
                Rating
                </label>
                <input
                {...register("Rating", { required: "Rating is required" })}
                  className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                  type='number'
                  placeholder='Rating'
                  required
                />
              </div>
            </div>


            <div className='flex justify-between gap-2 pt-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='discount' className='block text-gray-600 text-sm'>
                  Discount Price
                </label>
                <input
                {...register("discount", { required: "discount is required" })}
                  className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                  type='number'
                  placeholder='discount'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='stock' className='block text-gray-600 text-sm'>
                  Bathrooms
                </label>
                <input
                {...register("stock", { required: "stock is required" })}
                  className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                  type='number'
                  placeholder='stock'
                  required
                />
              </div>
            </div>
             


             {/* image section */}
             <div className="">

             <div >
             <p className="pt-4 text-sm">chose an image</p>
              <input 
              {...register("image", { required: "image is required" })}
               type="file" name="image" id="" />
               {errors.image && <p className="text-red-500">{errors.name.message}</p>}
              </div>
            

             {/* for Rating */}
             <div className='space-y-1 text-sm pt-4'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                {...register("description", { required: "description is required" })}
                id='description'
                className='block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 '
                name='description'
              ></textarea>
            </div>

             </div>

           





            <input className="btn btn-s w-full mt-5" type="submit" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default AddItem;
