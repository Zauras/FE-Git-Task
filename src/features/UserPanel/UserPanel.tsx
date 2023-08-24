import { ChangeEvent, useContext, useState } from 'react';

import { GitHubAccessContext } from '@/state/githubAcessContext/GithubAccessContext';

const UserPanel = () => {
    const { gitHubAccessDto, logInByAccessToken, logOut } = useContext(GitHubAccessContext);

    const [accessTokenInputValue, setAccessTokenInputValue] = useState('');
    const handleAccessTokenInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAccessTokenInputValue(e.target.value);
    };

    return (
        <div>
            {gitHubAccessDto.userName ? (
                <div>
                    <div>Hello there, {gitHubAccessDto.userName}</div>
                    <button onClick={logOut}>Log Out</button>
                </div>
            ) : (
                <div>
                    <form id="set-github-token" role="input">
                        <input
                            id="set-github-token-input"
                            aria-label="Access Token"
                            placeholder="access token"
                            type="input"
                            name="access-token-input"
                            value={accessTokenInputValue}
                            onChange={handleAccessTokenInputChange}
                        />

                        <div id="search-spinner" aria-hidden hidden={true} />

                        <div className="sr-only" aria-live="polite"></div>
                    </form>

                    <button type="submit" onClick={() => logInByAccessToken(accessTokenInputValue)}>
                        Log In
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserPanel;
