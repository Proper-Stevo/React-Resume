import React, { useState } from "react";
import Navbar from "./pages/Nav";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import '../src/styling/app.css'

export default function App() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePage = (page) => setCurrentPage(page);

    return (
        <div className="">
            <Navbar currentPage={currentPage} handlePage={handlePage} />

        <div className="body">
            {renderPage()}
            </div>
            <Footer />
        </div>
    );
}