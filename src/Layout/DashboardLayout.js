import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar';

const DashboardLayout = () => {
    return (
        <div>
           <div className='md:flex relative min-h-screen'>
           <Sidebar/>
            <div className='flex-1'>
          <div className="p-5">
          <Outlet/>
          </div>
            </div>

           </div>
            
         
        </div>
    );
};

export default DashboardLayout;