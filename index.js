const path = require("path");

// console.log(path.sep)

// console.log(process.env.PATH)

// console.log(path.delimiter)

// const currentFilePath = __filename
// console.log(currentFilePath)

// let result = path.basename(currentFilePath)
// console.log(result)

// let baseName = path.basename(currentFilePath)
// console.log('basename >',baseName)

// let baseNameWithoutExt = path.basename(currentFilePath,'.js')
// console.log('basename without extension >',baseNameWithoutExt)

// let dirName = path.dirname(currentFilePath)
// console.log('dirName >',dirName)






// //**********Lecture 2 (built in function module(Node-js)************* **/



// //Asynchronous way to read the file

  const fs = require('fs');
const { buffer } = require("stream/consumers");

console.log('READ START')
fs.readFile('input.txt', function(err,data){
    if(err){
        console.log('Error',err)
        return err;
    }

    console.log('data',data.toString())
    console.log('READ END')
    return data;
});


// //synchronous way to read the file


const data = fs.readFileSync('input.txt')
console.log('Data: ',data.toString())
console.log('READ END')
console.log('Other stuff')


//open and close file

const buf = new Buffer(1024)
fs.open('input.txt','r+',function(err,fd){
    if(err){
        console.log('Error in opening file',err)
    }
    console.log('File opening Successfully!')

    fs.read(fd,buf,0,buf.length,0,function(er,bytes){
        if(er){
            console.log('Error in file reading!')
        }
        console.log('Data :',bytes)
        console.log('Data',buf.slice(0,bytes).toString())
        fs.close(fd,function(err) {
            if(err){
                console.log('Error in closing file');
            }else{
                console.log('success in closing file');
            }
        })
    })
})


// Writting to file

fs.writeFile('input.txt','Pw-skills',function(err){
    if(err){
        console.log('Error in writing file!')
    }else{
        console.log('Success in writting file!');
    }
})


//Append to the file

fs.appendFile('input.txt','---Dhheraj chaubey','utf8',function(err){
    if(err){
               console.log('Error in appending file!')
             }else{
                 console.log('Success in appending file!');
             }
})


// delete file

fs.unlink('input.txt',function(err){
    if(err){
        console.log('Error in deleting file!')
    }else{
        console.log('Success in deleting of file')
    }
})