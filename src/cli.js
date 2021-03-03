import { Command } from 'commander'
import git from '../src/github'

const program = new Command();
program.version('0.0.1');

let options = program.option('-u , --user <user_name>', 'github user name');

export async function cli(args) {
    let options = program
        .parse(args)
        .opts();
    let repositories = await git.listUserRepositories(options.user);
    console.log(repositories);
}