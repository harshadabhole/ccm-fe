import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import Avatar from '../../../../assets/avatar-s-11.jpg'


const rows = [
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

function PatientDataTable() {

  const columns = [
    { field: 'nid', headerName: 'NID', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'condition', headerName: 'Condition', width: 200 },
    { field: 'enrollStatus', headerName: 'Enroll Status', width: 150 },
    { field: 'enrollDate', headerName: 'Enroll Date', width: 150 },
    { field: 'program', headerName: 'Program', width: 200 },
    { field: 'provider', headerName: 'Provider', width: 200 },
    { field: 'monthlyMin', headerName: 'Monthly Min', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <button onClick={() => handleMoreClick(params.row.id)}>
            <MoreHorizIcon />
          </button>
          {params.row.isMoreClicked && (
            <div>
              <button onClick={() => handleEdit(params.row.id)}>
                <EditIcon />
              </button>
              <button onClick={() => handleDelete(params.row.id)}>
                <DeleteIcon />
              </button>
            </div>
          )}
        </div>
      ),
    },
  ];
  
  

  const [rowState, setRowState] = useState({});

  // Handle "More" button click
  const handleMoreClick = (id) => {
    setRowState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isMoreClicked: true,
      },
    }));
  };

  // Handle "Edit" button click
  const handleEdit = (id) => {
    // Handle the edit action for the row with the given id
    console.log(`Edit row with ID ${id}`);
  };

  // Handle "Delete" button click
  const handleDelete = (id) => {
    // Handle the delete action for the row with the given id
    console.log(`Delete row with ID ${id}`);
  };
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        // rows={rows}
        rows={rows.map((row) => ({
          ...row,
          isMoreClicked: !!rowState[row.id]?.isMoreClicked,
        }))}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        sx={{borderStyle: 'none'}}

      />
    </div>
  );
}

export default PatientDataTable;
