import { ModeToggle } from "./ModeToggle";
import { ThemeProvider } from "./ThemeProvider";
import MovieLogo from "../assets/Logo-Movie.svg"

const NavBar = () => {
  return (
    <>
      <div>
        <img src="../assets/Logo-Movie.svg" alt="" />

        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </div>
    </>
  );
};

export default NavBar;
