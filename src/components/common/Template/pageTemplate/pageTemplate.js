import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import EmailCheckAlert from "../emailCheckAlert";
import { useDispatch, useSelector } from "react-redux";
import { requestCurrentUser } from "../../../../slice/authSlice";

const PageTemplate = ({ children }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("getCurrentUser");
        dispatch(requestCurrentUser());
    }, []);

    const currentUser = useSelector((state) => {
        console.log(state.authSlice.currentUser);
        return state.authSlice.currentUser;
    });

    return (
        <div className="page-template">
            <Navbar currentUser={currentUser} />
            {currentUser && !currentUser.emailVerified && <EmailCheckAlert />}
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PageTemplate;