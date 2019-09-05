const express = require('express');
const dbConnect = require('./util/database');
const apiRoutes = require('./routes/api-routes');


const app = express();
const port = 3000;

dbConnect().then(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}).catch(err => console.log(err));



app.use('/api', apiRoutes);