import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import DashboardCard from "../../shared/DashboardCard";
import { IconCircle } from "@tabler/icons-react";
import SkeletonPaymentsCard from "../skeleton/PaymentsCard";

interface PaymentsCardProps {
  isLoading: boolean;
  emissions: Array<{ Emit: number, Day: string }>;
}

const Payments = ({ isLoading, emissions }: PaymentsCardProps) => {
  const emits = emissions.map(item => Math.ceil(item.Emit * 100) / 100);
  const totalEmits = emissions.reduce((accumulator, current) => accumulator + Math.ceil(current.Emit), 0);
  const days = emissions.map(item => [(new Date(item.Day).getMonth().toString() + "/" + new Date(item.Day).getDate().toString())]);

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.light;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 150,
      stacked: true,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        // barHeight: "90%",
        columnWidth: "26%",
        borderRadius: [3],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },

    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      categories: days,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (value: any) {
          return value + " kt CO2";
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [
    {
      name: "kt CO2",
      data: emits,
    },
    // {
    //   name: "This Year ",
    //   data: [71, 71, 71, 71, 71, 71, 71],
    // },
  ];

  return (
    <>
      {isLoading ? (
        <SkeletonPaymentsCard />
      ) : (
        <DashboardCard
          title="Emissions (kt Co2)"
          subtitle="Last 7 Days"
          action={
            <Box textAlign="left">
              <Typography variant="h5" display="block">
                { totalEmits }
              </Typography>
              {/* <Box
                bgcolor="warning.light"
                color="warning.main"
                fontSize="12px"
                p="0px 7px"
                border="1px solid "
                borderRadius={2}
              >
                -3.08%
              </Box> */}
            </Box>
          }
        >
          <>
            <Box className="rounded-bars" mt={-3} height="150px">
              <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                height={150}
                width={"100%"}
              />
            </Box>

            {/* <Stack direction="row" spacing={2} mt={3}>
              <Box color="primary.main" display="flex" alignItems="center">
                <IconCircle size={16} />
              </Box>
              <Typography variant="subtitle1" color="textSecondary">
                Gas
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                ml="auto !important"
              >
                52%
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} mt={1}>
              <Box color="secondary.light" display="flex" alignItems="center">
                <IconCircle size={16} />
              </Box>
              <Typography variant="subtitle1" color="textSecondary">
                Electric
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                ml="auto !important"
              >
                48%
              </Typography>
            </Stack> */
            // TODO: Removed for project
            }
          </>
        </DashboardCard>
      )}
    </>
  );
};

export default Payments;
