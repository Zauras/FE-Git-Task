import React from 'react';

const RepositorySearchPanel = ({
    onRepoSearch,
    onRepoSearchQueryChange,
}: {
    onRepoSearch: () => void;
    onRepoSearchQueryChange: (query: string) => void;
}) => {
    return (
        <div id="sidebar">
            <form id="search-form" role="search">
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
    );
};

export default RepositorySearchPanel;
