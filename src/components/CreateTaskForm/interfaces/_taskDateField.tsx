import React, { FC, ReactElement } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { IDateField } from "./IDAteField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  //  Destructure props
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
