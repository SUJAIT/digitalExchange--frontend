import DropDown from "@/component/DropDown"
import { useAuth } from "@/context/AuthContext"
import { CgProfile } from "react-icons/cg"

const Navbar = () => {
  const { isAuthenticated, setAccessToken } = useAuth()

  const handleLogOut = () => setAccessToken(null)

  const menuItems = isAuthenticated
    ? [  {
          label: "Profile",
          to: "/user",
        },
        {
          label: "Logout",
          onClick: handleLogOut,
          className: "text-red-600",
        }
      ]
    : [
        {
          label: "Login",
          to: "/login",
        },
      ]

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <img
            src="https://i.ibb.co/236wDvdc/file-0000000039d8622fa842f8db5fb29b40-conversation-id-68012fac-89f4-8011-be4e-1fb86c7c2ecd-message-i.png"
            alt="Logo"
            className="h-30 w-auto"
          />

          <DropDown
            label="Account"
            trigger={<CgProfile className="text-3xl text-blue-700 cursor-pointer" />}
            items={menuItems}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
