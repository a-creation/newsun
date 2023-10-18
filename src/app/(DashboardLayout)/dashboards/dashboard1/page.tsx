"use client";
import React from "react";
import { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";
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
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      
    </PageContainer> 
  );
}
