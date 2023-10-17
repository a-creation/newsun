import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import DashboardCard from "../../shared/DashboardCard";
import SkeletonProductsCard from "../skeleton/ProductCard";

interface ProductsCardProps {
  isLoading: boolean;
  wind: Array<{ Consumption: number, Cost: number, Hour: string }>;
  solar: Array<{ Consumption: number, Cost: number, Hour: string }>; 
}

const Products = ({ isLoading, wind, solar }: ProductsCardProps) => {
  const gasTotal = 6720.20;
  const windTotal = wind.reduce((accumulator, current) => accumulator + (Math.ceil(current.Consumption * 100) / 100), 0);
  const solarTotal = solar.reduce((accumulator, current) => accumulator + (Math.ceil(current.Consumption * 100) / 100), 0);
  const total = gasTotal + windTotal + solarTotal;

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const info = theme.palette.info.main;
  const error = theme.palette.error.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "donut",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 170,
      stacked: true,
    },
    labels: ["Solar", "Wind", "Gas"],
    colors: [primary, error, info],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "85%",
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: true,
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [Math.ceil(solarTotal/total * 100), Math.ceil(windTotal/total * 100), Math.ceil(gasTotal/total * 100)];

  return (
    <>
      {isLoading ? (
        <SkeletonProductsCard />
      ) : (
        <DashboardCard
          title="Energy Types (% kWh)"
          subtitle="Last 7 Days"
          action={
            <Box textAlign="right">
              <Typography variant="h5" display="block">
                3
              </Typography>
              {/* <Box
                bgcolor="success.light"
                color="success.main"
                fontSize="12px"
                p="0px 7px"
                border="1px solid "
                borderRadius={2}
              >
                +26.5%
              </Box> */
              // TODO: Removed for project
              }
            </Box>
          }
        >
          <>
            <Box className="rounded-bars" mt={5}>
              <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="donut"
                height={170}
                width={"100%"}
              />
            </Box>

            {/* <Typography
              variant="subtitle1"
              color="textSecondary"
              textAlign="center"
              mt={2}
            >
              Solar, Wind, Gas
            </Typography> */}
          </>
        </DashboardCard>
      )}
    </>
  );
};

export default Products;
