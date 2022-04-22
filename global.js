console.log(global)
global.setTimeout(() => {
    console.log('in the timeout')
}, 2000);
const it=setInterval(()=>{
    console.log('in the set interval')
},2000)