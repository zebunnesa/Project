const express=require('express')
const app=express()

app.set('view engine','ejs');
app.set('view ','myview');


app.listen(3000);
app.get('/',(req,res)=>{
    // res.send('<p>home pages</p>')
    res.render('index',{title:'Home'})
    // res.sendFile('./view/index.html',{root: __dirname})
})
app.get('/about',(req,res)=>{
    // res.send('<p>about pages</p>')
    // res.sendFile('./view/about.html',{root: __dirname})
    res.render('about')
})
app.get('/blogs/create',(req,res)=>{
    res.render()
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

app.use((res,req)=>{
    // res.status(404).sendFile('./view/404.html',{root: __dirname})
    res.statusCode(404).render('404')
})