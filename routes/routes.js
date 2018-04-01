const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/tracker', (req, res) => {
	res.sendFile(path.join(__dirname + '../../projects/tracker/dist/index.html'))
});

router.get('/cv', (req, res) => {
	res.sendFile(path.join(__dirname + '../../projects/cv/dist/index.html'))
});

module.exports = router;
