import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { IconArrowsSort } from '@tabler/icons-react';
import { TextField, Grid, Button, IconButton, Popover, Switch, Typography } from "@mui/material";
import DrawerComponent from "../../../../../ui-component/Drawer";
import AddProvider from "../../feature/Add-Provider/add-provider-form";

const data = [
  {
    provider_group_name: "John Smith",
    specialty: "Arthopedics",
    address: "New York",
    contact: "+1 702 216 7305",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    address: "San Francisco",
    contact: "+1 702 216 7305",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    address: "San Francisco",
    contact: "+1 702 216 7305",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    address: "San Francisco",
    contact: "+1 702 216 7305",
  },
  {
    provider_group_name: "Aane Doe",
    specialty: "Nuro",
    address: "San Francisco",
    contact: "+1 702 216 7303",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    address: "San Francisco",
    contact: "+1 702 216 7304",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    address: "San Francisco",
    contact: "+1 702 216 7305",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    address: "San Francisco",
    contact: "+1 702 216 7305",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    address: "San Francisco",
    contact: "+1 702 216 7305",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    address: "San Francisco",
    contact: "+1 702 216 7305",
  },
  {
    provider_group_name: "Jane Doe",
    specialty: "Nuro",
    address: "San Francisco",
    contact: "+1 702 216 7305",
  },
];

const ProviderTable = () => {
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
      name: "Address",
      selector: "address",
      sortable: true,
    },
    {
      name: "Contact",
      selector: "contact",
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

  const [searchText, setSearchText] = useState("");
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedRow, setSelectedRow] = useState(null);
  console.log(selectedRow, "selectedRow");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const dataCard = () => {
    return (
      <Typography variant="h6">Drawer Content</Typography>
    )
  }

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

  const handleRowClick = (row) => {
    setSelectedRow(row);
    // You can perform any actions you need with the selected row here
    console.log("Selected Row:", row);
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
      handleClose();
      // Handle the edit action here
      console.log(`Editing row with ID ${row.id}`);
    };

    const handleDelete = () => {
      handleClose();
      // Handle the delete action here
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
          <Grid container>
            <IconButton onClick={handleEdit}>
              <Typography sx={{fontSize: '15px'}} >Edit</Typography>
            </IconButton>
            <IconButton onClick={handleDelete}>
              <Typography sx={{fontSize: '15px'}} >Block</Typography>
            </IconButton>
            <IconButton onClick={handleDelete}>
              <Typography sx={{fontSize: '15px'}} >Delete</Typography>
            </IconButton>
          </Grid>
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
    <Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
        <TextField
          variant="outlined"
          placeholder="Type here to serach"
          size="small"
          sx={{marginRight: 2}}
          value={searchText}
          onChange={handleSearch}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }}
        />
        <Button variant="contained" onClick={handleOpen}>Add Provider Group</Button>
      </Grid>
      <Grid item xs={12}>
        <DataTable
          columns={columns}
          data={filteredData}
          sortIcon={<IconArrowsSort size={18} marginLeft={1} />}
          // sortFunction={customSortFunction}
          // sortServer 
          // onSort={handleSort}
          // sortColumn={sortedColumn}
          // sortDirection={sortDirection}
          onRowClicked={handleRowClick} 
          highlightOnHover
          pointerOnHover
          pagination
        />
      </Grid>
      <DrawerComponent open={open} handleOpen={handleOpen} handleClose={handleClose} data={ AddProvider} />
    </Grid>
  );
};

function ProviderList() {
  return (
    <div className="App">
      <ProviderTable />
    </div>
  );
}

export default ProviderList;
