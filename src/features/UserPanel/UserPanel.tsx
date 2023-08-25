import { ChangeEvent, useContext, useState } from 'react';

import { GitHubAccessContext } from '@/state/githubAcessContext/GithubAccessContext';
import ButtonSC from '@/components/Button/ButtonSC.styles';
import TextInputSC from '@/components/Input/TextInputSC.styles';
import UserPanelContainerSC from '@/features/UserPanel/styles/UserPanelContainerSC.styles';

const UserPanel = () => {
    const { gitHubAccessDto, logInByAccessToken, logOut } = useContext(GitHubAccessContext);

    const [accessTokenInputValue, setAccessTokenInputValue] = useState('');
    const handleAccessTokenInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAccessTokenInputValue(e.target.value);
    };

    return (
        <UserPanelContainerSC>
            {gitHubAccessDto.userName ? (
                <div className="user-profile-container">
                    <h3 className="user-greeting">Hello there, {gitHubAccessDto.userName}</h3>
                    <ButtonSC onClick={logOut}>Log Out</ButtonSC>
                </div>
            ) : (
                <div className="log-in-panel-container">
                    <h3>Log In</h3>

                    <div className="log-in-form-container">
                        <form id="set-github-token" role="input">
                            <TextInputSC
                                id="set-github-token-input"
                                aria-label="Access Token"
                                minWidth="20rem"
                                placeholder="Access token"
                                type="input"
                                name="access-token-input"
                                value={accessTokenInputValue}
                                onChange={handleAccessTokenInputChange}
                            />

                            <div id="search-spinner" aria-hidden hidden={true} />

                            <div className="sr-only" aria-live="polite"></div>
                        </form>

                        <ButtonSC
                            type="submit"
                            onClick={() => logInByAccessToken(accessTokenInputValue)}
                        >
                            Submit
                        </ButtonSC>
                    </div>
                </div>
            )}
        </UserPanelContainerSC>
    );
};

export default UserPanel;
