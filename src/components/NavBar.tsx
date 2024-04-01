import { ModeToggle } from "./ModeToggle";
import { ThemeProvider } from "./ThemeProvider";
import { Input } from "./ui/input";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" />
          <p className="">AMovie</p>
          <Input
            type="text"
            placeholder="Search for Movies..."
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-96 "
          />
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default NavBar;
