import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setGender } from "../../../../cache/slices/symptomChecker";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";

function Gender() {
  const { gender } = useSelector((state) => state.symptomChecker);
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
        border={`3px solid ${gender === value ? "#E6535A" : "grey"}`}
        borderRadius="20px"
        color={gender === value ? "#E6535A" : "grey"}
        gap="20px"
        sx={{
          cursor: "pointer",
          background:
            gender === value
              ? "rgb(230, 83, 90, 0.04)"
              : "rgb(128, 128, 128, 0.04)",
        }}
        onClick={() => {
          dispatch(setGender(value));
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
        { text: "Male", Icon: MaleIcon, value: "male" },
        { text: "Female", Icon: FemaleIcon, value: "female" },
        { text: "Other", Icon: TransgenderIcon, value: "other" },
      ].map(({ text, Icon, value }) => (
        <Button text={text} Icon={Icon} value={value} key={value} />
      ))}
    </Box>
  );
}

export default Gender;
