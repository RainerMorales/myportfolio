import { ModeToggle } from "./components/mode-toggle";
import Content from "./pages/Home/Content";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Home/Projects";
function App() {
  return (
    <>
      <div className="fixed top-8 right-5 z-50  ">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle></ModeToggle>
        </ThemeProvider>
      </div>
      <Router>
        <Routes>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/" element={<Content />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
