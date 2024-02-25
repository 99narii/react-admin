import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

// 샘플 데이터
const data = [
  { name: '1번', uv: 4000, pv: 2400, amt: 2400 },
  { name: '2번', uv: 3000, pv: 1398, amt: 2210 },
  { name: '3번', uv: 2000, pv: 9800, amt: 2290 },
  { name: '4번', uv: 2780, pv: 3908, amt: 2000 },
  { name: '5번', uv: 1890, pv: 4800, amt: 2181 },
  { name: '6번', uv: 2390, pv: 3800, amt: 2500 },
  { name: '7번', uv: 3490, pv: 4300, amt: 2100 },
];

const DashboardGraph = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard with Graphs
      </Typography>
      <Grid container spacing={3}>
        {/* 막대 그래프 */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Bar Chart
            </Typography>
            <BarChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>
        {/* 라인 그래프 */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Line Chart
            </Typography>
            <LineChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardGraph;
