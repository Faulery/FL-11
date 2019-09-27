module.exports.delete_auth = function () {
    return function (req, res, next) {
        if (req.method === 'DELETE') {

            if (req.get('Authorization')) {
                if (req.get('Authorization') === 'X-Password qwerty') {
                    next();
                } else {
                    res.status(401).send('Unauthorized');
                }
            } else {
                res.status(401).send('Unauthorized');
            }
        } else {
            next();
        }
    }
}