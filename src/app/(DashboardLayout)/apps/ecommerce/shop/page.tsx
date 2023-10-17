"use client"

import React from 'react';
import { Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ProductList from '@/app/(DashboardLayout)/components/apps/ecommerce/productGrid/ProductList';
import ProductSidebar from '@/app/(DashboardLayout)/components/apps/ecommerce/productGrid/ProductSidebar';
import AppCard from '@/app/(DashboardLayout)/components/shared/AppCard';

const Ecommerce = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(true);

  return (
    <PageContainer title="Shop" description="this is Shop">
      <AppCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}
        <ProductSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}
        <Box p={3} flexGrow={1}>
          <ProductList onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)} />
        </Box>
      </AppCard>
    </PageContainer>
  );
};

export default Ecommerce;
