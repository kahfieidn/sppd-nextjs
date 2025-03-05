"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import CachedIcon from "@mui/icons-material/Cached";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import "dayjs/locale/en-gb";


const CreateSppd = () => {
  const [kota, setKota] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setKota(event.target.value as string);
  };

  const [tanggal_awal_dinas] = React.useState<Dayjs | null>(null);
  const [tanggal_akhir_dinas] = React.useState<Dayjs | null>(null);

  return (
    <div>
      <h1>Create SPPD</h1>

      <form action="" method="post">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid size={8}>
              <TextField fullWidth id="nomor" label="Nomor" variant="filled" />
            </Grid>
            <Grid size={4} alignContent={"center"}>
              <Button variant="contained" endIcon={<CachedIcon />}>
                Ambil Nomor
              </Button>
            </Grid>
            <Grid size={6}>
              <TextField fullWidth id="nama" label="Nama" variant="outlined" />
            </Grid>
            <Grid size={6} spacing={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Kota</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={kota}
                  label="Kota"
                  onChange={handleChange}
                >
                  <MenuItem value="Jakarta">Jakarta</MenuItem>
                  <MenuItem value="Tanjungpinang">Tanjungpinang</MenuItem>
                  <MenuItem value="Batam">Batam</MenuItem>
                  <MenuItem value="Bintan">Bintan</MenuItem>
                  <MenuItem value="Karimun">Karimun</MenuItem>
                  <MenuItem value="Lingga">Lingga</MenuItem>
                  <MenuItem value="Natuna">Natuna</MenuItem>
                  <MenuItem value="Anambas">Anambas</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={6}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
              >
                <DatePicker
                  label="Tanggal Awal Dinas"
                  value={tanggal_awal_dinas}
                />
              </LocalizationProvider>
            </Grid>
            <Grid size={6}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
              >
                <DatePicker
                  label="Tanggal Akhir Dinas"
                  value={tanggal_akhir_dinas}
                />
              </LocalizationProvider>
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                id="perihal"
                label="Perihal"
                variant="outlined"
                multiline
                maxRows={4}
              />
            </Grid>
            <Grid size={6}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                type="submit"
              >
                Simpan
              </Button>{" "}
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default CreateSppd;