const cors = require('cors')
const express = require('express');
var uuid = require('uuid');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
app.use(cors());
app.options('*', cors())
const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    dateOfBirth: new Date(),
    department: 'Computer Science'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'Female',
    dateOfBirth: new Date(),
    department: 'Economics'
  }
];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  console.log(req);
  const user = req.body;
  users.push(user);
  res.json("user added");
});

app.get('/', (req,res) => {
    res.send('App Works');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});