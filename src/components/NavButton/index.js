import { Box, Button, styled } from "@mui/material";
import React from "react";
import { colors } from "../../assets/styles/_color";

const NavButton = ({
    disabled,
    onClick,
    buttonText,
    width,
    href,
    height,
    marginRight,
    borderColor,
    textTransform,
    hover,
    cursor,
    disableRipple,
    fontWeight,
    fontSize,
    fontFamily,
    noBorder,
    color,
    borderRadius,
    padding,
    margin,
    background,
    marginLeft,
    display,
    marginTop,
    marginTopContainer,
    hoverBackground,
    hoverBorderColor,
    hoverColor,
    marginRightContainer
}) => {
    const StyledButton = styled(Button)(({ theme }) => ({
        color: color ? color : "blue",
        textDecoration: "none",
        border: `1px solid ${borderColor}`,
        padding: padding || "8px 16px",
        borderRadius: borderRadius || "10px",
        textTransform: textTransform || "capitalize",
        width: width || "115px",
        transition: `font-weight .5s all ease`,
        height: height || "fit-content",
        margin: margin ? margin : "auto",
        marginTop: marginTop,
        marginRight: marginRight,
        marginLeft: marginLeft,
        fontFamily: fontFamily ? fontFamily : `'Syne', sans-serif`,
        fontWeight: fontWeight,
        fontSize: fontSize && fontSize,
        background: background ? colors.primary : "transparent",
        "&:hover": {
            background: hover ? hoverBackground : "transparent",
            cursor: cursor,
            color: hover ? hoverColor : colors.white,
            borderColor: hover ? hoverBorderColor : colors.white,
        },
        [theme.breakpoints.down("md")]: {
            margin: "inherit",
            border: noBorder ? "none !important" : `1px solid ${borderColor}`,
            paddingLeft: noBorder && 0,
            justifyContent: noBorder && "flex-start",
        },
        [theme.breakpoints.between(900, 1100)]: {
            padding: '3px 10px',
            fontSize: '0.85rem'
        }
    }));
    return (
        <Box sx={{ marginTop: marginTopContainer, marginRight: marginRightContainer }}>
            {href ? (
                <StyledButton disabled={disabled} href={href}>
                    {buttonText}
                </StyledButton>
            ) : (
                <StyledButton
                    disabled={disabled}
                    onClick={onClick}
                    disableRipple={disableRipple}
                >
                    {buttonText}
                </StyledButton>
            )}
        </Box>
    );
};

export default NavButton;
