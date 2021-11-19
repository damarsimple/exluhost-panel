import { PlayCircleOutline, Stop, RestartAlt } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";

import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const Home: NextPage = () => {
  return (
    <Grid container sx={{ minHeight: "100%" }}>
      <Grid item xs={9}>
        <Grid container>
          <Grid item xs={6}>
            <Paper sx={{ m: 1 }}>
              <Box sx={{ display: "flex", p: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography variant="h6" component="h1">
                    Server Name
                  </Typography>
                  <Box>
                    <Typography>Minecraft 1.17.1</Typography>
                    <Button>Change</Button>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  p: 5,
                }}
              >
                <IconButton sx={{ backgroundColor: "#cccccc", marginRight: 1 }}>
                  <PlayCircleOutline />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#fb785c", marginRight: 1 }}>
                  <Stop />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#f0c600", marginRight: 1 }}>
                  <RestartAlt />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper sx={{ m: 1 }}>
              <Box sx={{ p: 1 }}>
                <Typography variant="h6" component="h2">
                  Resource Usage
                </Typography>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6" component="h2">
                      CPU
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgressWithLabel value={10} />
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6" component="h2">
                      Memory
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgressWithLabel value={10} />
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6" component="h2">
                      SSD
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgressWithLabel value={10} />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ height: "600px", m: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  p: 1,
                  height: "50px",
                }}
              >
                <Typography variant="h6" component="h2">
                  Console Preview
                </Typography>
                <Button>Copy Output</Button>
              </Box>
              <Box sx={{ height: "550px", backgroundColor: "black" }}></Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ m: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
            <TextField label="Server Name" variant="outlined" />
            <TextField label="Server Type" variant="outlined" />
            <TextField label="Server Location" variant="outlined" />
            <TextField label="IP Address" variant="outlined" />
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField label="Memory" variant="outlined" />
              <TextField label="Max Players" variant="outlined" />
            </Box>
            <TextField label="World" variant="outlined" />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
