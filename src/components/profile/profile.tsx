import { Avatar, Box, Typography } from "@mui/material";
import React, { FC, ReactElement } from "react";

export const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: "96px",
          height: "96px",
          backgroundColor: "primary.main",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h4" color="text.primary">
          P
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Tervetuloa, Piia
      </Typography>
      <Typography variant="body1" color="text.primary">
        Tämä on henkilökohtainen tehtävämanagerisi
      </Typography>
    </Box>
  );
};
