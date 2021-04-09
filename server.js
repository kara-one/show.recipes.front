const compression = require('compression');
const express = require('express');
const path = require('path');
const favicon = require('express-favicon');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(favicon(__dirname + '/build/favicon.png'));
app.use(compression());
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT || 5000, function () {
    console.log(`Frontend start on http://localhost:${PORT}`);
});
