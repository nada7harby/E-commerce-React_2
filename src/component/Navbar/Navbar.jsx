import React from "react";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <div>
      {/* upper nav */}
      <div>
        <div>
          <div>
            <div className="logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            {/* search */}
            <div className="group">
              <input
                type="text"
                placeholder="Search"
                className=" w-[200px] sm:w-[200px] group-hover:w-[300px] translate-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 "
              />
            </div>
          </div>
        </div>
      </div>
      {/* lower nav */}
      <div></div>
    </div>
  );
}
