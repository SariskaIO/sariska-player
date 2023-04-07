import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavButton from "../NavButton";
import { colors } from "../../assets/styles/_color";
import { IconButton, Menu, MenuItem, styled, Typography } from "@mui/material";
import Logo from "../Logo";
import CentralContainer from "../CentralContainer";

const StyledMenu = styled(Menu)(({ theme }) => ({
    display: "none",
    "& .MuiPaper-root": {
        background: colors.white,
        borderRadius: "15px",
        boxShadow: "none",
        "& ul": { background: colors.white, color: colors.textColor },
    },
    [theme.breakpoints.down("md")]: {
        display: "block",
        maxWidth: "100%",
        "& .MuiPaper-root": {
            borderRadius: 0,
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            // maxHeight: '100%',
            left: "0 !important",
            top: "57px !important",
        },
    },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    //borderBottom: `1px solid ${colors.whitePointOne}`,
    fontFamily: `'DM Sans', sans-serif`,
    fontSize: "0.9rem",
    width: "100%",
    textAlign: "center",
    paddingLeft: "40px",
    "&:hover": {
        border: `1px solid ${colors.whitePointOne}`,
        background: colors.whitePointOne,
    },
    [theme.breakpoints.down("md")]: {
        paddingLeft: "18px",
        paddingTop: "24px",
        paddingBottom: "24px",
    },
    "& p": {
        [theme.breakpoints.down("md")]: {
            fontSize: "1.2rem",
        },
    },
}));

const Navbar = ({
    anchorElNav,
    setAnchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
}) => {
    const StyledButton = styled(Button)(({ theme }) => ({
        my: 2,
        display: "block",
        textTransform: "capitalize",
        color: colors.textColor,
        fontWeight: "300",
        marginLeft: "0px",
        fontFamily: `'DM Sans', sans-serif`,
        fontSize: "0.99rem",
        border: `1px solid transparent`,
        borderRadius: "10px",
        textAlign: "center",
        width: "fit-content",
        minWidth: 'fit-content',
        padding: '6px 12px',
        "&:hover": {
            border: `1px solid ${colors.whitePointOne}`,
            background: colors.whitePointOne,
            color: colors.primary,
        },
    }));

    const pages = [
        "Docs",
        "Source"
    ];

    const handleClick = (index) => {
        if (index === 0) {
            window.open("https://docs.sariska.io/", "_blank", "noopener,noreferrer");
        }
        if (index === 1) {
            window.open("https://github.com/SariskaIO/sariska-player.git", "_blank", "noopener,noreferrer");
        }
        setAnchorElNav(null);
    }

    return (
        <AppBar
            position={'sticky'}
            sx={{ backgroundColor: colors.white, boxShadow: "none", top: 0, padding: { xs: '0 1rem', md: '0 3rem', lg: '0 7.5rem' } }}
        >
            <CentralContainer>
                <Toolbar
                    disableGutters
                    sx={{ flexWrap: 'wrap', minHeight: { md: '64px', xs: '56px' } }}
                >
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        <Logo />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="main menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            sx={{
                                float: "right",
                                color: colors.textColor,
                                paddingRight: {
                                    xs: "0px !important",
                                    md: "16px !important",
                                }
                            }}
                            disableRipple={true}
                        >
                            {anchorElNav ? <CloseIcon onClick={handleCloseNavMenu} /> : <MenuIcon onClick={handleOpenNavMenu} />}
                        </IconButton>
                        <StyledMenu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "center",
                                horizontal: "center",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "center",
                                horizontal: "center",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page, index) => (
                                <Fragment key={page}>
                                    <StyledMenuItem key={page} onClick={() => handleClick(index)}>
                                        <Typography sx={{ textAlign: "left", width: "100%", fontFamily: `'Syne', sans-serif` }}>
                                            {page}
                                        </Typography>
                                    </StyledMenuItem>
                                </Fragment>
                            ))}
                            <MenuItem
                                sx={{
                                    ml: { md: "20px" },
                                    paddingLeft: { xs: "24px", md: "16px" },
                                    paddingTop: { xs: "22px", md: "8px" },
                                }}
                            >
                                <NavButton
                                    buttonText={"Start building"}
                                    borderColor={colors.secondaryLight}
                                    fontSize="1.2rem"
                                    fontFamily={`'DM Sans', sans-serif`}
                                    noBorder="true"
                                    disableRipple={true}
                                    color={colors.primary}
                                    marginLeft={'-5px !important'}
                                    fontWeight={'400'}
                                    padding={'0'}
                                    onClick={() =>
                                        window.open("https://console.sariska.io", "_blank")
                                    }
                                />
                            </MenuItem>
                        </StyledMenu>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: 'space-between', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Logo />
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: '18px' }}>
                                {pages.map((page, index) => (
                                    <Fragment key={page}>
                                        <StyledButton onClick={() => handleClick(index)}
                                            sx={theme => ({
                                                // marginRight: "12px",
                                                padding: '6px 18px',
                                                [theme.breakpoints.between(1100, 1250)]: {
                                                    padding: '6px 14px'
                                                },
                                                [theme.breakpoints.between(900, 1100)]: {
                                                    padding: '6px 4px',
                                                    fontSize: '0.85rem'
                                                }
                                            })}>
                                            {page}
                                        </StyledButton>

                                    </Fragment>
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <NavButton
                                buttonText={"Start building"}
                                borderColor={colors.primary}
                                color={colors.white}
                                hover="true"
                                background={colors.primary}
                                hoverBackground={colors.mainHover}
                                hoverBorderColor={colors.primary}
                                hoverColor={colors.white}
                                fontFamily={`'DM Sans', sans-serif`}
                                fontSize="0.9rem"
                                fontWeight={'700'}
                                width="100%"
                                padding={"4px 12px"}
                                borderRadius={'5.5px'}
                                marginRight={"12px"}
                                onClick={() =>
                                    window.open("https://console.sariska.io", "_blank")
                                }
                            />
                        </Box>
                    </Box>
                </Toolbar>
            </CentralContainer>
        </AppBar>
    );
};
export default Navbar;
