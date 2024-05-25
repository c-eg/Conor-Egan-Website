import { fetchRepositoriesFromApi } from '$lib/services/github';
import { SECRET_GITHUB_API_TOKEN } from '$env/static/private';
import { PUBLIC_GITHUB_USER } from '$env/static/public';
import NodeCache from 'node-cache';

const repositoryCache = new NodeCache({
	stdTTL: 300, // 5 mins
	maxKeys: 1
});

/**
 * Gets the public repository data from cache, or GitHub.
 *
 * @returns the repositories.
 */
export async function getRepositories() {
	if (repositoryCache.has('repositories')) {
		return repositoryCache.get('repositories');
	}

	let repositories = await fetchRepositoriesFromApi(PUBLIC_GITHUB_USER, SECRET_GITHUB_API_TOKEN);
	repositories = repositories.data.sort((a, b) => b.stargazers_count - a.stargazers_count);

	repositoryCache.set('repositories', repositories);
	return repositories;
}
