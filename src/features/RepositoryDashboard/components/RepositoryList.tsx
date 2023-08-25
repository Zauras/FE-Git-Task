import React from 'react';

import { IRepoInfoDto } from '@/models/github/repositoryModels';
import TableSC from '@/components/Table/Table.styles';

const RepositoryList = ({
    repoList,
    onRepoClick,
}: {
    repoList: IRepoInfoDto[];
    onRepoClick: (repo: IRepoInfoDto) => void;
}) => {
    return (
        <TableSC columnCount={4} isItemsClickable={true}>
            <thead>
                <tr>
                    <th align={'left'}>Nr</th>
                    <th align={'left'}>ID</th>
                    <th>Repo Name</th>
                    <th align={'right'}>Star Count</th>
                </tr>
            </thead>

            <tbody>
                {repoList.length > 0 ? (
                    repoList.map((repo, i) => (
                        <tr key={repo.id} onClick={() => onRepoClick(repo)}>
                            <td>{i + 1}</td>
                            <td>{repo.id}</td>
                            <td align={'center'}>{repo.name}</td>
                            <td align={'right'}>{repo.stargazers_count}</td>
                        </tr>
                    ))
                ) : (
                    <div className={'no-table-content-container'}>No results</div>
                )}
            </tbody>
        </TableSC>
    );
};

export default RepositoryList;
