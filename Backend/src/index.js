import dotenv from "dotenv";
import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 8000;

const app = express();

const server = http.createServer(port);

// Middlewares
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.static("public"));
app.use(express.static("public"));
app.use(cookieParser());

// CORS Configuration

app.use(
  cors({
    origin: process.env.PORT || "http://localhost:5172/",
    credentials: true,
  })
);
