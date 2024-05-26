import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Skeleton,
} from "@mui/material";
import { useSelector } from "react-redux";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#E6535A",
  },
}));

export default function Result({ isLoading, data, isError }) {
  const { firstName, lastName, gender, symptoms, age } = useSelector(
    (state) => state.symptomChecker
  );

  function convertToPercentage(num) {
    const adjustedNum = num + 1;
    const percentage = adjustedNum * 50;
    return percentage;
  }

  return !isLoading ? (
    <Box>
      {isError ? (
        <Typography textAlign="center" m="20px" color="red" fontWeight="bold">
          Api Failed
        </Typography>
      ) : (
        <Box display="flex" gap="50px" justifyContent="center">
          <Box width="50%">
            <Typography
              color="grey"
              m="20px 0"
              fontSize="18px"
              fontWeight="bold"
            >
              Conditions that match your symptoms:
            </Typography>
            {data[0].recommended_diseases.map(
              (
                {
                  diagnose: condition,
                  similarity_score: match,
                  recommended_treatment: summary,
                },
                i
              ) => {
                const perc = convertToPercentage(match);
                return (
                  <Accordion key={i} defaultExpanded={i === 0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Box width="95%">
                        <Typography
                          mb="7px"
                          sx={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          fontWeight="600"
                        >
                          {condition}
                        </Typography>
                        <Box width="150px">
                          <Typography
                            fontSize="12px"
                            fontWeight="bold"
                            color="grey"
                            pb="5px"
                            whiteSpace="nowrap"
                          >
                            Match Probability
                          </Typography>
                          <BorderLinearProgress
                            variant="determinate"
                            value={perc}
                          />
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Divider sx={{ position: "relative", bottom: "15px" }} />
                      {
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography fontWeight="bold" color="grey" pb="20px">
                            Recomended Treatment:
                          </Typography>
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            bgcolor="#E6535A"
                            p="5px 7px"
                            color="white"
                            borderRadius="5px"
                            sx={{
                              position: "relative",
                              bottom: "15px",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              window.open(
                                `https://en.wikipedia.org/wiki/${condition}`,
                                "_blank"
                              );
                            }}
                          >
                            <Typography fontSize="12px" fontWeight="bold">
                              Wiki
                            </Typography>
                          </Box>
                        </Box>
                      }
                      <Typography>{summary}</Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              }
            )}
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            display="flex"
            gap="20px"
            flexDirection="column"
            justifyContent="center"
          >
            {[
              { title: "Name", value: firstName + " " + lastName },
              { title: "Gender", value: gender },
              { title: "Age", value: age },
              {
                title: "My Symptoms",
                value: symptoms.map(({ symptom }) => symptom).join(", "),
              },
            ].map(({ title, value }, i) => (
              <Box key={i}>
                <Typography fontWeight="bold">{title + ":"}</Typography>
                <Typography>{value}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box width="60%">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88].map(
          (i) => (
            <Skeleton animation="wave" key={i} />
          )
        )}
      </Box>
    </Box>
  );
}
