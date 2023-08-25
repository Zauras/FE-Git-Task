import React, { useContext, useState } from 'react';

import { reqGetGitHubRepoReleases, reqGetGithubRepoSearchByStars } from '@/api/gitHubApi';
import RepoReleasesModal from '@/features/RepositoryDashboard/components/ReleasesModal/RepoReleasesModal';
import UserPanel from '@/features/UserPanel/UserPanel';
import RepositoryList from '@/features/RepositoryDashboard/components/RepositoryList';
import RepositorySearchPanel from '@/features/RepositoryDashboard/components/RepositorySearchPanel';
import LimitReqErrorPopUp from '@/features/RepositoryDashboard/components/LimitReqErrorPopUp';
import { IRepoReleasesDto } from '@/models/github/releasesModels';
import { IRepoInfoDto } from '@/models/github/repositoryModels';
import CommonApiErrorPopUp from '@/features/RepositoryDashboard/components/CommonApiErrorPopUp';
import RepositorySearchPanelContainerSC from '@/features/RepositoryDashboard/styles/RepositorySearchPanelContainerSC.styles';
import RepositoryDashboardSC from '@/features/RepositoryDashboard/styles/RepositoryDashboardSC.styles';
import { GitHubAccessContext } from '@/state/githubAcessContext/GithubAccessContext';

interface ICommonApiErrorDto {
    isError: boolean;
    statusCode: number | null;
}

const RepositoryDashboard = () => {
    const { gitHubAccessDto } = useContext(GitHubAccessContext);
    const [isLimitReqError, setIsLimitReqError] = useState(false);
    const [commonApiErrorDto, setCommonApiErrorDto] = useState<ICommonApiErrorDto>({
        isError: false,
        statusCode: null,
    });

    const [repoSearchKeyword, setRepoSearchKeyword] = useState<string>('');
    const [repoList, setRepoList] = useState<IRepoInfoDto[]>([]);
    const [repoReleases, setRepoReleases] = useState<IRepoReleasesDto[]>([]);

    const handleTriggerCommonApiError = (statusCode: number | null) => {
        if (statusCode) {
            setCommonApiErrorDto({ isError: true, statusCode });
        }
    };

    const handleRemoveCommonApiError = () => {
        setCommonApiErrorDto({ isError: false, statusCode: null });
    };

    const handleRepoClick = async (repo: IRepoInfoDto) => {
        const resp = await reqGetGitHubRepoReleases({
            repoOwner: repo.owner.login,
            repoName: repo.name,
            accessToken: gitHubAccessDto.accessToken,
        });

        if (resp.status == 403) {
            setIsLimitReqError(true);
        } else if (resp.data) {
            setRepoReleases(resp.data);
        } else {
            handleTriggerCommonApiError(resp.status);
        }
    };

    const handleRepoSearch = async () => {
        const resp = await reqGetGithubRepoSearchByStars({
            searchString: repoSearchKeyword,
            accessToken: gitHubAccessDto.accessToken,
        });

        if (resp.status == 403) {
            setIsLimitReqError(true);
        } else if (resp.data) {
            setRepoList(resp.data.items);
        } else {
            handleTriggerCommonApiError(resp.status);
        }
    };

    const removeLimitReqError = () => {
        setIsLimitReqError(false);
    };

    return (
        <RepositoryDashboardSC>
            <LimitReqErrorPopUp
                isLimitReqError={isLimitReqError}
                removeLimitReqError={removeLimitReqError}
            />

            <CommonApiErrorPopUp
                isError={commonApiErrorDto.isError}
                statusCode={commonApiErrorDto.statusCode}
                removeError={handleRemoveCommonApiError}
            />

            <RepoReleasesModal repoReleases={repoReleases} closeModal={() => setRepoReleases([])} />

            <UserPanel />

            <RepositorySearchPanelContainerSC>
                <RepositorySearchPanel
                    onRepoSearch={handleRepoSearch}
                    onRepoSearchQueryChange={setRepoSearchKeyword}
                />

                <RepositoryList repoList={repoList} onRepoClick={handleRepoClick} />
            </RepositorySearchPanelContainerSC>
        </RepositoryDashboardSC>
    );
};

export default RepositoryDashboard;
