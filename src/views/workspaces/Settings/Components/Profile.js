import React, { useState } from "react";
import {
  Grid,
  Typography,
  Avatar,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import userImage from "../../../../assets/avatar-s-11.jpg";
import { Formik, Field, Form } from "formik";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useSettings } from "..";

const containerStyle = {
  position: "relative",
};

const avatarStyle = {
  position: "relative",
  height: 200,
  backgroundSize: "cover",
};

const userProfileStyle = {
  position: "relative",
  bottom: 0,
  left: 5,
  width: "100%",
  flexDirection: "column",
  padding: "0px 16px",
  color: "#fff",
};

const imageContainerStyle = {
  position: "relative",
};

const cameraIconStyle = {
  position: "absolute",
  bottom: "-25px",
  left: "4rem",
  transform: "translateX(-50%)",
  backgroundColor: "white",
  borderRadius: "50%",
};

const fields = [
  { label: "Specialty", key: "specialty" },
  { label: "Display name", key: "displayName" },
  { label: "Full name", key: "fullName" },
  { label: "Phone number", key: "phoneNumber" },
  { label: "Email", key: "email" },
  { label: "NPI number", key: "npiNumber" },
  { label: "Role", key: "role" },
  { label: "Physical address", key: "physicalAddress" },
  {
    label: "Bio",
    key: "bio",
    multiline: true,
  },
];

function Profile() {
  const { edit } = useSettings();
  const [selectedImage, setSelectedImage] = useState(userImage);
  const initialValues = {
    specialty: "Orthologist",
    displayName: "Alex",
    fullName: "Alex qwerty",
    phoneNumber: "123-567-8901",
    email: "Orthologist@gmail.com",
    npiNumber: "1234567890",
    role: "Admin",
    physicalAddress: "Baner, Pune.",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  };

  const handleSaveClick = (values) => {
    console.log("Saved values:", values);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const leftFields = fields.slice(0, 6);
  const rightFields = fields.slice(6, 9);

  return (
    <Grid item spacing={1} padding={3} sx={containerStyle}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSaveClick}
        enableReinitialize
      >
        {({ values }) => (
          <Form>
            <Grid
              container
              sx={{
                margins: "5px 20px",
                alignItems: "center",
              }}
            >
              <>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginBottom: "0px" }}
                >
                  Profile
                </Typography>
              </>
            </Grid>
            <Grid item xs={12} padding={1}>
              <Grid container xs={12} spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box style={avatarStyle} sx={{ marginBottom: "30px" }}>
                    <Box style={userProfileStyle}>
                      <div style={imageContainerStyle}>
                        <Avatar
                          alt="User Profile Photo"
                          src={selectedImage}
                          sx={{
                            width: 200,
                            height: 200,
                            borderRadius: "50%",
                            marginBottom: "0px",
                          }}
                        />
                        {edit && (
                          <label htmlFor="image-upload" style={cameraIconStyle}>
                            <input
                              id="image-upload"
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              style={{ display: "none" }}
                            />
                            <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                            >
                              <PhotoCameraIcon />
                            </IconButton>
                          </label>
                        )}
                      </div>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  {leftFields.map((field) => (
                    <React.Fragment key={field.key}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          marginBottom: "10px",
                          fontSize: "18px",
                          display: "flex",
                        }}
                      >
                        <Grid container xs={12} spacing={1}>
                          <Grid item xs={edit ? 12 : 4}>
                            <span
                              style={{
                                fontWeight: "bold",
                                // marginRight: "10px",
                              }}
                            >
                              {field.label}
                            </span>
                          </Grid>
                          <Grid item xs={edit ? 12 : 8}>
                            {!edit && (
                              <>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    marginRight: "5px",
                                  }}
                                >
                                  :{" "}
                                </span>
                                <span style={{ fontWeight: "400" }}>
                                  {values[field.key]}
                                </span>
                              </>
                            )}
                          </Grid>
                        </Grid>
                      </Typography>
                      {edit && (
                        <Field
                          as={TextField}
                          fullWidth
                          multiline={field.multiline || false}
                          name={field.key}
                          sx={{
                            marginBottom: "10px",
                            boxShadow: 3,
                            width: "100%",
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </Grid>
                <Grid item xs={12} sm={4}>
                  {rightFields.map((field) => (
                    <React.Fragment key={field.key}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          marginBottom: "10px",
                          fontSize: "18px",
                          display: "flex",
                        }}
                      >
                        <Grid container xs={12} spacing={1}>
                          <Grid item xs={edit ? 12 : 4}>
                            <span
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              {field.label}
                            </span>
                          </Grid>
                          <Grid item xs={edit ? 12 : 8}>
                            {!edit && (
                              <>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    marginRight: "5px",
                                  }}
                                >
                                  :{" "}
                                </span>
                                <span style={{ fontWeight: "400" }}>
                                  {values[field.key]}
                                </span>
                              </>
                            )}
                          </Grid>
                        </Grid>
                      </Typography>
                      {edit && (
                        <Field
                          as={TextField}
                          fullWidth
                          multiline={field.multiline || false}
                          name={field.key}
                          sx={{
                            marginBottom: "10px",
                            boxShadow: 3,
                            width: "100%",
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}

export default Profile;
