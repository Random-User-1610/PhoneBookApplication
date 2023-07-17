import Header from "../Components/Header";
import Login from "../Components/CreateContact";
import "../css/login.css";
import CreateContact from "../Components/CreateContact";
const AddPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white opacity-90 dp">
      <div
        className=" rounded-lg p-8 w-96 "
        style={{ backgroundColor: "white", opacity: 0.9 }}
      >
        <div classname="px-7 ">
          <CreateContact />
        </div>
      </div>
    </div>
  );
};

export default AddPage;
