import { TextField } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { ITextField } from "./ITextField";
import PropTypes from "prop-types";

export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const { onChange = (e) => console.log(e), disabled = false } = props;
  return (
    <TextField
      id="title"
      label="Kuvaus"
      placeholder="Description"
      variant="outlined"
      size="small"
      name="Description"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
