const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./api/api.js');
const app = express();
const port = process.env.PORT || '8080';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static(path.join(__dirname, 'start/dist')));
app.use('/projects/tracker', express.static(path.join(__dirname, 'projects/tracker/dist')));
app.use('/projects/cv', express.static(path.join(__dirname, 'projects/cv/dist')));
app.use('/projects/cointrack', express.static(path.join(__dirname, 'projects/cointrack/dist')));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
	res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.set('Access-Control-Allow-Credentials', 'true');
	next();
});


app.use('/api/v1', api);
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(port));

module.exports = server;
