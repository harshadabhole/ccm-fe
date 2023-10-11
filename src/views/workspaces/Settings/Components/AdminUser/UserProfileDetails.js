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
import { useLocation, useNavigate } from "react-router";

const containerStyle = {
  position: "relative",
};

const avatarStyle = {
  position: "relative",
  height: 200,
  background:
    'url("https://img.freepik.com/premium-vector/light-blue-vector-background-with-bubbles_6869-1244.jpg?size=626&ext=jpg")',
  backgroundSize: "cover",
  backgroundColor: "rgba(211, 200, 200, 0.5)",
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
  const navigate = useNavigate();
  const editMode = location.state?.edit;
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

  const handleCancelClick = () => {};

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

                      {
                        <span>
                          <Button
                            variant="outlined"
                            onClick={() =>
                              navigate("/settings", {
                                state: { index: 2 },
                              })
                            }
                            style={{
                              marginRight: "15px",
                              textTransform: "none",
                              width: "163px",
                            }}
                            sx={{ marginRight: "10px" }}
                          >
                            Cancel
                          </Button>
                          {editMode && (
                            <Button
                              type="submit"
                              variant="contained"
                              style={{
                                marginRight: "15px",
                                textTransform: "none",
                                width: "163px",
                              }}
                              onClick={() => handleSaveClick(values)}
                            >
                              Save
                            </Button>
                          )}
                        </span>
                      }
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
                      <Grid item xs={12} md={12} lg={6} sm={12}>
                        {leftFields.map((field) => (
                          <React.Fragment key={field.key}>
                            <Grid container xs={12} spacing={2}>
                              <Grid item xs={6} md={4} lg={4} sm={5}>
                                <Typography
                                  variant="subtitle1"
                                  component="div"
                                  sx={{
                                    marginBottom: "5px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {field.label}
                                </Typography>
                              </Grid>
                              <Grid item xs={6} md={8} lg={8} sm={7}>
                                {!editMode && (
                                  <>
                                    <Typography
                                      variant="body1"
                                      component="div"
                                      sx={{ marginBottom: "5px", }}
                                    >
                                      :&nbsp;&nbsp;&nbsp;
                                      {values[field.key]}
                                    </Typography>
                                  </>
                                )}
                              </Grid>
                            </Grid>

                            {editMode && (
                              <Grid container xs={12} >
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
                              </Grid>
                            )}
                          </React.Fragment>
                        ))}
                      </Grid>
                      <Grid item xs={12} md={12} lg={6} sm={12}>
                        {rightFields.map((field) => (
                          <React.Fragment key={field.key}>
                          
                              <Grid container xs={12} spacing={2}>
                                <Grid item xs={12} md={4} lg={4} sm={5}>
                                  <Typography
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                      marginBottom: "5px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {field.label}
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} md={8} lg={8} sm={7}>
                                  {!editMode && (
                                    <>
                                      <Typography
                                        variant="body1"
                                        component="div"
                                        sx={{ marginBottom: "5px" }}
                                      >
                                        :&nbsp;&nbsp;&nbsp;
                                        {values[field.key]}
                                      </Typography>
                                    </>
                                  )}
                                </Grid>
                              </Grid>
                            {editMode && (
                              <Grid container xs={12} >
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
                              </Grid>
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
