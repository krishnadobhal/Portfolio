const express=require("express")
const bodyParser=require("body-parser")

const app=express()
app.use(express.static("public"));
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.listen(80,()=>{console.log("Listening")})

app.post("/",(req,res)=>{
    res.sendFile(__dirname+"/Success.html")
})