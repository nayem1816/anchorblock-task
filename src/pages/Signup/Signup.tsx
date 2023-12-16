import { useForm, SubmitHandler } from "react-hook-form";
import logoImage from "../../assets/img/logo.png";
import InputBox from "../../components/inputBox/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PasswordLevelManage from "../../components/signup/PasswordLevelManage";
import { useSignupUserMutation } from "../../redux/features/auth/authApiSlice";
import toast from "react-hot-toast";

type Inputs = {
  email: string;
  password: string;
};

const Signup = () => {
  const [passwordLabel, setPasswordLabel] = useState("very weak");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [signupUser] = useSignupUserMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await signupUser(data);

    if ((res as { data: unknown })?.data) {
      setTimeout(() => {
        toast.success("Signup successfully!");
      }, 500);
      navigate("/");
    } else {
      toast.error("Signup failed!");
    }
  };

  useEffect(() => {
    if (watch("password")) {
      if (watch("password").length < 3) {
        setPasswordLabel("very week");
      } else if (watch("password").length < 5) {
        setPasswordLabel("week");
      } else if (watch("password").length < 6) {
        setPasswordLabel("medium");
      } else if (watch("password").length < 8) {
        setPasswordLabel("strong");
      } else {
        setPasswordLabel("very strong");
      }
    }
  }, [watch("password")]);

  return (
    <div className="flex justify-center h-[100vh] items-center">
      <div className="w-[400px] border p-10 rounded-lg shadow-md">
        <div className="">
          <div className="flex gap-2 items-center">
            <img className="h-6 w-10" src={logoImage} alt="logo" />
            <h2 className="font-bold text-2xl text-[#4E5D78]">Stack</h2>
          </div>
          <p className="mt-4">Sign up to join with stack</p>
        </div>
        <div className="form mt-10">
          <form
            className="grid grid-cols-1 gap-5"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <p className="text-md">Email</p>
              <InputBox
                type="text"
                placeholder="Enter Email"
                error={errors.email}
                hookRef={{ ...register("email", { required: true }) }}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="">
              <p className="text-md">Password</p>
              <InputBox
                type="password"
                placeholder="Enter password"
                error={errors.password}
                hookRef={{ ...register("password", { required: true }) }}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {watch("password") && (
              <PasswordLevelManage passwordLabel={passwordLabel} />
            )}

            <div className="">
              <button
                type="submit"
                className="bg-purple-600 text-white rounded-lg p-2 w-full">
                Sign up
              </button>
              <p className="mt-2 text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="text-[#377DFF]">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
