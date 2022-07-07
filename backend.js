const PORT = 8000;
const express = require('express'); //  gets express dependancy(package) from package.json
const cors = require('cors');
const axios = require('axios');
require('dotenv').config(); //  grabs all variables defined in .env file

const app = express() // () calls the variable express
app.listen(8000, () => console.log(`server is running on port ${PORT}`)); // listen method comes from express package
//  to see the changes, we installed a package called nodemon
//  and made changes to package.js in scripts

app.get('/', (req,res) =>{
    res.json('hi')
}); //  get is a method '/' is a path of local host 8000. (req, res) is a callback stands for request and response
// res.json shows results in the browser.
