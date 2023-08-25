import React from 'react';

import PageLayoutSC from '@/components/PageLayout/PageLayoutSC.styles';
import RepositoryDashboard from '@/features/RepositoryDashboard/RepositoryDashboard';
import { GitHubAccessProvider } from '@/state/githubAcessContext/GithubAccessContext';

const HomePage = () => {
    return (
        <PageLayoutSC>
            <header className="page-header">
                <h1>Github Repository Search</h1>
            </header>

            <div className="page-content">
                <GitHubAccessProvider>
                    <RepositoryDashboard />
                </GitHubAccessProvider>
            </div>

            <footer className="page-footer" />
        </PageLayoutSC>
    );
};

export default HomePage;
