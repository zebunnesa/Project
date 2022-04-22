const http=require('http')
const fs=require('fs')
const _=require('lodash')
const server=http.createServer((req,res)=>{
    const number=_.random(0,20)
    console.log(number)
    // console.log(req.url,req.method);
    res.setHeader("Content-Types","text/plain")

    let path='./view/';
    switch(req.url){
        case'/':
        path+='index.html';
        res.statusCode=200;
        break;
        case'/about':
        path+='about.html';
        res.statusCode=200;
        break;
        case'/about-me':
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end();
        break;
        default:
            path+='404.html'
            res.statusCode=404;
            break;

    }


    // req.write('<head><link rel="styleseet" href="#"</head>')
    // res.write('<p> hello again ninjas</p>')
    // res.write('hello,ninjas')
    // res.end()
    fs.readFile('./view/index.html',(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            // res.write(data);
            res.statusCode=200;
            res.end(data)
        }
})
});

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
})