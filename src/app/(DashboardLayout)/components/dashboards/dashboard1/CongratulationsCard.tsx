import React from "react";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Grid,
  Avatar,
  Divider,
  MenuItem,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import CustomSelect from "../../forms/theme-elements/CustomSelect";
import SkeletonCongratulationsCard from "../skeleton/CongratulationsCard";
import Image from "next/image";

interface CongratsCardProps {
  isLoading: boolean;
}

const CongratulationsCard = ({ isLoading }: CongratsCardProps) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();
  const borderColor = theme.palette.divider;

  const primary = theme.palette.primary.main;
  const success = theme.palette.success.main;
  const successlight = theme.palette.success.light;
  const info = theme.palette.info.main;
  const infolight = theme.palette.info.light;
  const warning = theme.palette.warning.main;
  const warninglight = theme.palette.warning.light;

  const stats = [
    {
      title: "2 new suppliers",
      subtitle: "Processing",
      color: success,
      lightcolor: successlight,
      icon: "cart-3-line-duotone",
    },
    {
      title: "10 suppliers",
      subtitle: "On hold",
      color: warning,
      lightcolor: warninglight,
      icon: "pause-linear",
    },
    {
      title: "12 suppliers",
      subtitle: "Confirmed",
      color: info,
      lightcolor: infolight,
      icon: "delivery-linear",
    },
  ];

  // select
  const [month, setMonth] = React.useState("1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  // chart
  const optionscongratulatechart: any = {
    chart: {
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
      height: 260,
      type: "line",
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    grid: {
      show: true,
      borderColor: theme.palette.divider,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
      },
      type: "category",
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
     
      labels: {
        show: true,
        formatter: function (value: any) {
          return value + "k";
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescongratulatechart = [
    {
      color: primary,
      name: "",
      data: [0, 20, 15, 19, 14, 25, 32],
    },
    {
      color: info,
      name: "",
      data: [0, 12, 19, 13, 26, 16, 25],
    },
  ];

  return (
    <>
      {isLoading ? (
        <SkeletonCongratulationsCard />
      ) : (
        <Card
          sx={{
            padding: 0,
            border: !customizer.isCardShadow
              ? `1px solid ${borderColor}`
              : "none",
          }}
          elevation={customizer.isCardShadow ? 9 : 0}
          variant={!customizer.isCardShadow ? "outlined" : undefined}
        >
          <CardContent sx={{ position: "relative" }}>
            <Typography variant="h5">Welcome Anduril</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              You have become 0.4% more renewable over the past month.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack spacing={3} mt={3}>
                  {stats.map((stat, i) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="space-between"
                      alignItems="center"
                      key={i}
                    >
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar
                          sx={{
                            bgcolor: stat.lightcolor,
                            color: stat.color,
                            width: 46,
                            height: 46,
                          }}
                        >
                          <Icon icon={"solar:" + stat.icon} width="24" height="24" />
                        </Avatar>
                        <Box>
                          <Typography variant="h6" mb="4px">
                            {stat.title}
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary">
                            {stat.subtitle}
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
            {lgUp ? (
              <Image
                src="/images/backgrounds/new-man-working-on-laptop.png"
                alt="img"
                className="welcome-bg"
                width={280}
                height={240}
              />
            ) : (
              ""
            )}
          </CardContent>
          <Divider />
          <CardContent>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={"center"}
              mb={3}
            >
              <Box>
                <Typography variant="h5">Total Energy Output</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Weekly analysis
                </Typography>
              </Box>
              <CustomSelect
                labelId="month-dd"
                id="month-dd"
                size="small"
                value={month}
                onChange={handleChange}
              >
                <MenuItem value={1}>March 2023</MenuItem>
                <MenuItem value={2}>April 2023</MenuItem>
                <MenuItem value={3}>May 2023</MenuItem>
              </CustomSelect>
            </Stack>
            <Box height="260px">
              <Chart
                options={optionscongratulatechart}
                series={seriescongratulatechart}
                type="line"
                height={260}
                width={"100%"}
              />
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default CongratulationsCard;
