import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IRepoInfoDto } from '@/models/github/repositoryModels';
import { useState } from 'react';
import RepoReleasesModal from '@/features/RepositoryList/RepoReleasesModal';
import { reqGetGitHubRepoReleases } from '@/api/gitHubApi';
import { IRepoReleasesDto } from '@/models/github/releasesModels';

const createData = (id: number, repoName: string, starCount: number) => {
    return { id, repoName, starCount };
};

const RepositoryList = ({ repoList }: { repoList: IRepoInfoDto[] }) => {
    // TODO: show pop-up
    // const [selectedRepoId, setSelectedRepId] = useState<number | null>(null);
    // const [selectedRepo, setSelectedRep] = useState<IRepoInfoDto | null>(null);
    const [repoReleases, setRepoReleases] = useState<IRepoReleasesDto[]>([]);

    const handleRepoClick = async (repo: IRepoInfoDto) => {
        const resp = await reqGetGitHubRepoReleases({
            repoOwner: repo.owner.login,
            repoName: repo.name,
        });

        if (resp.data) {
            setRepoReleases(resp.data);
        }
    };

    return (
        <TableContainer component={Paper}>
            <RepoReleasesModal repoReleases={repoReleases} closeModal={() => setRepoReleases([])} />

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
                        <button onClick={() => handleRepoClick(repo)}>
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
