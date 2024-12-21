// /api/v1/users

import supertest from "supertest";
import express from "express";
import { describe, expect, it } from "vitest";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json( {ok: true});
});

describe("test express", () => {

    it("Get / should return code 200", async() => {
        const response = await supertest(app).get("/");
        const statusCode = response.statusCode;

        expect(statusCode).toBe(200);
    });

});