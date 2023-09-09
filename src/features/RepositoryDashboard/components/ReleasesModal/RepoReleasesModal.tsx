import React, { useContext, useEffect, useState } from 'react';

import Modal from '@/components/Modal/Modal';
import TableGridSC from '@/components/Table/styles/Table.styles';
import ReleaseContentSC from '@/features/RepositoryDashboard/components/ReleasesModal/styles/ReleaseContentSC.styles';
import { RepositoriesListContext } from '@/features/RepositoryDashboard/state/repositoriesList/RepositoriesListContext';

const RepoReleasesModal = () => {
    const { repoReleases, cleanRepoReleases } = useContext(RepositoriesListContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClose = () => {
        setIsOpen(false);
    };
    const handleAfterClose = () => {
        if (cleanRepoReleases) {
            cleanRepoReleases();
        }
    };

    useEffect(() => {
        if (repoReleases != null) {
            setIsOpen(true);
        }
    }, [repoReleases]);

    return (
        <Modal
            isOpen={isOpen}
            modalTitle="Releases"
            onClose={handleOnClose}
            afterClose={handleAfterClose}
        >
            <ReleaseContentSC>
                {/*<TableSC>*/}
                {/*    <thead>*/}
                {/*        <tr>*/}
                {/*            <th align={'left'}>Release</th>*/}
                {/*            <th align={'left'}>Published</th>*/}
                {/*            <th>Author</th>*/}
                {/*        </tr>*/}
                {/*    </thead>*/}

                {/*    <tbody>*/}
                {/*        {repoReleases && repoReleases.length > 0 ? (*/}
                {/*            repoReleases.map((releaseDto) => (*/}
                {/*                <tr key={releaseDto.name}>*/}
                {/*                    <td align={'left'}>{releaseDto.name}</td>*/}
                {/*                    <td align={'left'}>{releaseDto.published_at}</td>*/}
                {/*                    <td align={'right'}>{releaseDto.author.login}</td>*/}
                {/*                </tr>*/}
                {/*            ))*/}
                {/*        ) : (*/}
                {/*            <div className={'no-table-content-container'}>No results</div>*/}
                {/*        )}*/}
                {/*    </tbody>*/}
                {/*</TableSC>*/}
            </ReleaseContentSC>
        </Modal>
    );
};

export default RepoReleasesModal;
