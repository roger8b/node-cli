import { Octokit } from '@octokit/rest'

const octokit = new Octokit()

async function listUserRepositories(username) {
    const result = await octokit.repos.listForUser(
        {
            username: username,
            per_page: 10
        }
    );
    return result.data.map(repo => { return repo.name });
}

async function getRepositoryData(owner, repo) {
    const result = await octokit.repos.get(
        { owner, repo }
    );
    return result.data;
}

export default { getRepositoryData, listUserRepositories };