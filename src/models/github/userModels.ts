import { TEmail, TIsoDateTime, TUrlString } from '@/models/commonTypes';

interface IGitHubUserPlanDto {
    name: string;
    space: number;
    private_repos: number;
    collaborators: number;
}

interface IGitHubUserDto {
    login: string;
    id: number;
    node_id: string;
    avatar_url: TUrlString;
    gravatar_id: string | '';
    url: TUrlString;
    html_url: TUrlString;
    followers_url: TUrlString;
    following_url: TUrlString;
    gists_url: TUrlString;
    starred_url: TUrlString;
    subscriptions_url: TUrlString;
    organizations_url: TUrlString;
    repos_url: TUrlString;
    events_url: TUrlString;
    received_events_url: TUrlString;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: TUrlString;
    location: string;
    email: TEmail;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: TIsoDateTime;
    updated_at: TIsoDateTime;
    private_gists: number;
    total_private_repos: number;
    owned_private_repos: number;
    disk_usage: number;
    collaborators: number;
    two_factor_authentication: boolean;
    plan: IGitHubUserPlanDto;
}

export type { IGitHubUserDto };
