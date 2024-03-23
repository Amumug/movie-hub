import { ModeToggle } from "./components/ModeToggle";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <>
      <div className="flex justify-center my-2">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-96 "
          />
          <Button variant={"outline"}>Search</Button>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}

export default App;
