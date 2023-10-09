import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import EmailCheckAlert from "../emailCheckAlert";

const PageTemplate = ({ children }) => (
    <div className="page-template">
        <Navbar />
        <EmailCheckAlert />
        <main>
            {children}
        </main>
        <Footer />
    </div>
)

export default PageTemplate;