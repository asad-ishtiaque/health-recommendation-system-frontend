import { Autocomplete, Box, Chip, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSymptoms } from "../../../../cache/slices/symptomChecker";
import { SymptomsArray, CommonSymptoms } from "../../../../constants/symptoms";
import CloseIcon from "@mui/icons-material/Close";

function Symptoms() {
  const { symptoms } = useSelector((state) => state.symptomChecker);
  const dispatch = useDispatch();

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box width="40%">
        <Autocomplete
          disableClearable
          value={symptoms}
          onChange={(event, newValue) => {
            dispatch(setSymptoms(newValue));
          }}
          sx={{ marginBottom: "40px" }}
          multiple
          limitTags={2}
          options={SymptomsArray}
          getOptionLabel={(option) => option.symptom}
          filterSelectedOptions
          renderTags={() => null}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search, e.g headache"
              fullWidth
            />
          )}
        />

        <Box
          display="flex"
          alignItems="center"
          gap="10px"
          flexWrap="wrap"
          maxHeight="250px"
          overflow="auto"
        >
          {symptoms.map(({ symptom, syd }) => (
            <Chip
              label={symptom}
              color="primary"
              key={syd}
              onDelete={() => {
                dispatch(setSymptoms(symptoms.filter((s) => s.syd !== syd)));
              }}
              deleteIcon={<CloseIcon />}
            />
          ))}
        </Box>

        <Typography color="grey" m="20px 0">
          Common symptoms:
        </Typography>

        <Box display="flex" alignItems="center" gap="10px" flexWrap="wrap">
          {CommonSymptoms.map(({ symptom, syd }) => {
            const present = symptoms.findIndex((s) => s.syd === syd) !== -1;
            return (
              <Chip
                label={symptom}
                color="primary"
                variant={present ? "" : "outlined"}
                key={syd}
                onClick={() => {
                  if (present)
                    dispatch(
                      setSymptoms(symptoms.filter((s) => s.syd !== syd))
                    );
                  else {
                    const newData = [...symptoms];
                    const body = SymptomsArray.find((s) => s.syd === syd);
                    newData.push(body);
                    dispatch(setSymptoms(newData));
                  }
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Symptoms;
