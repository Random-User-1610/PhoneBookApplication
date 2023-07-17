import Header from "../Components/Header";
import CustomNavbar from "../Components/CustomNavbar";
import Table from "../Components/Table";
import "../css/login.css";
export default function Homepage() {
  return (
    <div className="dp min-h-screen flex flex-col">
      <CustomNavbar />
      <div className="flex justify-center items-center mt-32 ml-80 mr-28 mt-36 opacity-90">
        <Table />
      </div>
    </div>
  );
}
