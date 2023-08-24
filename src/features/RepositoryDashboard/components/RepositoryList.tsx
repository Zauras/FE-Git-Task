import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IRepoInfoDto } from '@/models/github/repositoryModels';

const RepositoryList = ({
    repoList,
    onRepoClick,
}: {
    repoList: IRepoInfoDto[];
    onRepoClick: (repo: IRepoInfoDto) => void;
}) => {
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
                    {repoList.map((repo) => (
                        <button onClick={() => onRepoClick(repo)}>
                            <TableRow
                                key={repo.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {repo.id}
                                </TableCell>

                                <TableCell align="right">{repo.name}</TableCell>

                                <TableCell align="right">{repo.stargazers_count}</TableCell>
                            </TableRow>
                        </button>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RepositoryList;
