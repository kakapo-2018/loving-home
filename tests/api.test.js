import request from "supertest";
import express from "express";

// import api from '../utils/api'

const server = "http://furever-home.herokuapp.com/api";

//Start on a positive note
test("tests working", () => {
  expect(1).toBeGreaterThan(0);
});

test("GET /api/store/cosmetics/all", () => {
  return request(server)
    .get("/users/")
    .expect(200)
    .then(res => {
      console.log(res.body.length);
      expect(res.body.length > 0).toBeTruthy();
    });
});

test("GET /api/news", () => {
  return request(server)
    .get("/news/")
    .expect(200)
    .then(res => {
      console.log(res.body.length);
      expect(res.body.length > 0).toBeTruthy();
    });
});

test("GET /api/events", () => {
  return request(server)
    .get("/events/")
    .expect(200)
    .then(res => {
      console.log(res.body.length);
      expect(res.body.length > 0).toBeTruthy();
    });
});

test("GET /store/cosmetics/all", () => {
  return request(server)
    .get("/store/cosmetics/all/")
    .expect(200)
    .then(res => {
      console.log(res.body.length);
      expect(res.body.length > 0).toBeTruthy();
    });
});
