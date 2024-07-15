const express   = require('express');
const router    = express.Router();
const requestIp = require('request-ip');
const minute = 1;
const second = 0;

router.post('/insecticide', async function(req, res) {    
    const IP  = requestIp.getClientIp(req);
    console.log(IP,req.body);
    res.status(201).send("ack");
});
router.post('/refresh', async function(req, res) {    
    const IP  = requestIp.getClientIp(req);
    console.log(IP,req.body);
    res.status(201).send(`min:${minute},sec:${second}`);
});
router.post('/runtime', async function(req, res) {    
    const IP  = requestIp.getClientIp(req);
    console.log(IP,req.body);
    res.status(201).send("ack");
});

module.exports = router;