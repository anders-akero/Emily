const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({bye: 'buddy'});
});

// Listen to port that is sent by environment variable called "PORT"
// If env parameter "PORT" is not set, then use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
