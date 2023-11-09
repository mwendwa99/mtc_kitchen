import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";

import footerBackground from "../assets/images/footer.png";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        backgroundImage: `url(${footerBackground})`,
        backgroundSize: "cover",
        color: "white",
        padding: "40px 0",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              About
            </Typography>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              SHOP
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              PLAN MY KITCHEN
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              ABOUT US
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              GALLERY
            </Link>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Service
            </Typography>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              FAQ
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              CONTACT
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              HOW TO BUY
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              DOWNLOADS
            </Link>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Info
            </Typography>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              DELIVERY
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              TERMS
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              PRIVACY
            </Link>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Follow
            </Typography>
            <Stack direction="row" spacing={2}>
              <img
                style={{ width: "30px", height: "30px" }}
                src={facebook}
                alt="facebook"
              />
              <img
                style={{ width: "30px", height: "30px" }}
                src={twitter}
                alt="twitter"
              />
              <img
                style={{ width: "30px", height: "30px" }}
                src={instagram}
                alt="instagram"
              />
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              Copyright Online MTC Home Kitchens 2018 - All rights reserved.
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: "block", marginBottom: 1 }}
            >
              Responsive website design, Development & Hosting by mtc.
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
