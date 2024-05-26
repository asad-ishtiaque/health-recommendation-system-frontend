import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { setType } from "../../../../cache/slices/cancerDetector";
import MasksIcon from "@mui/icons-material/Masks";

function CancerDetector() {
  const { type } = useSelector((state) => state.cancerDetector);
  const dispatch = useDispatch();

  function Button({ Icon, text, value }) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="300px"
        height="300px"
        border={`3px solid ${type === value ? "#E6535A" : "grey"}`}
        borderRadius="20px"
        color={type === value ? "#E6535A" : "grey"}
        gap="20px"
        sx={{
          cursor: "pointer",
          background:
            type === value
              ? "rgb(230, 83, 90, 0.04)"
              : "rgb(128, 128, 128, 0.04)",
        }}
        onClick={() => {
          dispatch(setType(value));
        }}
      >
        <Icon sx={{ height: "100px", width: "100px" }} />
        <Typography fontSize="17px" fontWeight="bold">
          {text}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      gap="40px"
    >
      {[
        { text: "Skin Cancer", Icon: PsychologyAltIcon, value: "skin" },
        { text: "Lung Cancer", Icon: MasksIcon, value: "lung" },
      ].map(({ text, Icon, value }) => (
        <Button text={text} Icon={Icon} value={value} key={value} />
      ))}
    </Box>
  );
}

export default CancerDetector;
