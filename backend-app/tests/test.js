// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
// Configure chai
chai.use(chaiHttp);
chai.should();

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

describe("Users", () => {
    describe("GET /users", () => {
        // Test to get all users record
        it("should get all users record", (done) => {
             chai.request(app)
                 .get('/users')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a(users);
                     done();
                  });
         });
    });
});