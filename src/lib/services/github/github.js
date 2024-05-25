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
