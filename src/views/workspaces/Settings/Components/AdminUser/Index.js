import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import MoreIcon from "@mui/icons-material/MoreVert";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Switch from "@mui/material/Switch";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  TextField,
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import UserProfileDetails from "../AdminUser/UserProfileDetails";
import { useNavigate } from "react-router";

const data = [
  {
    provider_group_name: "John Smith",
    specialty: "Arthopedics",
    email: "Admin.123@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    email: "Admin.asdf@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    email: "Admin.hjgf@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    email: "Admin.rdds@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    email: "Admin.gfdsa@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    email: "Admin.1123@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    email: "Admin.qwe@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    email: "Admin.asd@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    email: "Admin.1sdd@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    email: "Admin.1@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    email: "Admin.12@gmail.com",
    last_login: "Fri Jun 2023 4:34:45",
  },
];

const MyDataTable = () => {
  const navigate = useNavigate();
  const columns = [
    {
      name: "Provider Group Name",
      selector: "provider_group_name",
      sortable: true,
    },
    {
      name: "Specialty",
      selector: "specialty",
      sortable: true,
    },
    {
      name: "Email Id",
      selector: "email",
      sortable: true,
    },
    {
      name: "Last Login ",
      selector: "last_login",
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => <StatusSwitch status={row.status} />,
    },
    {
      name: "Action",
      cell: (row) => <MoreButton row={row} />,
    },
  ];

  const [showProfile, setShowProfile] = useState(false);
  const [edit, setEdit] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.provider_group_name
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      item.specialty.toLowerCase().includes(searchText.toLowerCase()) ||
      item.address.toLowerCase().includes(searchText.toLowerCase()) ||
      item.address.toLowerCase().includes(searchText.toLowerCase()) ||
      item.contact.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSort = (column, sortDirection) => {
    setSortedColumn(column);
    setSortDirection(sortDirection);
  };

  const MoreButton = ({ row }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleEdit = () => {
      //   handleClose();
        setShowProfile(true);
      //   setEdit(true);
      navigate("/settings/adminUser/profile", { state: { edit: true } });
      console.log(`Editing row with ID ${row.id}`);
    };

    const handleProfileView = () => {
      //   handleClose();
        setShowProfile(true);
      //   setEdit(false);
      //   window.location.href="/settings/adminUser/profile"
      navigate("/settings/adminUser/profile", { state: { edit: false } });
    };

    const handleDelete = () => {
      handleClose();
      console.log(`Deleting row with ID ${row.id}`);
    };

    return (
      <div>
        <IconButton onClick={handleClick}>
          <MoreIcon />
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            //   onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleProfileView}>Profile</MenuItem>
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </Popover>
      </div>
    );
  };

  const StatusSwitch = ({ status }) => {
    const [checked, setChecked] = useState(status === "On");

    const handleChange = () => {
      setChecked(!checked);
      // You can handle the status change here and update your data accordingly
      const newStatus = checked ? "Off" : "On";
      console.log(`Status changed to ${newStatus}`);
    };

    return (
      <div>
        <Switch
          checked={checked}
          onChange={handleChange}
          color="primary"
          inputProps={{ "aria-label": "status switch" }}
        />
      </div>
    );
  };

  return (
    <>
      <Grid container spacing={2} padding={3} sx={2}>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent sx={{ alignItems: "center" }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", justifyContent: "start" }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: "20px",
                      display: "flex",
                    }}
                  >
                    Settings
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  padding={0}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Type to search here"
                    size="small"
                    sx={{ marginRight: "30px" }}
                    value={searchText}
                    onChange={handleSearch}
                  />
                  <Button variant="contained">Add admin user</Button>
                </Grid>

                <Grid item xs={12}>
                  <DataTable
                    title="Admin user"
                    columns={columns}
                    data={filteredData}
                    onRowClicked={()=> navigate("/settings/adminUser/profile", { state: { edit: false } })}
                    sortIcon={<ChevronDown />}
                    // sortFunction={customSortFunction}
                    sortServer // Set this to true if you're using server-side sorting
                    onSort={handleSort}
                    sortColumn={sortedColumn}
                    sortDirection={sortDirection}
                    pagination
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

function AdminUser(props) {
  console.log("props", props);
  return <MyDataTable />;
}

export default AdminUser;
