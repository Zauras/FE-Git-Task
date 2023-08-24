import React from 'react';

import RepositoryDashboard from '@/features/RepositoryDashboard/RepositoryDashboard';
import { GitHubAccessProvider } from '@/state/githubAcessContext/GithubAccessContext';

const HomePage = () => {
    return (
        <>
            <GitHubAccessProvider>
                <RepositoryDashboard />
            </GitHubAccessProvider>
        </>
    );
};

export default HomePage;
