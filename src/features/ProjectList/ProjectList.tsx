import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (
  id: number,
  repoName: string,
  starCount: number
) => {
  return { id, repoName, starCount };
}

const rows = [
  createData(1, 'Project-1', 159, ),
  createData(2, 'Project-2', 25, ),
  createData(3, 'Project-3', 324, ),
  createData(4, 'Project-4', 2342, ),
  createData(5, 'Project-5', 2442, ),
  createData(6, 'Project-6', 32432, ),
  createData(7, 'Project-7', 223, ),
  createData(8, 'Project-8', 22, ),
  createData(9, 'Project-9', 34, ),
  createData(10, 'Project-10', 424)
];

const ProjectList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Repo Name</TableCell>
            <TableCell align="right">Star Count</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>

              <TableCell align="right">{row.repoName}</TableCell>

              <TableCell align="right">{row.starCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectList