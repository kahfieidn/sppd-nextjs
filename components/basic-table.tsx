import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TableRow from "@mui/material/TableRow";

import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import { getSppds } from "@/lib/data";
import {formatDate} from "@/lib/utils";

interface Column {
  id: "id" | "nomor" | "nama" | "kota" |  "tanggal_awal_dinas" |  "tanggal_akhir_dinas" | "perihal" | "aksi";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 10 },
  { id: "nomor", label: "Nomor", minWidth: 100 },
  {
    id: "nama",
    label: "Nama",
    minWidth: 100,
    // align: "right",
    // format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "kota",
    label: "Kota",
    minWidth: 100,
    // align: "right",
    // format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "tanggal_awal_dinas",
    label: "Tanggal Awal Dinas",
    minWidth: 100,
    // align: "right",
    // format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "tanggal_akhir_dinas",
    label: "Tanggal Akhir Dinas",
    minWidth: 100,
    // align: "right",
    // format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "perihal",
    label: "Perihal",
    minWidth: 100,
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "aksi",
    label: "Aksi",
    minWidth: 50,
  }
];

const StickyHeadTable = async () => {
  const sppds = await getSppds();

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <FormControl variant="standard" sx={{ width: "100%", padding: 2 }}>
        <Input
          id="input-with-icon-adornment"
          placeholder="Search data..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sppds.map((sppd) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={sppd.id}>
                  <TableCell>{sppd.id}</TableCell>
                  <TableCell>{sppd.nomor}</TableCell>
                  <TableCell>{sppd.nama}</TableCell>
                  <TableCell>{sppd.kota}</TableCell>
                  <TableCell>{formatDate(sppd.tanggal_awal_dinas.toString())}</TableCell>
                  <TableCell>{formatDate(sppd.tanggal_akhir_dinas.toString())}</TableCell>
                  <TableCell>{sppd.perihal}</TableCell>
                </TableRow>
              );
            })}

          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        spacing={2}
        alignContent={"center"}
        sx={{ p: 2 }}
        textAlign={"center"}
      >
        <Pagination count={10} color="primary" />
      </Stack>
    </Paper>
  );
};

export default StickyHeadTable;
