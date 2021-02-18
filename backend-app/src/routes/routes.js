const express = require("express");
const router = express.Router();

//Dummy user data
const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    dateOfBirth: new Date(),
    department: "Computer Science",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    gender: "Female",
    dateOfBirth: new Date(),
    department: "Economics",
  },
];

router.get("/api/users", (req, res) => {
    try {
        res.status(200)
        res.json(users);
    } catch (error) {
        res.status(500);
        res.send('Failed to retrieve users', error);
    }
});

router.post("/api/user", (req, res) => {

  try {
    console.log(req);
    const user = req.body;
    users.push(user);
    res.json("user added");
  } catch (error) {
      res.status(500);
      res.send(error);
  }
});

router.get("/", (req, res) => {
    try {
        res.send("App Works");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

module.exports = router;


