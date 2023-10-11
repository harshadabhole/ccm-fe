import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Stack, Typography } from "@mui/material";

export default function CustomPagination() {
  const next = () => {
    return <Typography>Next</Typography>;
  };

  const previous = () => {
    return <Typography>Previous</Typography>;
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        variant="outlined"
        color= "primary"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: previous, next: next }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
