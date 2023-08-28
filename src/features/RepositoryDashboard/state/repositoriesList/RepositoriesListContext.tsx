import { createContext, ReactNode, useState } from 'react';

import { IRepoInfoDto } from '@/models/github/repositoryModels';
import { IRepoReleasesDto } from '@/models/github/releasesModels';
import { reqGetGitHubRepoReleases, reqGetGithubRepoSearchByStars } from '@/api/gitHubApi';
import {
    ERepoErrorType,
    IRepoErrorDto,
} from '@/features/RepositoryDashboard/components/ErrorPopUp/RepoError.types';

const RepositoriesListContext = createContext<{
    // Data:
    isLoading: boolean;
    repoList: IRepoInfoDto[];
    repoReleases: IRepoReleasesDto[];
    // Functions:
    errorDto: IRepoErrorDto | null;
    queryRepoList?: ({ repoSearchKeyword }: { repoSearchKeyword: string }) => Promise<void>;
    queryRepoReleases?: ({
        repoOwner,
        repoName,
    }: {
        repoOwner: string;
        repoName: string;
    }) => Promise<void>;
    cleanRepoReleases?: () => void;
    removeError: () => void;
}>({
    isLoading: false,
    repoList: [],
    repoReleases: [],
    errorDto: null,
    cleanRepoReleases: () => Promise<void>,
    removeError: () => null,
});

const RepositoriesListProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [repoList, setRepoList] = useState<IRepoInfoDto[]>([]);
    const [repoReleases, setRepoReleases] = useState<IRepoReleasesDto[]>([]);
    const [errorDto, setErrorDto] = useState<IRepoErrorDto | null>(null);

    const queryRepoList = async ({ repoSearchKeyword }: { repoSearchKeyword: string }) => {
        setIsLoading(true);
        const resp = await reqGetGithubRepoSearchByStars({
            searchString: repoSearchKeyword,
        });

        if (resp.status == 403) {
            setErrorDto({ errorType: ERepoErrorType.LimitReqError, statusCode: resp.status });
        } else if (resp.data) {
            setRepoList(resp.data.items);
        } else {
            setErrorDto({ errorType: ERepoErrorType.AnyError, statusCode: resp.status });
        }
        setIsLoading(false);
    };

    const queryRepoReleases = async ({
        repoOwner,
        repoName,
    }: {
        repoOwner: string;
        repoName: string;
    }) => {
        setIsLoading(true);
        const resp = await reqGetGitHubRepoReleases({
            repoOwner,
            repoName,
        });

        if (resp.status == 403) {
            setErrorDto({ errorType: ERepoErrorType.LimitReqError, statusCode: resp.status });
        } else if (resp.data) {
            setRepoReleases(resp.data);
        } else {
            setErrorDto({ errorType: ERepoErrorType.AnyError, statusCode: resp.status });
        }
        setIsLoading(false);
    };

    const cleanRepoReleases = () => {
        setRepoReleases([]);
    };

    const removeError = () => {
        setErrorDto(null);
    };

    return (
        <RepositoriesListContext.Provider
            value={{
                // Data:
                isLoading,
                repoList,
                repoReleases,
                errorDto,
                // Functions:
                queryRepoList,
                queryRepoReleases,
                cleanRepoReleases,
                removeError,
            }}
        >
            {children}
        </RepositoriesListContext.Provider>
    );
};

export { RepositoriesListContext, RepositoriesListProvider };
