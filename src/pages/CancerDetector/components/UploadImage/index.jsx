import { Box, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useRef } from "react";

function UploadImage({ image, setImage }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box width="40%">
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <Box
          display="flex"
          gap="20px"
          bgcolor="#F2F2F2"
          borderRadius="10px"
          height="50px"
          alignItems="center"
          padding="10px"
          color="#3d3d3d"
          sx={{ cursor: "pointer" }}
          onClick={handleButtonClick}
        >
          <ImageIcon />
          <Typography>{image ? image?.name : "Select File"}</Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          mt="40px"
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
    </Box>
  );
}

export default UploadImage;
