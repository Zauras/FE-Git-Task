import axios from 'axios';

import { resolveRequest } from '@/utils/http/resolveRequest';
import { IRepoSearchResp } from '@/models/github/repositoryModels';
import { IRepoReleasesDto } from '@/models/github/releasesModels';
import { IGitHubUserDto } from '@/models/github/userModels';
import { GIT_HUB_ACCESS_TOKEN_STORAGE_KEY, GIT_HUB_API } from '@/const';

const { GIT_HUB_API_URI, GIT_HUB_API_VERSION } = GIT_HUB_API;

const getHeaders = ({
    headers = {},
}: {
    headers?: any;
} = {}): object => {
    const newHeaders = { ...headers };
    newHeaders['X-GitHub-Api-Version'] = GIT_HUB_API_VERSION;

    const accessToken = sessionStorage.getItem(GIT_HUB_ACCESS_TOKEN_STORAGE_KEY);

    if (accessToken) {
        newHeaders['Authorization'] = `Bearer ${accessToken}`;
    }

    return newHeaders;
};

const reqGetGithubRepoSearchByStars = async ({
    searchString,
    pageSize = 10,
}: {
    searchString: string;
    pageSize?: number;
}) => {
    let query = `q=${searchString}`;
    query += `&per_page=${pageSize}`;
    query += `&sort=stars`;
    query += `&order=desc`;

    return resolveRequest<IRepoSearchResp>(
        axios.get(`${GIT_HUB_API_URI}/search/repositories?${query}`, {
            headers: getHeaders(),
        })
    );
};

const reqGetGitHubRepoReleases = async ({
    repoOwner,
    repoName,
}: {
    repoOwner: string;
    repoName: string;
}) => {
    return resolveRequest<IRepoReleasesDto[]>(
        axios.get(`${GIT_HUB_API_URI}/repos/${repoOwner}/${repoName}/releases`, {
            headers: getHeaders(),
        })
    );
};

const reqCheckIsGitHubAccessTokenValid = async () => {
    const resp = await axios.get(`${GIT_HUB_API_URI}/octocat`, {
        headers: getHeaders(),
    });

    return resp.status == 200;
};

const reqGetGitHubUser = async () => {
    return resolveRequest<IGitHubUserDto>(
        axios.get(`${GIT_HUB_API_URI}/user`, {
            headers: getHeaders(),
        })
    );
};

export {
    reqGetGithubRepoSearchByStars,
    reqGetGitHubRepoReleases,
    reqCheckIsGitHubAccessTokenValid,
    reqGetGitHubUser,
};
