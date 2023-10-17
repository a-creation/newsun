import { Typography, Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import { useTheme } from "@mui/material/styles";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import DashboardCard from "../../shared/DashboardCard";
import SkeletonCustomersCard from "../skeleton/CustomerCard";


interface CustomersCardProps {
  isLoading: boolean;
  wind: Array<{ Consumption: number, Cost: number, Hour: string }>;
  solar: Array<{ Consumption: number, Cost: number, Hour: string }>; 
}

const Customers = ({ isLoading, wind, solar }: CustomersCardProps) => {
  const solarCons = solar.map(item => Math.ceil(item.Consumption * 100) / 100);
  const windCons = wind.map(item => Math.ceil(item.Consumption * 100) / 100);
  const gasCons = Array.from({ length: windCons.length }, () => 100);
  const renewablePercents = gasCons.map((value, i) => Math.ceil((solarCons[i] + windCons[i]) / (solarCons[i] + windCons[i] + value) * 10000) / 100);
  const days = wind.map(item => (new Date(item.Hour).getMonth().toString() + "/" + new Date(item.Hour).getDate().toString() + " " + new Date(item.Hour).getHours().toString() + ":00"));

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.light;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 103,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
      type: "category",
      categories: days,
    },
    colors: [primary, secondary],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.05,
        opacityTo: 0,
        stops: [20, 180],
      },
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [
    {
      name: '% kWh',
      data: renewablePercents,
    },
  ];

  return (
    <>
       {isLoading ? (
        <SkeletonCustomersCard />
      ) : (
        <DashboardCard
      title="Renewables (% kWh)"
      subtitle="Last 7 days"
      action={
        <Box textAlign="right">
          <Typography variant="h5" display="block">
            15.5%
          </Typography>
          <Box
            bgcolor="success.light"
            color="success.main"
            fontSize="12px"
            p="0px 7px"
            border="1px solid "
            borderRadius={2}
          >
            +0.5%
          </Box>
        </Box>
      }
    >
      <>
        <Box mt={5}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="area"
            height={103}
            width={"100%"}
          />
        </Box>

        <Stack direction="row" spacing={2} mt={4}>
          <Typography variant="subtitle1" color="textSecondary">
            April 07 - April 14
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            ml="auto !important"
          >
            14.5%
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} mt={1}>
          <Typography variant="subtitle1" color="textSecondary">
            Last Week
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            ml="auto !important"
          >
            18.3%
          </Typography>
        </Stack>
      </>
    </DashboardCard>
      )}
    </>
    
  );
};

export default Customers;
