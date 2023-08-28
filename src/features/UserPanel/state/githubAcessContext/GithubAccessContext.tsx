import { createContext, ReactNode, useState } from 'react';

import { reqGetGitHubUser } from '@/api/gitHubApi';
import { GIT_HUB_ACCESS_TOKEN_STORAGE_KEY } from '@/const';

interface IGitHubAccessDto {
    accessToken: string;
    userName: string;
}

const defaultGitHubAccessDto = {} as IGitHubAccessDto;

const GitHubAccessContext = createContext<{
    gitHubAccessDto: IGitHubAccessDto;
    isLoading: boolean;
    logInByAccessToken?: (accessToken: string) => Promise<void>;
    logOut?: () => void;
}>({
    gitHubAccessDto: defaultGitHubAccessDto,
    isLoading: false,
});

const GitHubAccessProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [gitHubAccessDto, setGitHubAccessDto] =
        useState<IGitHubAccessDto>(defaultGitHubAccessDto);

    const handleSetAccessToken = async (accessToken: string) => {
        setIsLoading(true);
        sessionStorage.setItem(GIT_HUB_ACCESS_TOKEN_STORAGE_KEY, accessToken);
        const { data, error } = await reqGetGitHubUser();

        if (data) {
            setGitHubAccessDto({
                accessToken: accessToken,
                userName: data.name,
            });
        }
        setIsLoading(false);
    };

    const handleLogOut = () => {
        setGitHubAccessDto(defaultGitHubAccessDto);
        sessionStorage.removeItem('gitHubAccessToken');
    };

    return (
        <GitHubAccessContext.Provider
            value={{
                isLoading,
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
