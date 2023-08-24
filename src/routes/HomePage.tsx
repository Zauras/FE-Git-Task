import { ChangeEvent, useContext, useState } from 'react';

import RepositoryList from '@/features/RepositoryList/RepositoryList';
import { reqGetGithubRepoSearchByStars } from '@/api/gitHubApi';
import { IRepoInfoDto } from '@/models/github/repositoryModels';
import {
    GitHubAccessContext,
    GitHubAccessProvider,
} from '@/state/githubAcessContext/GithubAccessContext';
import UserPanel from '@/features/UserPanel/UserPanel';

const HomePage = () => {
    const [repoSearchKeyword, setRepoSearchKeyword] = useState<string>('');
    const [repoSearchResult, setRepoSearchResult] = useState<IRepoInfoDto[]>([]);

    const querySearch = async () => {
        const resp = await reqGetGithubRepoSearchByStars({
            searchString: repoSearchKeyword,
        });

        if (resp.data) {
            setRepoSearchResult(resp.data.items);
        }

        console.log(resp);
    };

    return (
        <>
            <GitHubAccessProvider>
                <div id="sidebar">
                    <h1>GitHub Repositories Search</h1>

                    <UserPanel />

                    <div>
                        <form id="search-form" role="search">
                            <input
                                id="q"
                                aria-label="Search repositories"
                                placeholder="Keyword"
                                type="search"
                                name="search-repo"
                                onChange={(e) => setRepoSearchKeyword(e.target.value)}
                            />

                            <div id="search-spinner" aria-hidden hidden={true} />

                            <div className="sr-only" aria-live="polite"></div>
                        </form>

                        <button type="submit" onClick={querySearch}>
                            Search
                        </button>
                    </div>

                    <RepositoryList repoList={repoSearchResult} />
                </div>

                <div id="detail"></div>
            </GitHubAccessProvider>
        </>
    );
};

export default HomePage;
