import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React from "react";

const FieldWithVisibilityToggle = ({
  name,
  lables,
  show,
  handleToggleVisibility,
}) => (
  <Grid key={name} item>
    <Typography
      variant="subtitle1"
      htmlFor={name}
      sx={{ fontSize: "18px", marginBottom: "3px" ,fontWeight: "500"}}
    > 
      {lables}
    </Typography>
    <Paper sx={{ marginBottom: 2, boxShadow: "3", border: "0" }}>
      <Field
        as={TextField}
        fullWidth
        size="small"
        name={name}
        type={show ? "text" : "password"}
        on={(e)=>{console.log("e",name, e.target.value)}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleToggleVisibility(name)}
                onMouseDown={(e) => e.preventDefault()}
              >
                {show ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
    <ErrorMessage
      name={name}
      component="div"
      style={{ color: "red", fontSize: "14px" }}
    />
  </Grid>
);

export default FieldWithVisibilityToggle;
