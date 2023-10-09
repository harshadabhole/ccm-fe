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
import { useLocation,  useNavigate } from "react-router";

const containerStyle = {
  position: "relative",
};

const avatarStyle = {
  position: "relative",
  height: 200,
  // background:
  //   'url("https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg")',
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
  display: 'flex',
  alignItems: 'center',
};

const cameraIconStyle = {
  position: "absolute",
  bottom: "-25px",
  left: "70px",
  transform: "translateX(-50%)",
  backgroundColor: "white",
  borderRadius: "50%",
};

const fields = [
  { label: "provider Group name", key: "name" },
  { label: "Specialty", key: "specialty" },
  { label: "Website", key: "website" },
  { label: "Phone number", key: "phoneNumber" },
  { label: "Email", key: "email" },
  { label: "Billing Address", key: "billingAddress" },
  // { label: "Role", key: "role" },
  { label: "Physical address", key: "physicalAddress" },
  {
    label: "Bio",
    key: "bio",
    multiline: true,
  },
];

function UserProfileDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  // const editMode = location.state?.edit;
  const [editMode, setEditMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState("https://cdn.britannica.com/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg");
  const initialValues = {
    name: "New York Hospital",
    specialty: "Orthologist",
    website: "www.hospital.com",
    phoneNumber: "123-567-8901",
    email: "Orthologist@gmail.com",
    billingAddress: "Baner, Pune.",
    // role: "Admin",
    physicalAddress: "Baner, Pune.",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleSaveClick = (values) => {
    // setEditMode(false);
    console.log("Saved values:", values);
  };

  const handleEditClick = () => {
    setEditMode(true); // Turn on edit mode when edit button is clicked
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
          <CardContent sx={{
            alignItems: "center",
            background:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_Bev4NJU77CE7Rf9oSbGJBiUGmyYEo1Nu2DsQKs6UAgqlSSjmLW3WJ1PTm6vzDHQj5I&usqp=CAU")',
          }}>
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
                      {editMode ? ( // Render edit or view mode based on editMode state
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
                      ) : (
                        <Button variant="contained" onClick={handleEditClick}>
                          Edit Provider Group
                        </Button>
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
                              height: 130,
                              borderRadius: 0,
                              marginBottom: "0px",
                              borderRadius: 2,
                              border: '1px solid #FFFF'
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
