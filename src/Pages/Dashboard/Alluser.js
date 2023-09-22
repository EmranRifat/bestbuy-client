import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const Alluser = () => {

    const {data:users=[],isLoading,refetch}=useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
          const res= await  fetch('http://localhost:5000/users')
          const data=await res.json();
          return data;
    
        } 
      });
      const handleMakeAdmin=id=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PUT',
            // for token 
            headers:{
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount>0){
            toast.success("Make Admin Succesfull.")
            refetch();
          }
        })
      }


    return (
        <div className="overflow-x-auto">
        <h2 className='text-xl font-semibold text-blue-600'>All Users</h2>
        <table className="table  w-full table-xs">
          <thead>
            <tr>
              <th></th> 
              <th>Name</th> 
              <th>Email</th> 
              <th>Admin</th> 
              <th>Delete</th>
              <th></th>

            </tr>
          </thead> 
          <tbody>
          {
            users.map((user,index)=> 
            <tr>
              <th>{index+1}</th> 
              <td>{user.name}</td> 
              <td>{user.email}</td> 
                <td>
              {user?.role!=='admin' &&  <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-accent'>make admin</button>}
                </td> 
              <td> <button className='btn btn-xs btn-denger'>Delete </button></td> 
              <td></td> 
            </tr>)
          }
           
           
          
          
          </tbody> 
         
        </table>
      </div>
    );
};

export default Alluser;