import { Command } from 'commander'
import { Select } from 'enquirer'
import git from '../src/github'

const program = new Command();
program.version('0.0.1');

let options = program.option('-u , --user <user_name>', 'github user name');

async function questions(params) {
    const prompt = new Select({
        name: 'repositories',
        message: 'Select repository',
        choices: params
    })
    return await prompt.run();
}

export async function cli(args) {
    let options = program
        .parse(args)
        .opts();
    let repositories = await git.listUserRepositories(options.user);
    let repo = await questions(repositories);
    let result = await git.getRepositoryData(options.user, repo);
    console.log(result);
}