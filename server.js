const express=require('express')
const app=express()
const PORT=4000
app.listen(PORT,(error)=>error ? console.log(error):console.log("server runing on Port",PORT))




const date=new Date(Date.now())
const day=date.getDay()
const hour=date.getHours()



app.use((req,res,next)=>{
    if(day>5 || hour<9 || hour>17){
        res.send('<h1> Not available </h1>')
    }
    else {
        next()
    }
},express.static('public'))