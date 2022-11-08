import React from "react";
import Navbar from "./pages/Nav";
import Footer from "./pages/Footer";
import '../src/styling/app.css'
import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";
import Resume from "./components/Resume";
import About from "./components/Aboutme";

function App() {
    return (
        <div>
            <Navbar />
            <ImageOne />
            <About />
            <ImageTwo />
            <Resume />
            <ImageThree />

            <div>
                <Footer />
            </div>
        </div>
    )
};

export default App;