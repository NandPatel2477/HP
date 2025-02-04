const request = require("supertest");
const app = require("../app");

describe("User Authentication API", () => {
  test("Should sign up a new user", async () => {
    const res = await request(app).post("/api/users/signup").send({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123"
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  test("Should login a user", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: "johndoe@example.com",
      password: "password123"
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
