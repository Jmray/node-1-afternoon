const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');

const app = express();


const port = 3001;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));


const messageBaseUrl = '/api/messages';
app.get(messageBaseUrl, mc.read );
app.post(messageBaseUrl, mc.create);
app.put(`${messageBaseUrl}/:id`, mc.update);
app.delete(`${messageBaseUrl}/:id`, mc.delete);



app.listen(port, () => console.log(`Server listening to port: ${port}`));