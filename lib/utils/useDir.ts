// import fs from 'fs';
// import path from 'path';
// export function getNowDir(): string {
//     return process.cwd()
// }
// export type Dir = {
//     id: number
//     name: string;
//     path: string;
//     parentId: number,
//     isDirectory: boolean;
//     children?: Dir[]
// }

// export type DirList = Dir[]

// export type ignoreList = string[]

// const whiteList: ignoreList = ['node_modules']
// // 递归调用
// export function getDirLists(dirPath: string): DirList {
//     const dirList: DirList = []
//     let id = 0 // 根目录的id
//     function getDirLocalList(dir, parentId) {
//         const files = fs.readdirSync(dir)
//         for (let index = 0; index < files.length; index++) {
//             const file = files[index]
//             id = id + 1
//             const fileWithFullPath = path.resolve(dir, file)
//             const state = fs.statSync(fileWithFullPath)
//             if (state.isDirectory() && !whiteList.includes(file)) {
//                 dirList.push({
//                     id: id,
//                     name: file,
//                     path: fileWithFullPath,
//                     parentId: parentId,
//                     isDirectory: true
//                 })
//                 getDirLocalList(fileWithFullPath, id)
//             } else if (!whiteList.includes(file)) {
//                 dirList.push({
//                     id: id,
//                     name: file,
//                     path: fileWithFullPath,
//                     parentId: parentId,
//                     isDirectory: false
//                 })
//             }
//         }
//     }
//     getDirLocalList(dirPath, id)
//     return dirList
// }

// // 非递归调用
// export function getDirList(dirPath: string) {
//     const dirList: DirList = []
//     const dirs = fs.readdirSync(dirPath)
//     for (let index = 0; index < dirs.length; index++) {
//         if (!whiteList.includes(dirs[index])) {
//             dirList.push({
//                 id: index,
//                 name: dirs[index],
//                 path: path.resolve(dirPath, dirs[index]),
//                 isDirectory: fs.statSync(path.resolve(dirPath, dirs[index])).isDirectory(),
//                 parentId: 0
//             })
//         }
//     }
//     return dirList
// }