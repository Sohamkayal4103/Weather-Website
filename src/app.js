const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const port=process.env.PORT || 8000;

const staticpath=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
// console.log(staticpath);
app.set("views", staticpath);
app.set("view engine","hbs");
hbs.registerPartials(partials_path);
app.use(express.static(staticpath));

app.get("",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404error");
});
app.listen(port,()=>{
    console.log(`Listening to the requests made on port ${port}`);
});
