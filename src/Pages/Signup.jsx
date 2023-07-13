import Header from "../Components/Header";
import Signup from "../Components/Signup";

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-white opacity-90 dp">
      <div
        className=" rounded-lg p-8 w-96 "
        style={{ backgroundColor: "white", opacity: 0.9 }}
      >
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/"
        />
        <div classname="px-7 ">
          <Signup />
        </div>
      </div>
    </div>
  );
}
