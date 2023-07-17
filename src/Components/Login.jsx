import axios from "axios";
import { useState } from "react";
import { loginFields } from "../Constants/FormFields";
import { useNavigate } from "react-router-dom";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
    navigate("/homepage");
  };

  const navigate = useNavigate();
  const authenticateUser = async () => {
    const endpoint = "http://localhost:8080/login";

    try {
      // console.log(loginState);
      const response = await axios.post(endpoint, loginState);

      const data = response.data;
      console.log(data);
      // Route to Home page
      navigate("/homepage");
    } catch (error) {
      console.log("Error");
      console.log(error);
    }
  };

  return (
    <form className=" space-y-6 mx-auto" onSubmit={handleSubmit}>
      <div className="space-y-px mx-6">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
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

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
