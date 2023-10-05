import { Grid, Switch, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

const NotificationSwitch = ({ name, label, info }) => {
  const formik = useFormikContext();

  const handleChange = () => {
    formik.setFieldValue(name, !formik.values[name]);
  };

  return (
    <Typography
      component="div"
      xs={12}
      sx={{
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <Grid xs={7}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginBottom: "4px",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>{label}:</span>
          <span style={{ fontWeight: "300", fontSize: "14px" }}>{info}</span>
        </div>
      </Grid>
      <Grid xs={2}>
        <div>
          <Switch
            checked={formik.values[name]}
            onChange={handleChange}
            name={name}
          />
        </div>
      </Grid>
    </Typography>
  );
};

export default NotificationSwitch;
