const path= require('path');
const publicpath= path.join(__dirname, '../public');
const express= require('express');
const app=express();
const port= process.env.PORT || 3000;
app.use(express.static(publicpath));
app.listen(port,() => {
console.log(`server is running ${port}`);
});