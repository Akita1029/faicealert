import React from "react";
import {
    Button as MUIButton
} from "@mui/material";
import {
    styled
} from "@mui/material/styles";

const Button = styled(MUIButton)({
    borderRadius: '8px',
    background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',
    boxShadow: 'none',
    paddingTop: '12px',
    paddingBottom: '12px',
    textTransform: 'none'
});

export default Button;