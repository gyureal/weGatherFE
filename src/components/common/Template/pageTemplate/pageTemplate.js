import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import EmailCheckAlert from "../emailCheckAlert";
import { useDispatch, useSelector } from "react-redux";
import { requestCurrentUser } from "../../../../slice/authSlice";

const PageTemplate = ({ children }) => {
    const currentUser = useSelector((state) => {
        return state.authSlice.currentUser;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser) {
            dispatch(requestCurrentUser());
        }
    }, []);

    // useSelector 안에서 사용자 정보를 가져와야 로그인, 로그아웃 시, 즉시 페이지가 렌더링 됨


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