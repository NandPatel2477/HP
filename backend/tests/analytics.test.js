const request = require("supertest");
const app = require("../app");

describe("Analytics API", () => {
  test("Should track user interaction", async () => {
    const res = await request(app).post("/api/analytics/track").send({
      userId: "123456789",
      eventType: "page_view",
      eventData: { page: "/home" }
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User interaction recorded.");
  });

  test("Should fetch analytics data", async () => {
    const res = await request(app).get("/api/analytics/data");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("analytics");
  });
});
    