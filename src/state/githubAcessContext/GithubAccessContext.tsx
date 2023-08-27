import { createContext, ReactNode, useState } from 'react';

import { reqGetGitHubUser } from '@/api/gitHubApi';

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
        const { data, error } = await reqGetGitHubUser({ accessToken });

        if (data) {
            setGitHubAccessDto({
                accessToken: accessToken,
                userName: data.name,
            });
        }
        sessionStorage.setItem('gitHubAccessToken', accessToken);
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
