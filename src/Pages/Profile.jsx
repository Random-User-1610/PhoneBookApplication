import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../Redux/Userslice";
const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="flex justify-center items-center h-screen bg-white  dp ">
      <div className="bg-white  opacity-70 p-6 rounded-lg shadow-md w-96  ">
        <div className="flex justify-center ">
          <img
            className="w-32 h-32 rounded-full "
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
        </div>

        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">{user.name} </h2>
          <p className="text-gray-600"></p>
        </div>
        <div className="mt-4 ">
          <h3 className="text-lg font-bold mb-2 ">Email</h3>
          <ul className="flex flex-wrap">
            <li className="bg-gray-200 rounded-full py-1 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {user.password}
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Contact Info</h3>
          <ul className="flex flex-wrap">
            <li className="bg-gray-200 rounded-full py-1 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {user.mobile}
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Number of Contacts</h3>
          <ul className="flex flex-wrap">
            <li className="bg-gray-200 rounded-full py-1 px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
              20
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
