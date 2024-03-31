import { ModeToggle } from "./ModeToggle";
import { ThemeProvider } from "./ThemeProvider";
import { Input } from "./ui/input";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
          >
            <path
              d="M39.0002 16.2452C40.5397 16.2611 41.4847 17.9376 40.7012 19.2629L27.7534 41.1647C26.9699 42.49 25.0455 42.4701 24.2895 41.1289L11.7959 18.9649C11.0399 17.6237 12.0193 15.9671 13.5588 15.9829L39.0002 16.2452Z"
              fill="#F46A0D"
            />
            <path
              d="M32.3737 12.3656C33.725 11.6277 35.3683 12.6293 35.3316 14.1685L34.7262 39.6051C34.6896 41.1443 33.0005 42.0666 31.6859 41.2653L9.95981 28.0227C8.64517 27.2214 8.69096 25.2974 10.0422 24.5596L32.3737 12.3656Z"
              fill="#104D79"
              fill-opacity="0.93"
            />
          </svg>
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
