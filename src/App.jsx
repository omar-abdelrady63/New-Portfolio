import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./pages/Resume";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="bg-bg text-text-main min-h-screen selection:bg-primary selection:text-black transition-colors duration-300">
                                <Navbar />
                                <Hero />
                                <About />
                                <Certificates />
                                <Projects />
                                <Contact />
                                <Footer />
                            </div>
                        }
                    />

                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
