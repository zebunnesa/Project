const fs=require('fs');
const readSteam=fs.createReadStream('./docs/blog3.txt')
readSteam.on('data',(chunk)=>{
    console.log('---New Chunk---');
    console.log(chunk.toString())
})