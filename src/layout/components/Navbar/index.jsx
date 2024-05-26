import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Sidebar from "../Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import WcIcon from "@mui/icons-material/Wc";
import BiotechIcon from "@mui/icons-material/Biotech";
import ArticleIcon from "@mui/icons-material/Article";
import ChecklistIcon from "@mui/icons-material/Checklist";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import Header from "../Header";
import { Button } from "@mui/material";

const drawerWidth = 350;
const routeLabels = {
  "/symptom_checker": "Health Recommender System",
  "/cancer_detector": "Cancer Detector",
};

export default function Navbar({ page }) {
  const { pathname } = useLocation();
  const { symptomActiveStep } = useSelector((state) => state.symptomChecker);
  const { cancerActiveStep } = useSelector((state) => state.cancerDetector);
  const navigate = useNavigate();

  const activeSteps = {
    "/symptom_checker": symptomActiveStep,
    "/cancer_detector": cancerActiveStep,
  };

  const links = {
    "/symptom_checker": [
      { Icon: PersonIcon, title: "Details" },
      { Icon: WcIcon, title: "Gender" },
      { Icon: BiotechIcon, title: "Symptoms" },
      { Icon: ArticleIcon, title: "Result" },
    ],
    "/cancer_detector": [
      { Icon: ChecklistIcon, title: "Cnacer Type" },
      { Icon: PhotoSizeSelectActualIcon, title: "Image Upload " },
      { Icon: ArticleIcon, title: "Result" },
    ],
  };

  const titles = {
    "/symptom_checker": {
      0: "Set Details",
      1: "Select Gender",
      2: "Add Symptoms",
      3: "Result",
    },
    "/cancer_detector": {
      0: "Cancer Type",
      1: "Select Image",
      2: "Result",
    },
  };

  const subtitles = {
    "/symptom_checker": {
      0: "Please enter you correct name and age",
      1: "Please select your gender",
      2: "Please add atleast two symptoms. The symptoms must be relevant.",
      3: "",
    },
    "/cancer_detector": {
      0: "Please select your cancer type",
      1: "Please upload a clear image of your affected area of your Skin or CT-Scan of your lungs",
      2: "",
    },
  };

  const activeStep = activeSteps[pathname];
  const link = links[pathname];
  const title = titles[pathname][activeStep];
  const subtitle = subtitles[pathname][activeStep];

  const unset = { background: "white", color: "black" };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="grey" noWrap>
            {routeLabels[pathname]}
          </Typography>
          <Box display="flex" gap="10px">
            <Button
              sx={pathname !== "/symptom_checker" ? unset : {}}
              onClick={() => {
                navigate("/symptom_checker");
              }}
            >
              Health Recommender System
            </Button>
            <Button
              sx={pathname !== "/cancer_detector" ? unset : {}}
              onClick={() => {
                navigate("/cancer_detector");
              }}
            >
              Cancer Detector
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar activeStep={activeStep} links={link} totalSteps={link.length} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Header
          activeStep={activeStep + 1}
          totalSteps={link.length}
          title={title}
          subtitle={subtitle}
        />
        {page}
      </Box>
    </Box>
  );
}
