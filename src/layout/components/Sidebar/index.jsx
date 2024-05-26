import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { LOGO_IMG } from "../../../assets/img";
import { Typography } from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";

const drawerWidth = 350;

export default function Sidebar({ activeStep, links, totalSteps }) {
  const dispatch = useDispatch();
  const percent = ((activeStep + 1) / totalSteps) * 100;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        display="flex"
        gap="20px"
        alignItems="center"
        justifyContent="center"
        padding="10px"
        p="40px"
      >
        <Box
          component="img"
          sx={{
            height: 40,
            width: 40,
          }}
          src={LOGO_IMG}
        />
        <Typography fontSize="20px" fontWeight="bold" letterSpacing="2px">
          HEALTH PORTAL
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Box sx={{ position: "relative" }}>
          <CircularProgress
            variant="determinate"
            sx={{
              color: "#B34046",
            }}
            size={150}
            thickness={3}
            value={100}
          />
          <CircularProgress
            variant="determinate"
            sx={{
              color: "white",
              animationDuration: "550ms",
              position: "absolute",
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
              },
            }}
            size={150}
            thickness={3}
            value={percent}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color="white"
              fontSize="20px"
              fontWeight="bold"
              letterSpacing="2px"
              pb="5px"
            >
              {`${percent.toFixed(0)}%`}
            </Typography>
            <Typography color="white" fontSize="15px" letterSpacing="2px">
              STEP {activeStep + 1}/{totalSteps}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        padding="30px"
      >
        {links.map(({ Icon, title }, i) => {
          const active = i === activeStep;
          return (
            <Box
              display="flex"
              alignItems="center"
              gap="20px"
              key={title}
              p="10px"
              m="10px"
              sx={{
                borderLeft: active ? "3px solid white" : "",
                paddingLeft: active ? "10px" : "13px",
                transition: "border-color 0.3s ease",
              }}
            >
              <Icon fontSize="large" />
              <Typography fontWeight="bold">{title}</Typography>
            </Box>
          );
        })}
      </Box>
    </Drawer>
  );
}
