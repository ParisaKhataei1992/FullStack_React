var fs = require('fs');
var filePath = process.cwd() + "/logs";
if (fs.existsSync(filePath)){
    process.chdir('logs');
    for (var index = 0; index < 10; index++){
        console.log(('deleted files...log'+[index]+".txt"));
        fs.unlinkSync('log'+[index]+".txt");
    }
    process.chdir('../');
    fs.rmdirSync('logs');
}else{
    fs.mkdirSync("logs");
    process.chdir('logs');
    for (var index = 0; index < 10; index++){
        console.log(('log'+[index]+".txt"));
        fs.writeFileSync('log'+[index]+".txt", "AM I BOTHERING YOU!");
    }
}