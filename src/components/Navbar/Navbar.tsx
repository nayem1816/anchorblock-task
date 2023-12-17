import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/navLogo.png";
import { CiSearch, CiSettings, CiBellOn } from "react-icons/ci";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("/users");

  const location = useLocation();

  useEffect(() => {
    setActive(location?.pathname);
  }, [location.pathname]);

  return (
    <nav className="bg-[#6941C6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-10">
            <div>
              <Link
                to="/users"
                className="flex items-center py-5 px-2 text-white">
                <img className="w-10 h-8" src={logo} alt="logo" />
                <span className="font-bold ml-2 text-xl">Stack</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className={`py-1 px-3 text-white hover:bg-[#7F56D9] hover:rounded-lg ${
                  active === "/" && "bg-[#7F56D9] rounded-lg"
                }`}>
                Home
              </Link>
              <Link
                to="/users"
                className={`py-1 px-3 text-white hover:bg-[#7F56D9] hover:rounded-lg ${
                  active === "/users" && "bg-[#7F56D9] rounded-lg"
                }`}>
                Users
              </Link>
              <Link
                to="/projects"
                className={`py-1 px-3 text-white hover:bg-[#7F56D9] hover:rounded-lg ${
                  active === "/projects" && "bg-[#7F56D9] rounded-lg"
                }`}>
                Projects
              </Link>
              <Link
                to="/tasks"
                className={`py-1 px-3 text-white hover:bg-[#7F56D9] hover:rounded-lg ${
                  active === "/tasks" && "bg-[#7F56D9] rounded-lg"
                }`}>
                Tasks
              </Link>
              <Link
                to="/reporting"
                className={`py-1 px-3 text-white hover:bg-[#7F56D9] hover:rounded-lg ${
                  active === "reporting" && "bg-[#7F56D9] rounded-lg"
                }`}>
                Reporting
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <div className="flex gap-3 text-white items-center">
              <CiSearch className="cursor-pointer text-xl" />
              <CiSettings className="cursor-pointer text-xl" />
              <CiBellOn className="cursor-pointer text-xl" />
              <div className="">
                <img
                  className="w-7 h-7 rounded-full border-2 border-white p-[1px] cursor-pointer"
                  src="https://flaticons.net/icon.php?slug_category=application&slug_icon=user-profile"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu hidden md:hidden text-white">
        <Link
          to="/"
          className="block py-2 px-4 text-sm hover:bg-gray-200 text-white">
          Home
        </Link>
        <Link to="/users" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Users
        </Link>
        <Link
          to="/projects"
          className="block py-2 px-4 text-sm hover:bg-gray-200">
          Projects
        </Link>
        <Link to="/tasks" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Tasks
        </Link>
        <Link
          to="/reporting"
          className="block py-2 px-4 text-sm hover:bg-gray-200">
          Reporting
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
