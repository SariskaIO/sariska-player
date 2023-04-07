import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../assets/styles/_color";
import { SYNE } from "../../constants";

const Logo = ({ color, lineHeight }) => {
  const navigate = useNavigate();
  const handleClick=() => {
    navigate('/');
    window.scrollTo(0,0);
  }
  return (
    <Typography
      variant="h6"
      color={color ? color : colors.primary}
      sx={{
        fontWeight: "700",
        fontFamily: SYNE,
        lineHeight,
        fontStyle: 'normal',
        paddingTop: 0,
        paddingBottom: 0,
        '&:hover': {
          cursor: 'pointer'
        }
      }}
      onClick={handleClick}
    >
      SARISKA
    </Typography>
  );
};

export default Logo;
