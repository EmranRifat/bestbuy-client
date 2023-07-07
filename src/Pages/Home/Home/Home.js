import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import RightSideBar from "../../Shared/Sidebar/RightSideBar";
import Products from "../../../Componants/Products/Products";
import Slider from "../../Slider/Slider";
import RoundCards from "../../Round-card/RoundCards";

const Home = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-base-200  ">
          {/* <!-- Page content here --> */}
          <div className="flex">
            <div>
              <Slider/>
              <RoundCards />
            </div>
            <RightSideBar />
          </div>
          <Products />
        </div>

        <div className="drawer-side h-[510px]  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className=" p-4 w-56 bg-base-100  mt-4 text-base-content">
            <Sidebar></Sidebar>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
