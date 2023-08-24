import { createContext, ReactNode, useState } from 'react';
import { reqCheckIsGitHubAccessTokenValid, reqGetGitHubUser } from '@/api/gitHubApi';

interface IGitHubAccessDto {
    accessToken: string;
    userName: string;
}

const defaultGitHubAccessDto = {} as IGitHubAccessDto;

const GitHubAccessContext = createContext<{
    gitHubAccessDto: IGitHubAccessDto;
    logInByAccessToken: (accessToken: string) => void;
    logOut: () => void;
}>({
    gitHubAccessDto: defaultGitHubAccessDto,
    logInByAccessToken: (accessToken: string) => null,
    logOut: () => null,
});

const GitHubAccessProvider = ({ children }: { children: ReactNode }) => {
    const [gitHubAccessDto, setGitHubAccessDto] =
        useState<IGitHubAccessDto>(defaultGitHubAccessDto);

    const handleSetAccessToken = (accessToken: string) => {
        (async () => {
            // TODO set is loading
            const { data, error } = await reqGetGitHubUser({ accessToken });

            if (data) {
                setGitHubAccessDto({
                    accessToken: accessToken,
                    userName: data.name,
                });
            }

            // TODO set is not loading
        })();
    };

    const handleLogOut = () => {
        setGitHubAccessDto(defaultGitHubAccessDto);
    };

    return (
        <GitHubAccessContext.Provider
            value={{
                gitHubAccessDto,
                logInByAccessToken: handleSetAccessToken,
                logOut: handleLogOut,
            }}
        >
            {children}
        </GitHubAccessContext.Provider>
    );
};

export { GitHubAccessContext, GitHubAccessProvider };
