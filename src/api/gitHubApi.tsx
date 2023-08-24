import axios from 'axios';

import { resolveRequest } from '@/utils/http/resolveRequest';
import { IRepoSearchResp } from '@/models/github/repositoryModels';
import { IRepoReleasesDto } from '@/models/github/releasesModels';
import { IGitHubUserDto } from '@/models/github/userModels';

const GIT_HUB_API_URI = 'https://api.github.com';
// API DOCS: https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories
const GIT_HUB_API_VERSION = '2022-11-28';

const getHeaders = ({
    accessToken,
    headers = {},
}: {
    accessToken?: string | undefined;
    headers?: any;
} = {}): object => {
    const newHeaders = { ...headers };
    newHeaders['X-GitHub-Api-Version'] = GIT_HUB_API_VERSION;

    if (accessToken) {
        newHeaders['Authorization'] = `Bearer ${accessToken}`;
    }

    return newHeaders;
};

const reqGetGithubRepoSearchByStars = async ({
    searchString,
    pageSize = 10,
    accessToken,
}: {
    searchString: string;
    pageSize?: number;
    accessToken?: string;
}) => {
    let query = `q=${searchString}`;
    query += `&per_page=${pageSize}`;
    query += `&sort=stars`;
    query += `&order=desc`;

    return resolveRequest<IRepoSearchResp>(
        axios.get(`${GIT_HUB_API_URI}/search/repositories?${query}`, {
            headers: getHeaders({ accessToken }),
        })
    );
};

const reqGetGitHubRepoReleases = async ({
    repoOwner,
    repoName,
    accessToken,
}: {
    repoOwner: string;
    repoName: string;
    accessToken?: string;
}) => {
    return resolveRequest<IRepoReleasesDto[]>(
        axios.get(`${GIT_HUB_API_URI}/repos/${repoOwner}/${repoName}/releases`, {
            headers: getHeaders({ accessToken }),
        })
    );
};

const reqCheckIsGitHubAccessTokenValid = async ({ accessToken }: { accessToken: string }) => {
    const resp = await axios.get(`${GIT_HUB_API_URI}/octocat`, {
        headers: getHeaders({ accessToken }),
    });

    return resp.status == 200;
};

const reqGetGitHubUser = async ({ accessToken }: { accessToken: string }) => {
    return resolveRequest<IGitHubUserDto>(
        axios.get(`${GIT_HUB_API_URI}/user`, {
            headers: getHeaders({ accessToken }),
        })
    );
};

export {
    reqGetGithubRepoSearchByStars,
    reqGetGitHubRepoReleases,
    reqCheckIsGitHubAccessTokenValid,
    reqGetGitHubUser,
};
