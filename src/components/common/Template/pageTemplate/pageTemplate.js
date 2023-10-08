import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const PageTemplate = ({ children }) => (
    <div className="page-template">
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
)

export default PageTemplate;