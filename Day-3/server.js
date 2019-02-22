const express = require('express');
const app= express();
const port =6531;
app.listen(port, function(){
    console.log("Server running at " +port);
});