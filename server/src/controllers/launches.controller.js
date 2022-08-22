import {
  GetAllLaunches,
  scheduleNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
} from "../models/launches.model.js";

import getPagination from "../services/query.js";

async function getAllLaunches(req, res) {
  const { skip, limit } = getPagination(req.query);

  const launches = await GetAllLaunches(skip, limit);
  return res.status(200).json(launches);
}

async function AddNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch properties",
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }

  await scheduleNewLaunch(launch);
  return res.status(201).json(launch);
}

async function DeleteLaunches(req, res) {
  const launchId = +req.params.id;
  const existsLaunch = await existsLaunchWithId(launchId);
  console.log(existsLaunch);
  if (!existsLaunch) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
  const aborted = await abortLaunchById(launchId);
  if (!aborted) {
    return res.status(400).json({
      error: "Launch not aborted",
    });
  }
  return res.status(200).json({
    ok: true,
  });
}
export { getAllLaunches, AddNewLaunch, DeleteLaunches };
