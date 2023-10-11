import { Tab, Tabs } from "@mui/material";
import React from "react";
import { useSettings } from "..";
import { changeNavTab } from "../../../../store/slices/NavTabsSlices";
import { useDispatch, useSelector } from "react-redux";

function NavTabs() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { a11TabsProps, value, setValue } = useSettings();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(changeNavTab(newValue));
  };

  function a11Tabs(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <>
      <Tabs
        value={store.navTabIndex.tabIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        xs={6}
        variant="scrollable"
      >
        {a11TabsProps.map((tab, id) => {
          return (
            <Tab
              label={tab.label}
              {...a11Tabs(id)}
              style={{ textTransform: 'none', fontSize:"17px" }}
              sx={{
                minWidth: 0,
              }}
            />
          );
        })}
      </Tabs>
    </>
  );
}

export default NavTabs;
