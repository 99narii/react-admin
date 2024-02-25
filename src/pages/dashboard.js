import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import DashboardGraph from './dashboardGraph';

const Dashboard = () => {
  // 예제 데이터
  const cards = [
    { title: 'Users', value: 10 },
    { title: 'Posts', value: 5 },
    { title: 'Comments', value: 22 },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="h5">
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <DashboardGraph></DashboardGraph>
    </Box>
    
  );
};

export default Dashboard;
