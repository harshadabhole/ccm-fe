import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Box,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import userImage from "../../../../../assets/avatar-s-11.jpg";
import { Formik, Field, Form } from "formik";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useLocation } from "react-router";

const containerStyle = {
  position: "relative",
};

const avatarStyle = {
  position: "relative",
  height: 200,
  background:
    'url("https://www.shutterstock.com/shutterstock/photos/1416955070/display_1500/stock-vector-abstract-medical-background-with-flat-icons-and-symbols-template-design-with-concept-and-idea-for-1416955070.jpg")',
  backgroundSize: "cover",
  backgroundColor: "rgba(246, 242, 242, 0.2)",
};

const userProfileStyle = {
  position: "absolute",
  bottom: 0,
  left: 5,
  width: "100%",
  display: "flex",
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

function UserProfileDetails() {
  const location = useLocation();
  const editMode = location.state?.edit;
  // const [editMode, setEditMode] = useState(edit);
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
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  const handleCancelClick = () => {
    // setEditMode(false);
  };

  const handleSaveClick = (values) => {
    // setEditMode(false);
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
    <Grid container spacing={2} padding={3} sx={containerStyle}>
      <Grid item xs={12}>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent sx={{ alignItems: "center" }}>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSaveClick}
              enableReinitialize
            >
              {({ values }) => (
                <Form>
                  <Grid
                    container
                    spacing={2}
                    padding={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between", // Add this line
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

                      {editMode && (
                        <span>
                          <Button
                            variant="outlined"
                            onClick={handleCancelClick}
                            sx={{ marginRight: "10px" }}
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            variant="contained"
                            onClick={() => handleSaveClick(values)}
                          >
                            Save
                          </Button>
                        </span>
                      )}
                    </>
                  </Grid>
                  <Grid item xs={12} padding={1}>
                    <Box style={avatarStyle} sx={{ marginBottom: "30px" }}>
                      <Box style={userProfileStyle}>
                        <div style={imageContainerStyle}>
                          <Avatar
                            alt="User Profile Photo"
                            src={selectedImage}
                            sx={{
                              width: 150,
                              height: 150,
                              borderRadius: 0,
                              marginBottom: "0px",
                            }}
                          />
                          {editMode && (
                            <label
                              htmlFor="image-upload"
                              style={cameraIconStyle}
                            >
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
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12} sm={6}>
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
                              <Grid container xs={12} spacing={2}>
                                <Grid item xs={4}>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      // marginRight: "10px",
                                    }}
                                  >
                                    {field.label}
                                  </span>
                                </Grid>
                                <Grid item xs={8}>
                                  {!editMode && (
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
                            {editMode && (
                              <Field
                                as={TextField}
                                fullWidth
                                multiline={field.multiline || false}
                                name={field.key}
                                sx={{
                                  marginBottom: "10px",
                                  boxShadow: 3,
                                  width: "90%",
                                }}
                              />
                            )}
                          </React.Fragment>
                        ))}
                      </Grid>
                      <Grid item xs={12} sm={6}>
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
                              <Grid container xs={12} spacing={2}>
                                <Grid item xs={4}>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      // marginRight: "10px",
                                    }}
                                  >
                                    {field.label}
                                  </span>
                                </Grid>
                                <Grid item xs={8}>
                                  {!editMode && (
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
                            {editMode && (
                              <Field
                                as={TextField}
                                fullWidth
                                multiline={field.multiline || false}
                                name={field.key}
                                sx={{
                                  marginBottom: "10px",
                                  boxShadow: 3,
                                  width: "90%",
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UserProfileDetails;
