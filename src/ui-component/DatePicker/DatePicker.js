import React, {useState} from "react";
import Flatpickr from "react-flatpickr";
import {InputAdornment, TextField,} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import 'flatpickr/dist/flatpickr.min.css';
import './calender.css'

const DateRangePicker = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  console.log("selectedDate", selectedDate);
  const handleDateChange = (selectedDates) => {
    setSelectedDate(selectedDates);
  };

  const CustomInput = ({ defaultValue, value, ...props }) => {
    return (
      <TextField
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CalendarMonthIcon color='primary'/>
            </InputAdornment>
          ),
        }}
        {...props}
      />
    );
  };

  return (
    <Flatpickr
      // render={({ defaultValue, value, ...props }, ref) => {
      //   return (
      //     <CustomInput
      //       defaultValue={"2023-10-11"} // Replace with your hardcoded default value
      //       value="2023-10-11" // Replace with your hardcoded value
      //       inputRef={ref}
      //       {...props}
      //     />
      //   );
      // }}
      options={{
        mode: "range",
        // eslint-disable-next-line no-mixed-operators
        defaultDate: [
          new Date(),
          new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
        ],
      }}
      onChange={handleDateChange}
    />
  );
};

export default DateRangePicker;
