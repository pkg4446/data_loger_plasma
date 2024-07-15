const express   = require('express');
const router    = express.Router();
const requestIp = require('request-ip');

router.post('/insecticide', async function(req, res) {    
    const IP  = requestIp.getClientIp(req);
    console.log(IP,req.body);
    res.status(201).json(req.body);
});
router.post('/refresh', async function(req, res) {    
    const IP  = requestIp.getClientIp(req);
    console.log(IP,req.body);
    res.status(201).json(req.body);
});
router.post('/runtime', async function(req, res) {    
    const IP  = requestIp.getClientIp(req);
    console.log(IP,req.body);
    res.status(201).json(req.body);
});

module.exports = router;