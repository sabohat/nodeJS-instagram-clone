const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('registration')
})

module.exports = {
    path: '/signup',
    router
}

