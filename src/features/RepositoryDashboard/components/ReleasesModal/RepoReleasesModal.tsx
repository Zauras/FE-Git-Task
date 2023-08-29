import React, { useContext } from 'react';

import ReleaseContentSC from '@/features/RepositoryDashboard/components/ReleasesModal/styles/ReleaseContentSC.styles';
import TableSC from '@/components/Table/Table.styles';
import { RepositoriesListContext } from '@/features/RepositoryDashboard/state/repositoriesList/RepositoriesListContext';
import Modal from '@/components/Modal/Modal';

const RepoReleasesModal = () => {
    const { repoReleases, cleanRepoReleases } = useContext(RepositoriesListContext);

    const handleCloseModal = () => {
        if (cleanRepoReleases) {
            cleanRepoReleases();
        }
    };

    return (
        <Modal isOpen={repoReleases.length > 0} label="Releases" onClose={handleCloseModal}>
            <ReleaseContentSC>
                <TableSC columnCount={3}>
                    <thead>
                        <tr>
                            <th align={'left'}>Release</th>
                            <th align={'left'}>Published</th>
                            <th>Author</th>
                        </tr>
                    </thead>

                    <tbody>
                        {repoReleases.length > 0 ? (
                            repoReleases.map((releaseDto) => (
                                <tr key={releaseDto.name}>
                                    <td align={'left'}>{releaseDto.name}</td>
                                    <td align={'left'}>{releaseDto.published_at}</td>
                                    <td align={'right'}>{releaseDto.author.login}</td>
                                </tr>
                            ))
                        ) : (
                            <div className={'no-table-content-container'}>No results</div>
                        )}
                    </tbody>
                </TableSC>
            </ReleaseContentSC>
        </Modal>
    );
};

export default RepoReleasesModal;
