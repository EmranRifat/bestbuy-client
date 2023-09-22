import React, { useContext } from "react";
import { authContext } from "../../Contexts/AuthProvider";
import { useQuery } from "react-query";

const Order = () => {
  const { user } = useContext(authContext);

  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/order?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }, [user?.email]);

  const {data:orders=[],isLoading}=useQuery({
    queryKey:[user?.email],
    queryFn: async ()=>{
      const res= await  fetch(`http://localhost:5000/order?email=${user?.email}`,{
       headers:{
        authorization:`bearer ${localStorage.getItem('accessToken')}`
       } 
      })
      const data=await res.json();
      console.log('receve',data);
      return data;

    } 
  })



  return (
    <div className="overflow-x-auto">
    <table className="table table-sm w-screen">
      {/* head */}
      <thead>
        <tr>
          <th>Index</th>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Brand</th>
          <th>User email</th>
        </tr>
      </thead>
      <tbody>
     {  
     orders?.map((order,i)=>  <tr key={i}>
          <th>{i+1}</th>
          <td>
          <div className="avatar">
              <div className="mask mask-squircle w-full h-8">
                <img src={order.thumbnail} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </td>
          <td>{order.product}</td>
          <td>{order.category}</td>
          <td>{order.price}$</td>
          <td>{order.brand}</td>
          <td>{order.email}</td>
        </tr>
        )
       }
      </tbody>
    </table>
  </div>
  );
};

export default Order;
