import { useState } from 'react';

import ProjectList from '../features/ProjectList/ProjectList';
import { reqGetGithubRepoSearchByStars } from '@/api/gitHubApi';

const HomePage = () => {
    const [repoSearchKeyword, setRepoSearchKeyword] = useState('');
    const querySearch = async () => {
        const resp = await reqGetGithubRepoSearchByStars({
            searchString: repoSearchKeyword,
        });

        console.log(resp);
    };

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>

                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search repositories"
                            placeholder="Keyword"
                            type="search"
                            name="q"
                            onChange={(e) => setRepoSearchKeyword(e.target.value)}
                        />

                        <div id="search-spinner" aria-hidden hidden={true} />

                        <div className="sr-only" aria-live="polite"></div>
                    </form>

                    <button type="submit" onClick={querySearch}>
                        Search
                    </button>
                </div>

                <ProjectList />

                {/*<nav>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <a href={`/contacts/1`}>Your Name</a>*/}
                {/*        </li>*/}

                {/*        <li>*/}
                {/*            <a href={`/contacts/2`}>Your Friend</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
            </div>

            <div id="detail"></div>
        </>
    );
};

export default HomePage;
