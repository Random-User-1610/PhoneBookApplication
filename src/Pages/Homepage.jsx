import Header from "../Components/Header";
import CustomNavbar from "../Components/CustomNavbar";
import Table from "../Components/Table";
export default function Homepage() {
  return (
    <div>
      <CustomNavbar />
      <div className="flex justify-center items-center mt-32 ml-80 mr-28 mt-36">
        <Table />
      </div>
    </div>
  );
}
