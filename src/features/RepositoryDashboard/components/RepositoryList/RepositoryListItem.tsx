import React, { useContext } from 'react';

import { IRepoInfoDto } from '@/models/github/repositoryModels';
import { RepositoriesListContext } from '@/features/RepositoryDashboard/state/repositoriesList/RepositoriesListContext';

const RepositoryListItem = ({ repoDto, i }: { repoDto: IRepoInfoDto; i: number }) => {
    const { queryRepoReleases } = useContext(RepositoriesListContext);
    const handleRepoItemClick = async () => {
        if (queryRepoReleases) {
            const {
                name: repoName,
                owner: { login: repoOwner },
            } = repoDto;

            await queryRepoReleases({ repoOwner, repoName });
        }
    };

    return (
        <tr key={repoDto.id} onClick={handleRepoItemClick}>
            <td>{i + 1}</td>
            <td>{repoDto.id}</td>
            <td align={'center'}>{repoDto.name}</td>
            <td align={'right'}>{repoDto.stargazers_count}</td>
        </tr>
    );
};

export default RepositoryListItem;
