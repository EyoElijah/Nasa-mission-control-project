export default {
  transform: {
    "\\.js$": ["babel-jest", { configFile: "./babel.config.json" }],
  },
  roots: ["../"],
  testEnvironment: "node",
};
