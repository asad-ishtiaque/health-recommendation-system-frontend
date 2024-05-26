import { Box, Typography } from "@mui/material";

function Header({ activeStep, totalSteps, title, subtitle }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="10px"
      pb="20px"
    >
      <Typography color="grey" noWrap pb="5px">
        STEP {activeStep}/{totalSteps}
      </Typography>
      <Typography noWrap fontSize="22px" fontWeight="bold">
        {title}
      </Typography>
      <Typography noWrap fontSize="18px" color='grey' >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
