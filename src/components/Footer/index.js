import {
    Box,
    Divider,
    Grid,
    styled,
    Typography,
    Link,
    Button,
} from "@mui/material";
import React from "react";
import { useNavigate, Link as NavLink } from "react-router-dom";
import { colors } from "../../assets/styles/_color";
import { COMPANY_REGISTERED_NAME, SYNE } from "../../constants";
import CentralContainer from "../CentralContainer";
import Logo from "../Logo";

const Container = styled(Box)(({ theme }) => ({
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "flex-end",
    backgroundColor: colors.mainHover,
    padding: "2.5rem 7.5rem 1rem 7.5rem",
    color: colors.white,
    [theme.breakpoints.down("md")]: {
        padding: "2.5rem 1rem 1rem 1rem",
    },
}));

const CategoryBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
        marginLeft: 0,
        marginTop: "40px",
    },
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: "700",
    color: colors.white,
    marginBottom: theme.spacing(4),
    fontFamily: SYNE,
}));

const SubTitleTypography = styled(Link)(({ theme }) => ({
    fontSize: "1rem",
    color: colors.white,
    marginBottom: theme.spacing(3),
    textDecoration: "none",
    "&:hover": {
        color: colors.highlight,
        cursor: "pointer",
    },
}));
const SubTitleButton = styled(Button)(({ theme }) => ({
    fontSize: "1rem",
    color: colors.white,
    marginBottom: theme.spacing(3),
    textDecoration: "none",
    padding: 0,
    textTransform: "inherit",
    lineHeight: "1.3",
    justifyContent: "flex-start",
    "&:hover": {
        color: colors.highlight,
        background: "transparent",
        cursor: "pointer",
    },
}));

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(`${url}`);
        window.scrollTo(0, 0);
    };

    return (
        <Container>
            <Box
                sx={{
                    width: "100%",
                    padding: "0px",
                }}
            >
                <CentralContainer>
                    <Box>
                        <Grid container>
                            <Grid item xs={12} md={5}>
                                <Box sx={{ marginTop: { xs: "36px", md: "0px" } }}>
                                    <Box mb={3}>
                                        <Logo
                                            height={"30px"}
                                            fontSize={"28px"}
                                            color={colors.white}
                                            lineHeight={1}
                                        />
                                    </Box>
                                    <Box mb={3}>
                                        <Typography
                                            sx={{
                                                textAlign: "justify",
                                                color: colors.highlight,
                                                fontSize: "0.8rem",
                                                maxWidth: { md: "320px", xs: "100%" },
                                            }}
                                        >
                                            Integrate real-time messaging, voice calls, conferencing,
                                            streaming and interactivity seamlessly with SARISKA’s
                                            cross-platform simplified SDKs
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid container item xs={12} md={7}>
                                <Grid item xs={12} md={4}>
                                    <CategoryBox>
                                        <TitleTypography>COMPANY</TitleTypography>
                                        <SubTitleButton
                                            onClick={() => handleClick("/about-us")}
                                            disableRipple={true}
                                        >
                                            About us
                                        </SubTitleButton>
                                        <SubTitleTypography
                                            href="https://sariska.notion.site/fc94410ab8af4dd796cbbe66d0866ef6?v=960ec16da9974bd48b305128a0dd1a90"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Careers
                                        </SubTitleTypography>
                                        <SubTitleTypography
                                            href="/privacy-policy"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Privacy Policy
                                        </SubTitleTypography>
                                    </CategoryBox>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <CategoryBox>
                                        <TitleTypography>DEVELOPERS</TitleTypography>
                                        <SubTitleTypography
                                            href="https://docs.sariska.io"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Docs
                                        </SubTitleTypography>
                                        <SubTitleTypography
                                            href="https://github.com/SariskaIO"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Resources
                                        </SubTitleTypography>
                                        <SubTitleTypography
                                            href="https://docs.sariska.io/setup/generating-the-api-key-for-your-project"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Setups
                                        </SubTitleTypography>
                                    </CategoryBox>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <CategoryBox>
                                        <TitleTypography>COMMUNITY</TitleTypography>
                                        <SubTitleTypography
                                            href="https://blog.sariska.io"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Blog
                                        </SubTitleTypography>
                                        <SubTitleTypography
                                            href="https://www.linkedin.com/company/sariska/about"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            LinkedIn
                                        </SubTitleTypography>
                                        <SubTitleTypography
                                            href="https://twitter.com/sariskaio"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            Twitter
                                        </SubTitleTypography>
                                    </CategoryBox>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>
                                <Typography sx={{ color: colors.tile, fontSize: "0.9rem" }}>
                                    Made in India
                                </Typography>
                            </Box>
                            <Box sx={{ display: { xs: "block", md: "none" } }}>
                                <NavLink
                                    to="/terms-of-service"
                                    style={{ color: colors.tile, fontSize: "0.9rem" }}
                                >
                                    Terms of Service
                                </NavLink>
                            </Box>
                        </Box>
                        <Divider
                            sx={{
                                borderColor: colors.whitePointOne,
                                marginTop: "8px",
                                marginBottom: "16px",
                            }}
                        />
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>
                                <Typography sx={{ color: colors.tile, fontSize: "0.9rem" }}>
                                    &copy; {COMPANY_REGISTERED_NAME} {new Date().getFullYear()}
                                </Typography>
                            </Box>
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <NavLink
                                    to="/terms-of-service"
                                    style={{ color: colors.tile, fontSize: "0.9rem" }}
                                >
                                    Terms of Service
                                </NavLink>
                            </Box>
                        </Box>
                    </Box>
                </CentralContainer>
            </Box>
        </Container>
    );
};

export default Footer;
