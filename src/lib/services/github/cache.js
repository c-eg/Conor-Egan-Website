import { fetchRepositoriesFromApi, fetchRepositoryLanguagesFromApi } from '$lib/services/github/github';
import { SECRET_GITHUB_API_TOKEN } from '$env/static/private';
import { PUBLIC_GITHUB_USER } from '$env/static/public';
import NodeCache from 'node-cache';

const repositoryCache = new NodeCache({
	stdTTL: 300, // 5 mins
	maxKeys: 1
});

/**
 * Gets the public repository data, with repository languages used, from the cache, or GitHub API.
 *
 * @returns the repositories.
 */
export async function getRepositories() {
	if (repositoryCache.has('repositories')) {
		return repositoryCache.get('repositories');
	}

	const repos = [];

	let repositoriesFromGithub = (
		await fetchRepositoriesFromApi(SECRET_GITHUB_API_TOKEN, PUBLIC_GITHUB_USER)
	)?.data.sort((a, b) => b.stargazers_count - a.stargazers_count);

	for (const repo of repositoriesFromGithub) {
		let repositoryLanguages = (
			await fetchRepositoryLanguagesFromApi(SECRET_GITHUB_API_TOKEN, PUBLIC_GITHUB_USER, repo.name)
		)?.data;

		repos.push({
			link: repo.html_url,
			title: repo.name,
			description: repo.description,
			stars: repo.stargazers_count,
			languages: repositoryLanguages !== undefined ? Object.keys(repositoryLanguages) : []
		});
	}

	repositoryCache.set('repositories', repos);
	return repos;
}
