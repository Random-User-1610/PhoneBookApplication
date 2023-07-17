import React from "react";
import { FaBars } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";
import Table from "../Components/Table";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const navigate = useNavigate();

  return (
    <div>
      <nav className=" flex items-center bg-black h-24 flex justify-between px-4 fixed top-0 left-0 right-0">
        <div>
          <FaBars
            className=" flex items-center hidden text-yellow-500 md:block " //+{(showSidebar)?"mx-56":"mx-5"};
            onClick={handleToggleSidebar}
            style={{ fontSize: " 30px" }}
          />

          <nav
            className={` mt-24 bg-black h-screen w-64 fixed top-0 left-0 ${
              showSidebar ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex justify-center items-center h-32">
              <NavLink
                to="/allcontacts"
                activeStyle={{ color: "white" }}
                className=" text-black rounded bg-yellow-500 text-xl w-56 h-10  text-center"
              >
                View All Contacts
              </NavLink>
            </div>
            <div className="flex justify-center items-center h-32">
              <NavLink
                to="/createcontact"
                activeStyle={{ color: "white" }}
                className=" text-black rounded bg-yellow-500 text-xl w-56 h-10  text-center"
              >
                View All groups
              </NavLink>
            </div>
            <div className="flex justify-center items-center h-32">
              <NavLink
                to="/createcontact"
                activeStyle={{ color: "white" }}
                className=" text-black rounded bg-yellow-500 text-xl w-56 h-10  text-center"
              >
                Import Contacts
              </NavLink>
            </div>
            <div className="flex justify-center items-center h-32">
              <NavLink
                to="/createcontact"
                activeStyle={{ color: "white" }}
                className=" text-black rounded bg-yellow-500 text-xl w-56 h-10  text-center"
              >
                Export Contacts
              </NavLink>
            </div>
          </nav>
        </div>
        <div class="navbar-item flex items-center border-4 p-3 px-4 bg-black rounded-xl border-yellow-500 mr-96 text-xl font-serif">
          <i class="fas fa-book mr-2"></i>
          <Link to="/homepage">
            <span class="font-bold text-yellow-500">PHONE BOOK</span>
          </Link>
        </div>
        <div className="flex items-center">
          <NavLink
            to="/createcontact"
            activeStyle={{ color: "white" }}
            // className="mx-24 black px-3 py-3 rounded bg-gray-200 text-xl"
            style={{}}
          >
            <AiOutlineUserAdd
              className=" hidden text-yellow-500 md:block"
              onClick={handleToggleSidebar}
              style={{ fontSize: "40px" }}
            />
          </NavLink>
          <NavLink
            to="/group"
            activeStyle={{ color: "white" }}
            // className="mx-24 black px-3 py-3 rounded bg-gray-200 text-xl"
            style={{}}
          >
            <HiUserGroup
              className=" hidden text-yellow-500 md:block ml-24"
              onClick={() => {
                navigate("/group");
              }}
              style={{ fontSize: "40px" }}
            />
          </NavLink>
          <NavLink
            activeStyle={{ color: "white" }}
            // className="mx-24 black px-3 py-3 rounded bg-gray-200 text-xl"
            style={{}}
          >
            <MdPersonSearch
              className=" hidden text-yellow-500 md:block center ml-32 mr-4"
              onClick={handleToggleSidebar}
              style={{ fontSize: "40px" }}
            />
          </NavLink>
          <Search />
          to="/profile"
          <NavLink
          // className=" black px-4 py-2 rounded bg-gray-200"
          >
            <ImProfile
              className=" hidden text-yellow-500 md:block"
              onClick={handleToggleSidebar}
              style={{ fontSize: "40px" }}
            />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default CustomNavbar;
