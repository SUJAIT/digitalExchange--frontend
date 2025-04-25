import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {

  const {isAuthenticated, setAccessToken} = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);  
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleLogOut = () =>{
    setAccessToken(null);
    setDropdownOpen(false);
  }

  return (
     
      <nav className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/236wDvdc/file-0000000039d8622fa842f8db5fb29b40-conversation-id-68012fac-89f4-8011-be4e-1fb86c7c2ecd-message-i.png"
                alt="Apple Gift Card Logo"
                className="h-30 w-auto"
              />
            </div>
            {/* <div className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black border-b-2 border-black pb-1">Overview</a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">Redeem</a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">Check Balance</a>
            </div> */}
             <div className="relative">
            <CgProfile 
              className="text-3xl text-blue-700 cursor-pointer"
              onClick={toggleDropdown}
            />
            
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg py-2 z-50">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>



          </div>
        </div>
      </nav>
  )
}

export default Navbar
