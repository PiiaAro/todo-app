import { Grid } from "@mui/material";
import React, { FC, ReactElement } from "react";

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <Grid item md={8} px={4}>
        <h2>This is content and task area</h2>
      </Grid>
    </Grid>
  );
};
