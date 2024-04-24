import { ModeToggle } from "./ModeToggle";
import { ThemeProvider } from "./ThemeProvider";
const NavBar = () => {
  return (
    <>
      <div>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
          </ThemeProvider>
          {/* <div className="text-amber-50 text-xs font-normal ">Find Your Next Favorite Movie</div>
         <p className="text-red-500 text-4xl font-normal font-['Satoshi Variable']">hello world</p> */}
      </div>
    </>
  );
};

export default NavBar;
