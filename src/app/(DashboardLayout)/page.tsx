"use client";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import CongratulationsCard from "@/app/(DashboardLayout)/components/dashboards/dashboard1/CongratulationsCard";
import Payments from "@/app/(DashboardLayout)/components/dashboards/dashboard1/Payments";
import Products from "@/app/(DashboardLayout)/components/dashboards/dashboard1/Products";
import LatestDeals from "@/app/(DashboardLayout)/components/dashboards/dashboard1/LatestDeals";
import Customers from "@/app/(DashboardLayout)/components/dashboards/dashboard1/Customers";
import ProductTable from "@/app/(DashboardLayout)/components/dashboards/dashboard1/ProductTable";
import VisitUsa from "@/app/(DashboardLayout)/components/dashboards/dashboard1/VisitUsa";
import LatestReviews from "@/app/(DashboardLayout)/components/dashboards/dashboard1/LatestReviews";
import Welcome from "@/app/(DashboardLayout)/layout/shared/welcome/Welcome";

export default function Dashboard() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://climate-api-xzt5k2hfiq-ue.a.run.app/getData')
      .then((response) => response.json())
      .then((data) => setData(data));
    setLoading(false);
  }, []);

  var emissions = [];
  var solar = [];
  var wind = [];
  if (Object.keys(data).length != 0) {
    emissions = data.emissions;
    solar = data.solar;
    wind = data.wind;
  }
  console.log(emissions);
  console.log(data);
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <CongratulationsCard isLoading={isLoading} solar={solar} wind={wind} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6} sm={6}>
                <Payments isLoading={isLoading} emissions={emissions} />
              </Grid>
              <Grid item xs={12} lg={6} sm={6}>
                <Products isLoading={isLoading} solar={solar} wind={wind} />
              </Grid>
              <Grid item xs={12} lg={6} sm={6}>
                <LatestDeals solar={solar} wind={wind}/>
              </Grid>
              <Grid item xs={12} lg={6} sm={6}>
                <Customers isLoading={isLoading} solar={solar} wind={wind} />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <ProductTable />
          </Grid>
          <Grid item xs={12} lg={4}>
            <VisitUsa />
          </Grid>
          {/* <Grid item xs={12}>
            <LatestReviews />
          </Grid> */}
        </Grid>
        {/* <Welcome /> */}
      </Box>
    </PageContainer>
  );
}
