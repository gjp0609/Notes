/**
 * 提交时自动更新目录
 */
const fs = require('fs');
const path = require('path');

const ignoredPath = ['.git', '.github', '.idea', 'images', 'node_modules'];

const rootPath = './';

const rootList = [];
listFile(rootPath, rootList);
sort(rootList);
fs.writeFile(path.resolve(rootPath, 'list.json'), JSON.stringify(rootList), (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(123);
        console.log('Done!');
    }
});
function listFile(parentPath, list) {
    let files = fs.readdirSync(path.resolve(parentPath));
    for (const filename of files) {
        let filePath = path.join(parentPath, filename);
        if (ignoredPath.indexOf(filename) < 0) {
            let stats = fs.statSync(path.resolve(filePath));
            if (stats.isDirectory()) {
                const children = [];
                listFile(filePath, children);
                list.push({
                    Id: filePath.replace(/\\/g, '/'),
                    Title: filename,
                    isDir: true,
                    children: children
                });
            } else if (filename.indexOf('.md') > 0) {
                list.push({
                    Id: filePath.replace(/\\/g, '/'),
                    Title: filename.substr(0, filename.length - 3).replace(/_/g, ' '),
                    isDir: false,
                    children: undefined
                });
            }
        }
    }
}

function sort(list) {
    list.sort((a, b) => {
        if (a.isDir) {
            if (b.isDir) {
                return a.Id > b.Id;
            } else {
                return -1;
            }
        } else {
            if (b.isDir) {
                return 1;
            } else {
                return a.Id > b.Id;
            }
        }
    });
    for (const item of list) {
        if (item.children) {
            sort(item.children);
        }
    }
}
