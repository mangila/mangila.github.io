import { Octokit } from "octokit";
import { setInCache, getFromCache } from "./cache";

import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

export const octokit = new Octokit({
  auth: import.meta.env.GITHUB_USER_TOKEN,
  retry: { enabled: false },
  throttle: { enabled: false },
});

export type GetReadmeResponse = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.getReadme
>;

export async function getGitHubReadmeAsync(
  owner: string,
  repo: string
): Promise<GetReadmeResponse> {
  const cacheKey = `github-readme-${owner}-${repo}`;
  const cached = getFromCache<GetReadmeResponse>(cacheKey);
  if (cached) {
    console.log("CACHE HIT ", cacheKey);
    return cached;
  }
  console.log("CACHE MISS ", cacheKey);
  const data = await fetchGitHubReadmeAsync(owner, repo);
  setInCache<GetReadmeResponse>(cacheKey, data);
  return data;
}

async function fetchGitHubReadmeAsync(
  owner: string,
  repo: string
): Promise<GetReadmeResponse> {
  const response = await octokit.rest.repos.getReadme({
    owner,
    repo,
  });
  return response.data;
}

export async function convertMarkdownToHtmlAsync(
  contenBase64: string
): Promise<string> {
  const cacheKey = `markdown-html-${contenBase64.substring(0, 10)}`;
  const cached = getFromCache<string>(cacheKey);
  if (cached) {
    console.log("CACHE HIT ", cacheKey);
    return cached;
  }
  console.log("CACHE MISS ", cacheKey);
  const data = await fetchConvertMarkdownToHtmlAsync(contenBase64);
  setInCache(cacheKey, data);
  return data;
}

async function fetchConvertMarkdownToHtmlAsync(
  contenBase64: string
): Promise<string> {
  const markdown = Buffer.from(contenBase64, "base64").toString("utf-8");
  const response = await octokit.rest.markdown.render({
    text: markdown,
    mode: "gfm",
  });
  return response.data;
}

export type GithubRepositoriesResponse = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.listForUser
>;

export async function getGitHubRepositoriesAsync(
  owner: string
): Promise<GithubRepositoriesResponse> {
  const cacheKey = `github-repos-${owner}`;
  const cached = getFromCache<GithubRepositoriesResponse>(cacheKey);
  if (cached) {
    console.log("CACHE HIT ", cacheKey);
    return cached;
  }
  console.log("CACHE MISS ", cacheKey);
  const data = await fetchGitHubRepositoriesAsync(owner);
  setInCache<GithubRepositoriesResponse>(cacheKey, data);
  return data;
}

async function fetchGitHubRepositoriesAsync(
  owner: string
): Promise<GithubRepositoriesResponse> {
  const response = await octokit.rest.repos.listForUser({
    username: owner,
    per_page: 100,
  });
  return response.data;
}

export type GithubRepositoryResponse = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.get
>;

export async function getGitHubRepositoryAsync(
  owner: string,
  repo: string
): Promise<GithubRepositoryResponse> {
  const cacheKey = `github-repos-${owner}-${repo}`;
  const cached = getFromCache<GithubRepositoryResponse>(cacheKey);
  if (cached) {
    console.log("CACHE HIT ", cacheKey);
    return cached;
  }
  console.log("CACHE MISS ", cacheKey);
  const data = await fetchGitHubRepository(owner, repo);
  setInCache<GithubRepositoryResponse>(cacheKey, data);
  return data;
}

async function fetchGitHubRepository(
  owner: string,
  repo: string
): Promise<GithubRepositoryResponse> {
  const response = await octokit.rest.repos.get({
    owner: owner,
    repo: repo,
  });
  return response.data;
}

export type GithubUserResponse = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.users.getByUsername
>;

export async function getGitHubUserAsync(
  owner: string
): Promise<GithubUserResponse> {
  const cacheKey = `github-user-${owner}`;
  const cached = getFromCache<GithubUserResponse>(cacheKey);
  if (cached) {
    console.log("CACHE HIT ", cacheKey);
    return cached;
  }
  console.log("CACHE MISS ", cacheKey);
  const data = await fetchGitHubUserAsync(owner);
  setInCache<GithubUserResponse>(cacheKey, data);
  return data;
}

async function fetchGitHubUserAsync(
  owner: string
): Promise<GithubUserResponse> {
  const response = await octokit.rest.users.getByUsername({
    username: owner,
  });
  return response.data;
}

export type GithubGistsResponse = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.gists.listForUser
>;

export type GithubGistResponse = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.gists.get
>;

export async function getGitHubGistsAsync(
  owner: string
): Promise<GithubGistsResponse> {
  const cacheKey = `github-gists-${owner}`;
  const cached = getFromCache<GithubGistsResponse>(cacheKey);
  if (cached) {
    console.log("CACHE HIT ", cacheKey);
    return cached;
  }
  console.log("CACHE MISS ", cacheKey);
  const data = await fetchGitHubGistsAsync(owner);
  setInCache<GithubGistsResponse>(cacheKey, data);
  return data;
}

async function fetchGitHubGistsAsync(
  owner: string
): Promise<GithubGistsResponse> {
  const response = await octokit.rest.gists.listForUser({
    username: owner,
  });
  return response.data;
}
