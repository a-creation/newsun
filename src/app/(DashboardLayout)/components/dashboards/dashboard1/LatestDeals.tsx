import React from "react";
import {
  Typography,
  Box,
  AvatarGroup,
  Avatar,
  Stack,
  LinearProgress,
} from "@mui/material";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import DashboardCard from "../../shared/DashboardCard";

interface LatestDealsProps {
  wind: Array<{ Consumption: number, Cost: number, Hour: string }>;
  solar: Array<{ Consumption: number, Cost: number, Hour: string }>; 
}

const LatestDeals = ({ wind, solar }: LatestDealsProps) => {
  const solarCost = solar.reduce((accumulator, current) => accumulator + (Math.ceil(current.Cost * 100) / 100), 0);
  const windCost = wind.reduce((accumulator, current) => accumulator + (Math.ceil(current.Cost * 100) / 100), 0);
  const budget = 22890.00;
  const percent = Math.ceil((solarCost + windCost) / budget * 10000) / 100;

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const info = theme.palette.info.main;
  const error = theme.palette.error.main;

  return (
    <DashboardCard
      title="Renewables Cost"
      subtitle="Last 7 days"
      action={
        <Box
          bgcolor="success.light"
          color="success.main"
          fontSize="12px"
          p="0px 7px"
          border="1px solid "
          borderRadius={2}
        >
          {percent}% of Budget
        </Box>
      }
    >
      <>
        <Box>
          <Stack direction="row" justifyContent="space-between" mb={1} mt={5}>
            <Typography variant="h5">${Math.ceil((solarCost + windCost) * 100) / 100}</Typography>
            <Typography variant="h6" display="flex" alignItems="center">$122,900</Typography>
          </Stack>
          <LinearProgress value={percent} variant="determinate" />
          <Typography variant="subtitle1" color="textSecondary" mt={1}>Suppliers used: 14</Typography>

        </Box>
        <Typography variant="h6" fontSize="14px" mt={7} mb={1}>
          Recent Suppliers
        </Typography>
        <Stack justifyContent="start">
          <AvatarGroup total={12} sx={{ justifyContent: "flex-end" }}>
            <Avatar
              sx={{ width: 35, height: 35 }}
              alt="Remy Sharp"
              src={"/images/profile/user1.jpg"}
            />
            <Avatar
              sx={{ width: 35, height: 35 }}
              alt="Travis Howard"
              src={"/images/profile/user2.jpg"}
            />
            <Avatar
              sx={{ width: 35, height: 35 }}
              alt="Cindy Baker"
              src={"/images/profile/user3.jpg"}
            />
            <Avatar
              sx={{ width: 35, height: 35 }}
              alt="Agnes Walker"
              src={"/images/profile/user4.jpg"}
            />
            <Avatar
              sx={{ width: 35, height: 35 }}
              alt="Agnes Walker"
              src={"/images/profile/user5.jpg"}
            />
          </AvatarGroup>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default LatestDeals;
