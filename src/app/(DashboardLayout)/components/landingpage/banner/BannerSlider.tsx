import React from "react";
import { Box, Avatar } from "@mui/material";
import Image from "next/image";

const BannerSlider = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Box
          width="100%"
          sx={{
            animation: "45s linear 0s infinite normal none running slide",
          }}
        >
          <img src="/images/landingpage/slider-group.png" alt="bg-img" />
        </Box>
        <Box
          width="100%"
          sx={{
            animation: "45s linear 0s infinite normal none running slide",
          }}
        >
          <img src="/images/landingpage/slider-group.png" alt="bg-img" />
        </Box>
        <Box
          width="100%"
          sx={{
            animation: "45s linear 0s infinite normal none running slide",
          }}
        >
          <img src="/images/landingpage/slider-group.png" alt="bg-img" />
        </Box>
        <Box
          width="100%"
          sx={{
            animation: "45s linear 0s infinite normal none running slide",
          }}
        >
          <img src="/images/landingpage/slider-group.png" alt="bg-img" />
        </Box>
        <Box
          width="100%"
          sx={{
            animation: "45s linear 0s infinite normal none running slide",
          }}
        >
          <img src="/images/landingpage/slider-group.png" alt="bg-img" />
        </Box>
      </Box>
    </Box>
  );
};

export default BannerSlider;
