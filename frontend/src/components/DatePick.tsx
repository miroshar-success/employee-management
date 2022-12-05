import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePick = ({
  values,
  onChange,
  joiningDateInfo,
  setJoiningDateInfo,
}: any) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Joining Date"
        value={joiningDateInfo}
        onChange={(newValue) => {
          setJoiningDateInfo(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePick;
