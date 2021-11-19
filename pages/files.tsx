import { Box, Button, Grid, Paper } from "@mui/material";
import React from "react";

export default function Files() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={7} sx={{ p: 1 }}>
          <Paper sx={{ width: "100%", p: 1 }}>Current Path : /</Paper>
        </Grid>
        <Grid item xs={3} sx={{ p: 1 }}>
          <Paper sx={{ width: "100%", p: 1 }}>Upload File</Paper>
        </Grid>
        <Grid item xs={2} sx={{ p: 1 }}>
          <Button variant="contained" sx={{ height: "100%" }}>
            Create Directory
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ p: 1 }}>
          <Paper sx={{ height: "600px", width: "100%" }}></Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
