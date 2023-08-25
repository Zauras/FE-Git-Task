import React from 'react';

import RepositoryDashboard from '@/features/RepositoryDashboard/RepositoryDashboard';
import { GitHubAccessProvider } from '@/state/githubAcessContext/GithubAccessContext';
import FullPageLayout from '@/components/PageLayout/FullPageLayout';

const HomePage = () => {
    return (
        <>
            <GitHubAccessProvider>
                <FullPageLayout>
                    <RepositoryDashboard />
                </FullPageLayout>
            </GitHubAccessProvider>
        </>
    );
};

export default HomePage;
