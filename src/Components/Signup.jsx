import { useState } from "react";
import { signupFields } from "../Constants/FormFields";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/Userslice";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signup({
        name: signupState.username,
        email: signupState.email,
        mobile: signupState.mobile,
        password: signupState.password,
        loggedIn: true,
      })
    );
    console.log(signupState.confirm);
    navigate("/homepage");
    if (signupState.confirm === signupState.password) {
      createAccount();
    }
  };

  const navigate = useNavigate();
  const createAccount = async () => {
    const endpoint = "http://localhost:8080/register";

    try {
      // console.log(loginState);
      const body = {
        username: signupState.username,
        password: signupState.password,
        email: signupState.email,
      };
      const response = await axios.post(endpoint, body);

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
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            patter={field.pattern}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
