import axios from 'axios';

import { resolveRequest } from '@/utils/http/resolveRequest';

// const { GIT_HUB_API_URI } = config;

const GIT_HUB_API_URI = 'https://api.github.com';

// const reqGetBotState = async () => {
//     return resolveRequest<any>(axios.get(`http://localhost:8001/api/v1/bot-trading/state`));
// };

const reqGetGithubRepoSearchByStars = async ({ searchString }: { searchString: string }) => {
    const query = `${searchString}&sort=stars&order=desc`;

    return resolveRequest<any>(axios.get(`${GIT_HUB_API_URI}/search/repositories?${query}`, {}));
};

export { reqGetGithubRepoSearchByStars };
