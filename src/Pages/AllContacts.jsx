import Header from "../Components/Header";
import CustomNavbar from "../Components/CustomNavbar";
import Table from "../Components/Table";
import GroupTable from "../Components/GroupTable";
import Allcontacts from "../Components/Allcontacts";
export default function AllContacts() {
  return (
    <div>
      <CustomNavbar />
      <div className="dp min-h-screen flex flex-col">
        <div className="flex justify-center items-center mt-32 mx-80 opacity-90">
          <Allcontacts />
        </div>
      </div>
    </div>
  );
}
