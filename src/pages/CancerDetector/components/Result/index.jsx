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

export default function Result({ isLoading, data, isError, image }) {
  const perc = convertToPercentage(data?.result?.score);

  function convertToPercentage(num) {
    const percentage = num * 100;
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
              Predicted cancer result:
            </Typography>

            <Accordion defaultExpanded={true}>
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
                    {data?.result?.pred}
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
                    <BorderLinearProgress variant="determinate" value={perc} />
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
                          `https://en.wikipedia.org/wiki/${data?.result?.pred}`,
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
                <Typography>{data?.result?.message}</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="400px"
          >
            {image && (
              <Box
                component="img"
                borderRadius="20px"
                maxHeight="500px"
                maxWidth="500px"
                alt="The house from the offer."
                src={URL.createObjectURL(image)}
              />
            )}
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
