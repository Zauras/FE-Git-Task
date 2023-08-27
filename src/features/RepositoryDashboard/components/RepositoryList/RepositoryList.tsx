import React, { useContext } from 'react';

import TableSC from '@/components/Table/Table.styles';
import { RepositoriesListContext } from '@/features/RepositoryDashboard/state/repositoriesList/RepositoriesListContext';
import RepositoryListItem from '@/features/RepositoryDashboard/components/RepositoryList/RepositoryListItem';

const RepositoryList = () => {
    const { repoList } = useContext(RepositoriesListContext);

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
                    repoList.map((repo, i) => <RepositoryListItem repoDto={repo} i={i} />)
                ) : (
                    <div className={'no-table-content-container'}>No results</div>
                )}
            </tbody>
        </TableSC>
    );
};

export default RepositoryList;
