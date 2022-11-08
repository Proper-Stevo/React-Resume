import React from "react";
import Navbar from "./pages/Nav";
import Footer from "./pages/Footer";
import '../src/styling/app.css'
import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";

function App() {
    return (
        <div>
            <Navbar />
            <ImageOne />
            <ImageTwo />
            <ImageThree />

            <div>
                <Footer />
            </div>
        </div>
    )
};

export default App;