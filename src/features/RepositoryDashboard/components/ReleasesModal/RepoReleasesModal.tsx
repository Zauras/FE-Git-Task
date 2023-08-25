import React from 'react';
import Modal from 'react-modal';

import { IRepoReleasesDto } from '@/models/github/releasesModels';
import ReleaseContentSC from '@/features/RepositoryDashboard/components/ReleasesModal/styles/ReleaseContentSC.styles';
import TableSC from '@/components/Table/Table.styles';
import CloseButtonSC from '@/components/Button/CloseButtonSC.styles';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const RepoReleasesModal = ({
    repoReleases,
    closeModal,
}: {
    repoReleases: IRepoReleasesDto[];
    closeModal: () => void;
}) => {
    return (
        <Modal isOpen={repoReleases.length > 0} style={customStyles} contentLabel="Example Modal">
            <ReleaseContentSC>
                <div className="modal-header">
                    <div className="header-label">
                        <h2>Releases</h2>
                    </div>
                    <CloseButtonSC className="close-action" onClick={closeModal}>
                        X
                    </CloseButtonSC>
                </div>

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
