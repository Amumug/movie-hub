import { ModeToggle } from "./ModeToggle";
import { ThemeProvider } from "./ThemeProvider";
const NavBar = () => {
  return (
    <>
      <div>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="text-amber-50 text-xs font-normal ">Find Your Next Favorite Movie</div>
            <ModeToggle />
          </ThemeProvider>
      </div>
    </>
  );
};

export default NavBar;
