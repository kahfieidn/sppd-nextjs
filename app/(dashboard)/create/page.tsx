"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import CachedIcon from '@mui/icons-material/Cached';

const CreateSppd = () => {
  return (
    <div>
      <h1>Create SPPD</h1>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Outlined"
              variant="filled"
            />
          </Grid>
          <Grid size={4} alignContent={"center"}>
            <Button variant="contained" endIcon={<CachedIcon />}>Ambil Nomor</Button>
          </Grid>
          <Grid size={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid size={6}>
            <Button variant="contained" startIcon={<SaveIcon />}>
              Simpan
            </Button>{" "}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CreateSppd;
