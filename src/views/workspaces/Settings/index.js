import React, { createContext, useContext, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import NavTabs from "./Components/NavTabs";
import Profile from "./Components/Profile";
import NotificationSettings from "./Components/NotificationSettings";
import ProviderUser from "./Components/ProviderUser";
import AuditLog from "./Components/AuditLog";
import DrawerComponent from "../../../ui-component/Drawer";
import ChangeMyPassword from "./Components/ChangePassword";
import AddProvider from "./Components/AdminUser/feature/add-provider-form";
import { useSelector } from "react-redux";
import AuditEvent from "./Components/AuditEvent";

const SettingsContext = createContext();

export const useSettings = () => {
  return useContext(SettingsContext);
};
function Settings() {
  const store = useSelector((state) => state);
  const [value, setValue] = useState(store.navTabIndex.tabIndex);
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAddProvider, setAddProvider] = useState(false);

  const tabComponents = {
    0: <Profile />,
    1: <NotificationSettings />,
    2: <ProviderUser />,
    3: <AuditLog />,
    4: <AuditEvent />,
    5: <p className="text-center m-5 ">Not implemented</p>,
    6: <p className="text-center m-5 ">Not implemented</p>,
    7: <p className="text-center m-5 ">Not implemented</p>,
    8: <p className="text-center m-5 ">Not implemented</p>,
  };

  const a11TabsProps = [
    {
      label: "Profile",
    },
    {
      label: "Notification Settings",
    },
    {
      label: "Provider Admin",
    },
    {
      label: "Audit Log",
    },
    {
      label: "Audit Event",
    },
    {
      label: "EHR Setting",
    },
    {
      label: "EHR Sync",
    },
    {
      label: "EHR Audit",
    },
    {
      label: "EHR Error",
    },
  ];

  const headerButtonRender = {
    0: (
      <>
        {!edit && (
          <>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginRight: "15px", textTransform: 'none', width:"263px" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              Change Password
            </Button>
            <Button
              variant="contained"
              color="primary"
              className=""
              style={{ marginRight: "8px", textTransform: 'none', width:"263px" }}
              onClick={() => setEdit(!edit)}
            >
              Edit Profile
            </Button>
          </>
        )}
        {edit && (
          <>
            <Button
              variant="outlined"
              color="error"
              style={{ marginRight: "15px", textTransform: 'none', width:"263px"  }}
              onClick={() => {
                setEdit(!edit);
                // alert("Reset data ");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "8px", textTransform: 'none', width:"263px"  }}
              onClick={() => {
                alert("Successfully saved");
                // setEdit(!edit)
              }}
            >
              Save
            </Button>
          </>
        )}
      </>
    ),
    1: (
      <>
        <TextField
          variant="outlined"
          placeholder="Type to search here"
          size="small"
          sx={{ marginRight: "30px" }}
          // value={searchText}
          // onChange={handleSearch}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "8px", textTransform: 'none', width:"263px"  }}
          // onClick={handleSubmit}
        >
          Set Default
        </Button>
      </>
    ),
    2: (
      <>
        <>
          <TextField
            variant="outlined"
            placeholder="Type to search here"
            size="small"
            sx={{ marginRight: "30px" }}
            // value={searchText}
            // onChange={handleSearch}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "8px", textTransform: 'none', width:"263px"  }}
            onClick={() => setAddProvider(true)}
          >
            Add provider user
          </Button>
        </>
      </>
    ),
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAddProvider = () => {
    setAddProvider(false);
  };

  return (
    <SettingsContext.Provider value={{ value, setValue, a11TabsProps, edit }}>
      <Grid
        container
        spacing={1}
        padding={5}
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{ width: "100%", boxShadow: "5", minHeight: "86vh" }}>
          <Grid
            container
            xs={12}
            padding={2}
            sx={{ flex: 1, alignItems: "center", marginBottom: "10px" }}
          >
            <Grid item xs={6}>
              <Typography variant="h6">
                Settings
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              {headerButtonRender[value]}
            </Grid>
          </Grid>



          <Box  sx={{ marginBottom: 3 }}>
            <NavTabs
              a11TabsProps={a11TabsProps}
              value={value}
              setValue={setValue}
            />
          </Box>

          <Box>{tabComponents[value]}</Box>

          <DrawerComponent
            open={open}
            handleClose={handleClose}
            data={<ChangeMyPassword handleClose={handleClose} />}
          />
          <DrawerComponent
            open={openAddProvider}
            handleClose={handleCloseAddProvider}
            data={<AddProvider handleClose={handleCloseAddProvider} />}
          />
        </Card>
      </Grid>
    </SettingsContext.Provider>
  );
}

export default Settings;
