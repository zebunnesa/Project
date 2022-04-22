const express=require('express')
const app=express()
const morgan= require('morgan')

app.set('view engine','ejs')


app.listen(3000)

app.use(express.static('public'))

app.use(morgan('dev'))


app.use ((req,res)=>{
    console.log('new request made')
    console.log(' host', req.hostname)
    console.log('path',req.path)
    console.log('method',  req.method)
    next()
})

app.use ((req,res,next)=>{
    console.log('in the next')
    // console.log('new request made')
    // console.log(' host', req.hostname)
    // console.log('path',req.path)
    // console.log('method',  req.method)
    next()
})



app.get('/',(res,req)=>{
    //res.render('index', {title: 'home'})
    blogs=[
    {title: 'yoshi', snippet: 'lorem ipsum'},
    {title: 'mario', snippet: 'lorem ipsum'},
    {title: 'how to defeal browser', snippet: 'lorem ipsum'},
   ]
})

app.get('./', (req,res)=>{
    res.sendFile('./view/index.html',{root:__dirname})
})

app.get('/about',(req,res)=>{
    //res.send('<p>about page</p>')
    res.sendFile('./view/about.html',{root:__dirname})
})

app.get('./blogs/create' ,(req,res)=>{
    //res.send('<p>about page</p>')
   res.render('create' ,{title: 'create a new blog'})
})


// app.get('/about-us',(req,res)=>{
//     //res.send('<p>about page</p>')
//     //res.sendFile('./view/about.html',{root:__dirname})

//     res.redirect('/about')
// })

// app.use((req,res)=>[
//     res.sendFile('./view/404.html', {root:__dirname})
// ])


app.get('/about',(req,res)=>{
    //res.send('<p>about page</p>')
    res.sendFile('./view/about.html',{root:__dirname})
})



app.use((req,res)=>[
    res.status(404).sendFile('./view/404.html', {root:__dirname})
])