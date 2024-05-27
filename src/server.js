const app = require('./app');
require('dotenv').config();
const port = process.env.PORT;
const api = process.env.API_URL;

app.listen(port, () => {
    console.log(`Server running on localhost:${port}/${api}`);
})