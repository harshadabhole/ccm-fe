import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import MoreIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Switch from "@mui/material/Switch";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField, Grid, Button} from "@mui/material";

const data = [
  {  provider_group_name: "John Smith", specialty: 'Arthopedics', address: "New York", contact: '+1 702 216 7305' },
  {  provider_group_name: "Jane Doe", specialty: 'Nuro', address: "San Francisco", contact: '+1 702 216 7305' },
  {  provider_group_name: "Jane Doe", specialty: 'Nuro', address: "San Francisco", contact: '+1 702 216 7305' },
  {  provider_group_name: "Jane Doe", specialty: 'Nuro', address: "San Francisco", contact: '+1 702 216 7305' },
  {  provider_group_name: "Jane Doe", specialty: 'Nuro', address: "San Francisco", contact: '+1 702 216 7305' },
  {  provider_group_name: "Jane Doe", specialty: 'Nuro', address: "San Francisco", contact: '+1 702 216 7305' },
  {  provider_group_name: "Jane Doe", specialty: 'Nuro', address: "San Francisco", contact: '+1 702 216 7305' },
  {  provider_group_name: "Jane Doe", specialty: 'Nuro', address: "San Francisco", contact: '+1 702 216 7305' },
  {  provider_group_name: "Jane Doe", specialty: 'Nuro', address: "San Francisco", contact: '+1 702 216 7305' },
  {  provider_group_name: "Jane Doe", specialty: 'Nuro', address: "San Francisco", contact: '+1 702 216 7305' },
  {  provider_group_name: "Jane Doe", specialty: 'Nuro', address: "San Francisco", contact: '+1 702 216 7305' },

];



const MyDataTable = () => {


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
      cell: (row) => (
        <StatusSwitch status={row.status} />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <MoreButton row={row} />
      ),
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.provider_group_name.toLowerCase().includes(searchText.toLowerCase()) ||
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
          <div>
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </Popover>
      </div>
    );
  };
  
  const handleOption1 = () => {
    
  }

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
    <Grid >
      <Button item xs={12} sx={{display: 'flex', justifyContent: 'end'}}>
      <Button
        variant="conatined"
      />
      </Button>
      <Grid item xs={12} sx={{display: 'flex', justifyContent: 'end'}}>
      <TextField
        variant="outlined"
        placeholder="Search by Name"
        size="small"
        value={searchText}
        onChange={handleSearch}
      />
      </Grid>
      <Grid item xs={12}>
      <DataTable
        // title="Employee List"
        columns={columns}
        data={filteredData}
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
  );
};

function ProviderGroupTable() {
  return (
    <div className="App">
      <MyDataTable />
    </div>
  );
}

export default ProviderGroupTable;
