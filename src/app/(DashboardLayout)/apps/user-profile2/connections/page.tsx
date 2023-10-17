"use client"

import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ProfileBanner from '@/app/(DashboardLayout)/components/apps/userprofile2/profile/ProfileBanner';
import GalleryCard from '@/app/(DashboardLayout)/components/apps/userprofile2/connections/GalleryCard';


const Gallery = () => {
  return (
    <PageContainer title="Gallery" description="this is Gallery">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
        <Grid item sm={12}>
        <Box mx={3}>
          <GalleryCard />
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Gallery;
