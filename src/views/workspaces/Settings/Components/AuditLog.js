import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router";

const data = [
  {
    user: "Jane Doe",
    event: "create",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date_time: "Fri Jun 2023 4:34:45",
    ip_address: "1233324  23234242 ",
  },
  {
    user: "Jane Doe",
    event: "create",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date_time: "Fri Jun 2023 4:34:45",
    ip_address: "1233324  23234242 ",
  },
  {
    user: "Jane Doe",
    event: "create",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date_time: "Fri Jun 2023 4:34:45",
    ip_address: "1233324  23234242 ",
  },
  {
    user: "Jane Doe",
    event: "create",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date_time: "Fri Jun 2023 4:34:45",
    ip_address: "1233324  23234242 ",
  },
  {
    user: "Jane Doe",
    event: "create",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date_time: "Fri Jun 2023 4:34:45",
    ip_address: "1233324  23234242 ",
  },
  {
    user: "Jane Doe",
    event: "create",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date_time: "Fri Jun 2023 4:34:45",
    ip_address: "1233324  23234242 ",
  },
  {
    user: "Jane Doe",
    event: "create",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date_time: "Fri Jun 2023 4:34:45",
    ip_address: "1233324  23234242 ",
  },
  {
    user: "Jane Doe",
    event: "create",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date_time: "Fri Jun 2023 4:34:45",
    ip_address: "1233324  23234242 ",
  },
  {
    user: "Jane Doe",
    event: "create",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date_time: "Fri Jun 2023 4:34:45",
    ip_address: "1233324  23234242 ",
  },
  {
    user: "Jane Doe",
    event: "create",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date_time: "Fri Jun 2023 4:34:45",
    ip_address: "1233324  23234242 ",
  },
];

const MyDataTable = () => {
  const navigate = useNavigate();
  const columns = [
    {
      name: "Date&Time ",
      selector: "date_time",
      sortable: true,
    },
    {
      name: "Event",
      selector: "event",
      sortable: true,
    },
    {
      name: "Description",
      selector: "description",
      sortable: true,
    },
    {
      name: "User IP address",
      selector: "ip_address",
      sortable: true,
    },
    {
      name: "User",
      selector: "user",
      sortable: true,
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.date_time.toLowerCase().includes(searchText.toLowerCase()) ||
      item.address.toLowerCase().includes(searchText.toLowerCase()) ||
      item.event.toLowerCase().includes(searchText.toLowerCase()) ||
      item.ip_addredss.toLowerCase().includes(searchText.toLowerCase()) ||
      item.user.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSort = (column, sortDirection) => {
    setSortedColumn(column);
    setSortDirection(sortDirection);
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
                sortIcon={<ChevronDown />}
                sortServer 
                onSort={handleSort}
                sortColumn={sortedColumn}
                sortDirection={sortDirection}
                pagination
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

function AuditLog() {
  return <MyDataTable />;
}

export default AuditLog;
