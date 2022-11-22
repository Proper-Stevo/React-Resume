import React from "react";
import Footer from "./components/Footer";
import '../src/styling/app.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContactInfo from "./components/ContactInfo";
import Resume from "./components/Resume";
import About from "./components/Aboutme";

function App() {
    return (
        <div>
            <Home />
            <About />
            <Projects />
            <Resume />
            <ContactInfo />
            <div>
                <Footer />
            </div>
        </div>
    )
};

export default App;