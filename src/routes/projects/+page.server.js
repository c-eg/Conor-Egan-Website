import { request } from '@octokit/request';
import { SECRET_GITHUB_API_TOKEN } from '$env/static/private';
import { PUBLIC_GITHUB_USER } from '$env/static/public';
import NodeCache from 'node-cache';

const repositoryCache = new NodeCache({
	stdTTL: 1800, // 30 mins
	maxKeys: 1
});

export async function load() {
	try {
		const repositories = await getRepositories();

		return {
			repositories: repositories
		};
	} catch (err) {
		console.log(err);
		return {
			error: true
		};
	}
}

/**
 * Gets the public repository data from cache, or GitHub.
 *
 * @returns the repositories.
 */
async function getRepositories() {
	if (repositoryCache.has('repositories') === true) {
		return repositoryCache.get('repositories');
	}

	const repositories = await getRepositoriesFromApi();
	const filteredRepositories = filterRepositories(repositories.data);

	repositoryCache.set('repositories', filteredRepositories);
	return filteredRepositories;
}

/**
 * Gets the public repository data from GitHub.
 *
 * @returns a promise.
 */
function getRepositoriesFromApi() {
	return request('GET /users/' + PUBLIC_GITHUB_USER + '/repos', {
		headers: {
			authorization: 'token ' + SECRET_GITHUB_API_TOKEN
		},
		username: PUBLIC_GITHUB_USER
	});
}

/**
 * Filters the repositories from GitHub API.
 *
 * @param {Array} repositories the list of repositories to filter.
 * @returns an array of repositories.
 */
function filterRepositories(repositories) {
	return repositories.filter((repo) => !repo.fork);
}
