import React, { useContext } from 'react';

import RepoReleasesModal from '@/features/RepositoryDashboard/components/ReleasesModal/RepoReleasesModal';
import UserPanel from '@/features/UserPanel/UserPanel';
import RepositoryList from '@/features/RepositoryDashboard/components/RepositoryList/RepositoryList';
import RepositorySearchPanel from '@/features/RepositoryDashboard/components/RepositorySearchPanel';
import RepositorySearchPanelContainerSC from '@/features/RepositoryDashboard/styles/RepositorySearchPanelContainerSC.styles';
import RepositoryDashboardSC from '@/features/RepositoryDashboard/styles/RepositoryDashboardSC.styles';
import ErrorPopUp from '@/features/RepositoryDashboard/components/ErrorPopUp/ErrorPopUp';
import { RepositoriesListContext } from '@/features/RepositoryDashboard/state/repositoriesList/RepositoriesListContext';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';

const RepositoryDashboard = () => {
    const { isLoading } = useContext(RepositoriesListContext);

    return (
        <RepositoryDashboardSC>
            <ErrorPopUp />

            <RepoReleasesModal />

            <UserPanel />

            <RepositorySearchPanelContainerSC>
                <LoadingScreen isLoading={isLoading}>
                    <RepositorySearchPanel />

                    <RepositoryList />
                </LoadingScreen>
            </RepositorySearchPanelContainerSC>
        </RepositoryDashboardSC>
    );
};

export default RepositoryDashboard;
