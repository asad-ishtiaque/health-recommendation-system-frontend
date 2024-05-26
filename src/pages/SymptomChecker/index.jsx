import { Box, Button, Typography } from "@mui/material";
import Details from "./components/Details";
import Gender from "./components/Gender";
import Symptoms from "./components/Symptoms";
import { useDispatch, useSelector } from "react-redux";
import {
  setSymptomStep,
  resetSymptomState,
} from "../../cache/slices/symptomChecker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Result from "./components/Result";
import { useSymptomCheckMutation } from "../../cache/api";

function Stepper({ isLoading, data, isError }) {
  const { symptomActiveStep } = useSelector((state) => state.symptomChecker);

  switch (symptomActiveStep) {
    case 0:
      return <Details />;
    case 1:
      return <Gender />;
    case 2:
      return <Symptoms />;
    case 3:
      return <Result isLoading={isLoading} data={data} isError={isError} />;

    default:
      return null;
  }
}

function SymptomChecker() {
  const [updatePost, result] = useSymptomCheckMutation();
  const { isLoading, data, isError } = result;
  const { symptomActiveStep, symptoms, firstName, lastName, age } = useSelector(
    (state) => state.symptomChecker
  );
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box flex="2">
        <Stepper isLoading={isLoading} data={data} isError={isError} />
      </Box>
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="10%"
        gap="40px"
      >
        {symptomActiveStep !== 0 ? (
          <Box
            color="grey"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(setSymptomStep(symptomActiveStep - 1));
            }}
          >
            <ArrowBackIcon sx={{ height: "17px", width: "17px" }} />
            <Typography fontWeight="bold">Previous</Typography>
          </Box>
        ) : null}
        <Button
          sx={{ width: "150px" }}
          disabled={
            (symptomActiveStep === 0 &&
              (firstName === "" || lastName === "" || age === "")) ||
            (symptomActiveStep === 2 && symptoms.length < 2)
          }
          onClick={() => {
            if (symptomActiveStep == 2) updatePost(symptoms);
            if (symptomActiveStep == 3) dispatch(resetSymptomState());
            else dispatch(setSymptomStep(symptomActiveStep + 1));
          }}
        >
          {symptomActiveStep == 3 ? "Reset" : "Next"}
        </Button>
      </Box>
    </Box>
  );
}

export default SymptomChecker;
