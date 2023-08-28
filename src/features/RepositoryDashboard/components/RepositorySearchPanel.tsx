import React, { ChangeEvent, useContext, useState } from 'react';

import TextInputSC from '@/components/Input/TextInputSC.styles';
import ButtonSC from '@/components/Button/ButtonSC.styles';
import { RepositoriesListContext } from '@/features/RepositoryDashboard/state/repositoriesList/RepositoriesListContext';

const RepositorySearchPanel = () => {
    const { queryRepoList } = useContext(RepositoriesListContext);
    const [repoSearchKeyword, setRepoSearchKeyword] = useState<string>('');

    const handleQueryInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRepoSearchKeyword(event.target.value);
    };

    const handleQueryRepoList = async () => {
        if (queryRepoList) {
            await queryRepoList({ repoSearchKeyword });
        }
    };

    return (
        <aside>
            <h3>GitHub Repositories</h3>

            <div className="search-panel">
                <form className="search-form" role="search">
                    <TextInputSC
                        aria-label="Search repositories"
                        placeholder="Keyword"
                        type="search"
                        name="search-repo"
                        onChange={handleQueryInputChange}
                    />

                    <div id="search-spinner" aria-hidden hidden={true} />

                    <div className="sr-only" aria-live="polite"></div>
                </form>

                <ButtonSC type="submit" onClick={handleQueryRepoList}>
                    Search
                </ButtonSC>
            </div>
        </aside>
    );
};

export default RepositorySearchPanel;
