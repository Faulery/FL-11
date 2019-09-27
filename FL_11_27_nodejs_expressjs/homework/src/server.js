const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const routes = require('./routes');
const delete_authorization = require('./middlewares/delete-authorization')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(delete_authorization.delete_auth());

app.get('/', (req, res) => res.send('Car Restful CRUD API works'));

app.use(routes);
app.use(function (err, req, res, next) {
    res.render('error', {
        error: err
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}`));