import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Page/About";
import Home from "./Page/Home";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./Components/theme-context";


export function App() {
  
  return (
    <>
      {/* navbar */}
      {/* Routes */}
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
