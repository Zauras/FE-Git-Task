import { TIsoDateTime, TUrlString } from '@/models/commonTypes';

interface IRepoLicenseDto {
    key: string;
    name: string;
    spdx_id: string;
    url: TUrlString;
    node_id: string;
}

interface IRepoOwnerDto {
    avatar_url: TUrlString;
    events_url: TUrlString;
    followers_url: TUrlString;
    following_url: TUrlString;
    gists_url: TUrlString;
    gravatar_id: string | '';
    html_url: TUrlString;
    id: number;
    login: string;
    node_id: string;
    organizations_url: TUrlString;
    received_events_url: TUrlString;
    repos_url: TUrlString;
    site_admin: boolean;
    starred_url: TUrlString;
    subscriptions_url: TUrlString;
    type: string;
    url: TUrlString;
}

interface IRepoInfoDto {
    allow_forking: boolean;
    archive_url: TUrlString;
    archived: boolean;
    assignees_url: TUrlString;
    blobs_url: TUrlString;
    branches_url: TUrlString;
    clone_url: TUrlString;
    collaborators_url: TUrlString;
    comments_url: TUrlString;
    commits_url: TUrlString;
    compare_url: TUrlString;
    contents_url: TUrlString;
    contributors_url: TUrlString;
    created_at: TIsoDateTime;
    default_branch: string;
    deployments_url: TUrlString;
    description: string;
    disabled: boolean;
    downloads_url: TUrlString;
    events_url: TUrlString;
    fork: boolean;
    forks: number;
    forks_count: number;
    forks_url: TUrlString;
    full_name: string;
    git_commits_url: TUrlString;
    git_refs_url: TUrlString;
    git_tags_url: TUrlString;
    git_url: TUrlString;
    has_discussions: boolean;
    has_downloads: boolean;
    has_issues: boolean;
    has_pages: boolean;
    has_projects: boolean;
    has_wiki: boolean;
    homepage: TUrlString;
    hooks_url: TUrlString;
    html_url: TUrlString;
    id: number;
    is_template: boolean;
    issue_comment_url: TUrlString;
    issue_events_url: TUrlString;
    issues_url: TUrlString;
    keys_url: TUrlString;
    labels_url: TUrlString;
    language: string;
    languages_url: TUrlString;
    license: IRepoLicenseDto;
    merges_url: TUrlString;
    milestones_url: TUrlString;
    mirror_url: TUrlString | null;
    name: string;
    node_id: string;
    notifications_url: TUrlString;
    open_issues: number;
    open_issues_count: number;
    owner: IRepoOwnerDto;
    private: boolean;
    pulls_url: TUrlString;
    pushed_at: TIsoDateTime;
    releases_url: TUrlString;
    score: number;
    size: number;
    ssh_url: string;
    stargazers_count: number;
    stargazers_url: TUrlString;
    statuses_url: TUrlString;
    subscribers_url: TUrlString;
    subscription_url: TUrlString;
    svn_url: TUrlString;
    tags_url: TUrlString;
    teams_url: TUrlString;
    topics: string[];
    trees_url: TUrlString;
    updated_at: TIsoDateTime;
    url: TUrlString;
    visibility: string;
    watchers: number;
    watchers_count: number;
    web_commit_signoff_required: boolean;
}
interface IRepoSearchResp {
    incomplete_results: boolean;
    items: IRepoInfoDto[];
    total_count: number;
}

export type { IRepoLicenseDto, IRepoOwnerDto, IRepoInfoDto, IRepoSearchResp };
