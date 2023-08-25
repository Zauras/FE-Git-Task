import React from 'react';

const RepositorySearchPanel = ({
    onRepoSearch,
    onRepoSearchQueryChange,
}: {
    onRepoSearch: () => void;
    onRepoSearchQueryChange: (query: string) => void;
}) => {
    return (
        <aside>
            <h3>GitHub Repositories</h3>
            <div className="search-panel">
                <form className="search-form" role="search">
                    <input
                        aria-label="Search repositories"
                        placeholder="Keyword"
                        type="search"
                        name="search-repo"
                        onChange={(e) => onRepoSearchQueryChange(e.target.value)}
                    />

                    <div id="search-spinner" aria-hidden hidden={true} />

                    <div className="sr-only" aria-live="polite"></div>
                </form>

                <button type="submit" onClick={onRepoSearch}>
                    Search
                </button>
            </div>
        </aside>
    );
};

export default RepositorySearchPanel;
