import { Box, Button, Typography } from "@mui/material";
import CancerType from "./components/CancerType";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Result from "./components/Result";
import {
  useCancerCheckMutation,
  useSymptomCheckMutation,
} from "../../cache/api";
import {
  resetCancerState,
  setCancerStep,
} from "../../cache/slices/cancerDetector";
import UploadImage from "./components/UploadImage";
import { useState } from "react";

function Stepper({ isLoading, data, image, setImage, isError }) {
  const { cancerActiveStep } = useSelector((state) => state.cancerDetector);

  switch (cancerActiveStep) {
    case 0:
      return <CancerType />;
    case 1:
      return <UploadImage image={image} setImage={setImage} />;
    case 2:
      return (
        <Result
          image={image}
          isLoading={isLoading}
          data={data}
          isError={isError}
        />
      );

    default:
      return null;
  }
}

function CancerDetector() {
  const [updatePost, result] = useCancerCheckMutation();
  const [image, setImage] = useState();
  const { isLoading, data, isError } = result;
  const { cancerActiveStep, type } = useSelector(
    (state) => state.cancerDetector
  );
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box flex="2">
        <Stepper
          isError={isError}
          isLoading={isLoading}
          data={data}
          image={image}
          setImage={setImage}
        />
      </Box>
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="10%"
        gap="40px"
      >
        {cancerActiveStep !== 0 ? (
          <Box
            color="grey"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(setCancerStep(cancerActiveStep - 1));
            }}
          >
            <ArrowBackIcon sx={{ height: "17px", width: "17px" }} />
            <Typography fontWeight="bold">Previous</Typography>
          </Box>
        ) : null}
        <Button
          sx={{ width: "150px" }}
          disabled={false}
          onClick={() => {
            if (cancerActiveStep == 1) {
              const formData = new FormData();
              formData.append("type", type);
              formData.append("file", image);
              updatePost(formData);
            }
            if (cancerActiveStep == 2) dispatch(resetCancerState());
            else dispatch(setCancerStep(cancerActiveStep + 1));
          }}
        >
          {cancerActiveStep == 2 ? "Reset" : "Next"}
        </Button>
      </Box>
    </Box>
  );
}

export default CancerDetector;
