import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
      />
    </Stack>
  );
}
