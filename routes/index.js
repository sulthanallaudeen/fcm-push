var express = require('express');
var router = express.Router();
var FCM = require('fcm-push');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'FCM Push Notification' });
});

/* POST Send Push Notification */
router.post('/sendPush', function(req, res, next) {

    req.checkBody({
        'key': {
            notEmpty: true,
            notEmpty: {
                errorMessage: "Key should not be empty"
            },
            isLength: {
                options: [{
                    min: 10,
                    max: 1000
                }],
                errorMessage: 'Key should between 10 - 1000 characters long'
            }
        },
        'to': {
            notEmpty: true,
            notEmpty: {
                errorMessage: "Device Id should not be empty"
            },
            isLength: {
                options: [{
                    min: 50
                }],
                errorMessage: 'Device id should atleast 50 characters long'
            }
        },
        'title': {
            notEmpty: true,
            notEmpty: {
                errorMessage: "Title should not be empty"
            },
            isLength: {
                options: [{
                    min: 2,
                    max: 100
                }],
                errorMessage: 'Title should between 2 to 100 characters long'
            }
        },
        'body': {
            notEmpty: true,
            notEmpty: {
                errorMessage: "Body should not be empty"
            },
            isLength: {
                options: [{
                    min: 2,
                    max: 1000
                }],
                errorMessage: 'Body should between 2 to 1000 characters long'
            }
        }
    });

    var errors = req.validationErrors();
    if (errors) {
        res.status(200).json({
            "success": "0",
            "message": errors
        });
    } else {
        var serverKey = req.body.key;
        var fcm = new FCM(serverKey);
        var message = {
            to: req.body.to,
            collapse_key: 'your_collapse_key',
            data: {
                key: req.body.title
            },
            notification: {
                title: req.body.title,
                body: req.body.body
            }
        };

        //callback style
        fcm.send(message, function(err, response) {
            if (err) {
                res.status(200).json({
                    "success": "0",
                    "message": err
                });
            } else {
                res.status(200).json({
                    "success": "1",
                    "message": response
                });
            }
        });
    }
});

module.exports = router;