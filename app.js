const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const contact = require("./models/contact");
const {json} = require("express");
const { encode } = require("punycode");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
template_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded(encode))

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
     res.render("index")
});

app.post("/register",async(req,res)=>{
    try{
        console.log(req.body.name);
    }catch(error){
        res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`)
})