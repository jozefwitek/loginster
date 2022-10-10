const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.protect, (req, res) => {
    res.json({
        status: 'success'
    });
});

router.route('/test').get(authController.protect, (req, res, next) => {
    res.json({
        status: 'success'
    });
});

router
    .route('/test2')
    .get(
        authController.protect,
        authController.restrictTo('admin', 'moderator'),
        (req, res, next) => {
            res.json({
                status: 'success'
            });
        }
    );

module.exports = router;
