import { ModeToggle } from "./ModeToggle";
import { ThemeProvider } from "./ThemeProvider";
import logo from "../assets/Logo-Movie.svg";

const NavBar = () => {
  return (
    <>
      <div>
        <img src={logo} alt="" />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </div>
    </>
  );
};

export default NavBar;
