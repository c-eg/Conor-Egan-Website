import { request } from '@octokit/request';

/**
 * Gets the public repository data from GitHub.
 *
 * @param {string} secret - The GitHub API secret.
 * @param {string} username - The username to get repos for.
 * @returns a promise.
 */
export function fetchRepositoriesFromApi(secret, username) {
	return request('GET /users/{username}/repos', {
		headers: {
			authorization: 'token ' + secret
		},
		username: username
	});
}

/**
 * Gets the languages used within a repository GitHub.
 *
 * @param {string} secret - The GitHub API secret.
 * @param {string} owner - The owner of the repo.
 * @param {string} repo - The repo.
 * @returns a promise.
 */
export function fetchRepositoryLanguagesFromApi(secret, owner, repo) {
	return request('GET /repos/{owner}/{repo}/languages', {
		headers: {
			authorization: 'token ' + secret
		},
		owner: owner,
		repo: repo
	});
}
