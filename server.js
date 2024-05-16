
import express from "express";
import config from "./config";

// import router from routes/

import router from "./routes/index.js";

const app = express();

app.use(express.json());


app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
  process.on("uncaughtException", function (err) {
    console.log(err);
  });
});

app.listen(config.port || 5561, () => {
  console.log(`Server listening on port ${config.port}...`);
});
