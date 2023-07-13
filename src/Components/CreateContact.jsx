import axios from "axios";
import { useState } from "react";
import { createContactFields } from "../Constants/FormFields";
import { useNavigate } from "react-router-dom";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = createContactFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function CreateContact() {
  const navigate = useNavigate();
  const [contactState, setcontactState] = useState(fieldsState);

  const handleChange = (e) => {
    setcontactState({ ...contactState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact();
  };

  const addContact = async () => {
    // const endpoint = "http://localhost:8080/login";
    // try {
    //   // console.log(loginState);
    //   const response = await axios.post(endpoint, loginState);
    //   const data = response.data;
    //   console.log(data);
    //   // Route to Home page
    //   navigate("/homepage");
    // } catch (error) {
    //   console.log("Error");
    //   console.log(error);
  };
  // }

  return (
    <form className=" space-y-6 mx-auto" onSubmit={handleSubmit}>
      <div className="flex justify-center ">
        <img
          className="w-32 h-32 rounded-full "
          src="https://via.placeholder.com/150"
          alt="User Avatar"
        />
      </div>
      <button
        className="ml-2  rounded-md p-2 text-yellow-500 bg-black "
        onClick={() => {}}
      >
        Add image
      </button>
      <div className="space-y-6  mx-6">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={contactState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <button className="text-yellow-500 text-xl group relative flex w-80 justify-center p-3 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ">
        Add Contact
      </button>
    </form>
  );
}
