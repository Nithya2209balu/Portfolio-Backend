const express = require('express');
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());

app.use("/api/portfolio",portfolioRoute);


const port = process.env.PORT || 5000;
const path = require("path");

if(process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join(__dirname, "portfolio/build")));
    app.get("/",(req,res)=>{
        res.send("<h1>hello</h1>");
        
    
    });
}

app.listen(port,()=>{
console.log(`server running on port ${port}`);
});

