import { type Command } from "commander";
import { execSync } from 'child_process'
export default function registerCommanders(program: Command) {
    // git init
    program.command('gi')
        .description("初始化git")
        .action(() => {
            execSyncWithD("git init")
        })
    // git add
    program.command('ga')
        .description("添加文件添加到缓存区")
        .argument("[file]", 'file to add', ".")
        .action((file) => {
            execSyncWithD(`git add ${file}`)
        })
    // git commit
    program.command('gc')
        .description("将暂存区中的文件，提交到仓库中")
        .argument("[message]", "message to add", "")
        .action((message) => {
            execSyncWithD(`git commit -m "${message}"`)
        })
    // git clone
    program.command("go")
        .description("远程地址克隆文件")
        .argument("<url>", "url to clone from")
        .action((url) => {
            execSyncWithD(`git clone ${url}`)
        })
    // git push
    program.command("gp")
        .description("推送远程仓库")
        .argument("<branch>", "branch to push")
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
        .description("添加远程仓库")
        .argument("<rep>", "rep to remote")
        .action((rep) => {
            execSyncWithD(`git remote add origin ${rep}`)
        })
    // git branch 
    program.command("gb")
        .description("创建一个新分支")
        .argument("<branch>", "branch to create")
        .action((branch) => {
            execSyncWithD(`git branch ${branch}`)
        })
    // git fetch origin master
    program.command("gf")
        .description("从远程仓库获取最新内容")
        .argument("<branch>", "branch to fetch")
        .action((branch) => {
            execSyncWithD(`git fetch origin ${branch}`)
        })
}


function execSyncWithD(command: string) {
    execSync(command, { stdio: 'inherit' })
}