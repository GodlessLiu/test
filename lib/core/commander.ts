import { type Command } from "commander";
import { execSync } from 'child_process'
export default function registerCommanders(program: Command) {
    // git init
    program.command('gi')
        .action(() => {
            execSyncWithD("git init")
        })
    // git add
    program.command('ga')
        .argument("[file]", 'file to add', ".")
        .action((file) => {
            execSyncWithD(`git add ${file}`)
        })
    // git commit
    program.command('gc')
        .argument("[message]", "message to add", "")
        .action((message) => {
            execSyncWithD(`git commit -m "${message}"`)
        })
    // git clone
    program.command("go")
        .argument("<url>", "url to clone from")
        .action((url) => {
            execSyncWithD(`git clone ${url}`)
        })
    // git push
    program.command("gp")
        .argument("[branch]", "branch to push", 'master')
        .option("-u", "强制推送", false)
        .action((branch, option) => {
            if (option.u) {
                execSyncWithD(`git push -u origin ${branch}`)
            } else {
                execSyncWithD(`git push origin ${branch}`)
            }

        })
    // git remote add origin
    program.command("gr")
        .argument("<rep>", "rep to remote")
        .action((rep) => {
            execSyncWithD(`git remote add origin ${rep}`)
        })
}


function execSyncWithD(command: string) {
    execSync(command, { stdio: 'inherit' })
}