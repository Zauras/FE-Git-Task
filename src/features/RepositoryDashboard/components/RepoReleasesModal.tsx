import React, { useMemo } from 'react';
import Modal from 'react-modal';
import { reqGetGitHubRepoReleases } from '@/api/gitHubApi';
import { IRepoReleasesDto } from '@/models/github/releasesModels';

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
        <Modal
            isOpen={repoReleases.length > 0}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {/*<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>*/}
            <button onClick={closeModal}>close</button>
            <div>
                {repoReleases.map((repoReleaseDto) => {
                    return <div>{repoReleaseDto.url}</div>;
                })}
            </div>
        </Modal>
    );
};

export default RepoReleasesModal;
