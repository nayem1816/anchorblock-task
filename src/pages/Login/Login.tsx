import { useForm, SubmitHandler } from "react-hook-form";
import logoImage from "../../assets/img/logo.png";
import InputBox from "../../components/inputBox/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/features/auth/authApiSlice";
import toast from "react-hot-toast";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const [loginUser] = useLoginUserMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    const res = await loginUser(data);

    if ((res as { data: unknown })?.data) {
      setTimeout(() => {
        toast.success("Login successfully!");
      }, 500);
      navigate("/");
    } else {
      toast.error("Login failed!");
    }
  };
  return (
    <div className="flex justify-center h-[100vh] items-center">
      <div className="w-[400px] border p-10 rounded-lg shadow-md">
        <div className="">
          <div className="flex gap-2 items-center">
            <img className="h-6 w-10" src={logoImage} alt="logo" />
            <h2 className="font-bold text-2xl text-[#4E5D78]">Stack</h2>
          </div>
          <p className="mt-4">Sign in to continue with stack</p>
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
            <div className="">
              <button
                type="submit"
                className="bg-purple-600 text-white rounded-lg p-2 w-full">
                Sign in
              </button>
              <p className="mt-2 text-gray-400">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#377DFF]">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
