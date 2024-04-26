import { ModeToggle } from "./ModeToggle";
import { ThemeProvider } from "./ThemeProvider";
const NavBar = () => {
  return (
    <>
      <div>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle/>
          </ThemeProvider>
      </div>
    </>
  );
};

export default NavBar;
