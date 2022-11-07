import React, { useState } from "react";
import Navbar from "./pages/Nav";

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