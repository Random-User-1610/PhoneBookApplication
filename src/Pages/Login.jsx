import Header from "../Components/Header";
import Login from "../Components/Login";
import "../css/login.css";
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white opacity-90 dp">
      <div
        className=" rounded-lg p-8 w-96 "
        style={{ backgroundColor: "white", opacity: 0.9 }}
      >
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <div classname="px-7 ">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
