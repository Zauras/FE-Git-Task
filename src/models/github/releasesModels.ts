import { TIsoDateTime, TUrlString } from '@/models/commonTypes';

interface IReleaseAuthorDto {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
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
}

interface IReleaseAssetDto {
    url: TUrlString;
    browser_download_url: TUrlString;
    id: number;
    node_id: string;
    name: string;
    label: string;
    state: string;
    content_type: string;
    size: number;
    download_count: number;
    created_at: TIsoDateTime;
    uploaded_at: TIsoDateTime;
    uploader: IReleaseAuthorDto;
}
interface IRepoReleasesDto {
    url: TUrlString;
    assets_url: TUrlString;
    upload_url: TUrlString;
    html_url: TUrlString;
    id: number;
    author: IReleaseAuthorDto;
    node_id: string;
    tag_name: string;
    target_commitish: string;
    name: string;
    draft: boolean;
    prerelease: boolean;
    created_at: TIsoDateTime;
    published_at: TIsoDateTime;
    assets: IReleaseAssetDto[];
    tarball_url: TUrlString;
    zipball_url: TUrlString;
    body: string;
}

export type { IRepoReleasesDto };
