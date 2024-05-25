import { request } from '@octokit/request';

/**
 * Gets the public repository data from GitHub.
 *
 * @param {string} user
 * @param {string} secret
 * @returns a promise.
 */
export function fetchRepositoriesFromApi(user, secret) {
	return request('GET /users/' + user + '/repos', {
		headers: {
			authorization: 'token ' + secret
		},
		username: user
	});
}
