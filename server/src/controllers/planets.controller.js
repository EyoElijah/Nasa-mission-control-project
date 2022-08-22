import { GetAllplanets } from "../models/planets.model.js";

async function getAllplanets(req, res) {
  return res.status(200).json(await GetAllplanets());
}

export { getAllplanets };
