import dotenv from "dotenv";
import http from "http";
import app from "./app.js";
import { loadPlanetsData } from "./models/planets.model.js";
import { mongoConnect } from "./services/mongo.js";
import { loadLaunchData } from "./models/launches.model.js";
dotenv.config();

const port = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
  try {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();
    server.listen(port, () => console.log(`server started on port ${port}`));
  } catch (error) {
    console.log(error.messsage);
  }
}

startServer();
