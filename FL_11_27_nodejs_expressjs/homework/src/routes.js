const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const auth = require('./middlewares/delete-authorization');
const car = require('./handlers/car');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/car', function (req, res) {
    let result = car.createNewCar(req.body.id, req.body.brand, req.body.model, req.body.engineVolume, req.body.year);
    res.status(result.status).send(result.body);
});

router.put('/car/:id', function (req, res) {
    let result = car.putCarById(req.params.id, req.body.brand, req.body.model, req.body.engineVolume, req.body.year);
    res.status(result.status).send(result.body);
});

router.get('/car/:id', function (req, res) {
    let result = car.getCarById(req.params.id);
    res.status(result.status).send(result.body);
});

router.use('/car', function (req, res, next) {
    let result = auth.authChecker(req.headers.authorization);
    if (result) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});

router.delete('/car/:id', function (req, res) {
    let result = car.deleteCarById(req.params.id);
    res.status(result.status).send(result.body);
});

router.get('/car', function (req, res) {
    let result = car.getAllCars();
    res.status(result.status).send(result.body);
});

module.exports = router;