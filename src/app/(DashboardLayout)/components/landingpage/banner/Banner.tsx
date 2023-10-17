import React from "react";
import {
  Grid,
  Box,
  Container,
  useMediaQuery,
  Stack,
  Theme,
} from "@mui/material";
import BannerContent from "./BannerContent";
import Image from "next/image";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <Box my={10} sx={{ overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={11} sm={10}>
            <BannerContent />
          </Grid>
          
        </Grid>
      </Container>
      <BannerSlider />
    </Box>
  );
};

export default Banner;
