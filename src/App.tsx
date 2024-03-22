import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return <>
    <NavBar></NavBar>
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
  </>;
}

export default App;
