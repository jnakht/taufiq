
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // js code to handle the faltu logged out button : start
  // handle LogOut 
  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  }
  // js code to handle the faltu logged out button : end

  return (
    <nav className="bg-black text-white w-full fixed top-0 z-50 shadow-lg">
      <div className="p-6 mx-auto  flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-yellow-500">
          Bitcoin Simulator
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6  items-center">
          {[
            { path: "/", label: "Home" },
            { path: "/market", label: "Markets" },
            { path: "/trade", label: "Trade" },
            { path: "/signIn", label: "SignIn" },
            { path: "/signUp", label: "SignUp" },
            { path: "/profile", label: "Profile" },

            // { path: "/", label: "Home" },
            // { path: "/market", label: "Markets" },
            // ...(user
            //   ? [
            //     { path: "/trade", label: "Trade" },
            //     { path: "/profile", label: "Profile" },
            //   ]
            //   : [
            //     { path: "/signIn", label: "SignIn" },
            //     { path: "/signUp", label: "SignUp" },
            //   ]),
          ].map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className="hover:text-yellow-500">
                {label}
              </Link>
            </li>
          ))}
          {/* Profile Picture */}
          <li>
            <Link to="/profile">
              <img
                src="https://via.placeholder.com/40" // Replace with actual profile image URL
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-yellow-500"
              />
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-yellow-500">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>



      {/* faltu logged out button starts here */}
      {user && 
          <button
          className="ml-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
          onClick={handleLogOut}
        >
          LogOut
    </button>
      }
         {/* faltu logged out button ends here */}




      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden md:hidden`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          {[
            { path: "/", label: "Home" },
            { path: "/market", label: "Markets" },
            { path: "/trade", label: "Trade" },
            { path: "/signIn", label: "SignIn" },
            { path: "/signUp", label: "SignUp" },
            { path: "/profile", label: "Profile" },



            // { path: "/", label: "Home" },
            // { path: "/market", label: "Markets" },
            // ...(user
            //   ? [
            //     { path: "/trade", label: "Trade" },
            //     { path: "/profile", label: "Profile" },
            //   ]
            //   : [
            //     { path: "/signIn", label: "SignIn" },
            //     { path: "/signUp", label: "SignUp" },
            //   ]),



          ].map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="block px-4 py-2 hover:text-yellow-500"
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;



