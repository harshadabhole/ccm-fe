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
import { TextField, Grid, Button, Typography} from "@mui/material";

const data = [
  {
    id: 1,
    nid: '123456789',
    name: 'John Doe',
    age: 35,
    condition: 'Hypertension',
    enrollStatus: 'Enrolled',
    enrollDate: '2023-09-19',
    program: 'Cardiac Care',
    provider: 'Dr. Smith',
    monthlyMin: 120,
  },
  {
    id: 2,
    nid: '987654321',
    name: 'Jane Smith',
    age: 42,
    condition: 'Diabetes',
    enrollStatus: 'Enrolled',
    enrollDate: '2023-09-20',
    program: 'Endocrinology',
    provider: 'Dr. Johnson',
    monthlyMin: 180,
  },
  {
    id: 3,
    nid: '456789123',
    name: 'Alice Johnson',
    age: 28,
    condition: 'Asthma',
    enrollStatus: 'Not Enrolled',
    enrollDate: null,
    program: null,
    provider: null,
    monthlyMin: null,
  },
];



const MyDataTable = () => {


  const columns = [
    {
      name: "ID",
      selector: "id"
    },
    {
      name: "Patient Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Age",
      selector: "age",
      sortable: true,
    },
    {
      name: "Condition",
      selector: "condition",
      sortable: true,
    },
    {
      name: "Enroll Status",
      selector: "enrollStatus",
      sortable: true,
    },
    {
      name: "Enroll Date",
      selector: "enrollDate",
      sortable: true,
    },
    {
      name: "Program",
      selector: "program",
      sortable: true,
    },
    {
      name: "Provider",
      selector: "provider",
      sortable: true,
    },
    {
      name: "Monthly Min",
      selector: "monthlyMin",
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
    <Grid padding={2}>
      <Button item xs={12} sx={{display: 'flex', justifyContent: 'end'}}>
      <Button
        variant="conatined"
      />
      </Button>
      <Typography variant="h7" sx={{fontWeight: 700}}>Patient List</Typography>
      {/* <Grid item xs={12} sx={{display: 'flex', justifyContent: 'end'}}>
      <TextField
        variant="outlined"
        placeholder="Search by Name"
        size="small"
        value={searchText}
        onChange={handleSearch}
      />
      </Grid> */}
      <Grid item xs={12}>
      <DataTable
        // title="Employee List"
        columns={columns}
        data={data}
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
      <MyDataTable padding={ 2} />
    </div>
  );
}

export default ProviderGroupTable;
