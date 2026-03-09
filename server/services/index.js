const express = require('express');
const app = express();
const memberRoutes = require('../routes/member.route.js');
const headRoutes = require('../routes/head.routes.js');  

app.use(express.json());

app.use('', memberRoutes);
app.use('', headRoutes);  


app.listen(5000, () => {
    console.log('server is running');
});
