import axios from 'axios';

import { resolveRequest } from '@/utils/http/resolveRequest';
import { IRepoSearchResp } from '@/models/github/repositoryModels';

const GIT_HUB_API_URI = 'https://api.github.com';

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
        axios.get(`${GIT_HUB_API_URI}/search/repositories?${query}`, {})
    );
};

export { reqGetGithubRepoSearchByStars };
