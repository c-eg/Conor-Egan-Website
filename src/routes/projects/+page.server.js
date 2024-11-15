import { getRepositories } from '$lib/services/github/cache';

export async function load() {
	try {
		const repositories = await getRepositories();

		return {
			repositories: repositories
		};
	} catch (err) {
		console.log(err);
		return {
			repositories: []
		};
	}
}
