import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import MoreIcon from "@mui/icons-material/MoreVert";
import Switch from "@mui/material/Switch";
import { Grid, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router";
import { customDataTableStyles } from "../../../../ccm-constant";

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

  const [searchText, setSearchText] = useState("");
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [open, setOpen] = useState(false);

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
      navigate("/settings/adminUser/profile", { state: { edit: true } });
    };

    const handleProfileView = () => {
      navigate("/settings/adminUser/profile", { state: { edit: false } });
    };

    const handleDelete = () => {
      handleClose();
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
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
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
      // const newStatus = checked ? "Off" : "On";
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataTable
                columns={columns}
                data={filteredData}
                onRowClicked={() =>
                  navigate("/settings/adminUser/profile", {
                    state: { edit: false },
                  })
                }
                sortIcon={<ChevronDown />}
                sortServer
                onSort={handleSort}
                sortColumn={sortedColumn}
                sortDirection={sortDirection}
                pagination
                customStyles={customDataTableStyles}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

function ProviderUser() {
  return <MyDataTable />;
}

export default ProviderUser;
