import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Dashboard.css";

function createData(
  Client_Name: string,
  Proposed: number,
  Pending: number,
  Net_Investment: number,
  Market_Value: number,
  Inception_Date: number
) {
  return {
    Client_Name,
    Proposed,
    Pending,
    Net_Investment,
    Market_Value,
    Inception_Date,
  };
}

const rows = [
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
];

export default function BasicTable() {
  return (
    <>
      <div className="main">
        <div className="sub-main">
          <form action="">
            <div className="LogoutTag">
              <a href="https://www.google.com/">Logout</a>
            </div>
            <div>
              <h5 className="Heading">Advisor Dashboard</h5>

              <h6 className="Heading_2">Welcome,Name</h6>
            </div>
            <div className="Client_button_container">
              <button type="submit">Client List</button>
            </div>
            <div className="NewClient_button_container">
              <button type="submit">Add New Client</button>
            </div>
            <div className="Investment_button_container">
              <button type="submit">Investments</button>
            </div>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Client_Name</TableCell>
                    <TableCell align="right">Proposed</TableCell>
                    <TableCell align="right">Pending</TableCell>
                    <TableCell align="right">Net_Investment</TableCell>
                    <TableCell align="right">Market_Value</TableCell>
                    <TableCell align="right">Inception_Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.Client_Name}</TableCell>
                      <TableCell align="right">{row.Proposed}</TableCell>
                      <TableCell align="right">{row.Pending}</TableCell>
                      <TableCell align="right">{row.Net_Investment}</TableCell>
                      <TableCell align="right">{row.Market_Value}</TableCell>
                      <TableCell align="right">{row.Inception_Date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </form>
        </div>
      </div>
    </>
  );
}
