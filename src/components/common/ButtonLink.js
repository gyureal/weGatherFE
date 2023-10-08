import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// mui Button 태그 + react-router-dom 의 Link 태그
// https://mui.com/material-ui/react-button/
export default function ButtonLink({ text, path, color = 'inherit' }) {

    return (
        <Button
            color={color}
            component={Link}
            to={path}
        >Login
        </Button>
    );
}