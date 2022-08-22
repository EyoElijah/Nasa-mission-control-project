import express from "express";
import Cors from "cors";
import path from "path";
import morgan from "morgan";

import apiRoutes from "./routes/api.js";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(
  Cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.use("/v1", apiRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
export default app;
