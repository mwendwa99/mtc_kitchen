import { Box, Grid, Typography, Button } from "@mui/material";

import discover from "../assets/images/discover.png";

export default function SecondSection() {
  return (
    <Box>
      <Grid container sx={{ p: 0, m: 0 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ p: 0, m: 0, width: "100%", height: "100%" }}
        >
          <img
            src={discover}
            alt="discover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "100%",
              p: 4,
            }}
          >
            <Typography
              variant="subtitle1"
              align="left"
              sx={{ color: "#D4B254" }}
            >
              Quality Craftmanship from build to delivery
            </Typography>
            <Typography gutterBottom variant="h4">
              Discover the beauty of a handmade kitchen
            </Typography>
            <Typography gutterBottom variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget est sit amet sapien venenatis maximus vel in urna. Nam mauris
              arcu, feugiat in finibus vitae, sollicitudin id purus. Ut
              imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
            </Typography>
            <Button sx={{ width: "fit-content", mt: 2 }} variant="contained">
              About Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
