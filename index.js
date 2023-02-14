import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/post.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/post", postRoutes);

const CONNECTION_URL ="mongodb+srv://ironman:password1122@memory.wm6srz5.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server is runnig 🚀🚀🚀${PORT}`))
  )
  .catch((error) => console.log(error.message));

  // mongoose.set("useFindAndModify", false);
