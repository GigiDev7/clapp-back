import express from "express";
import cors from "cors";
import userRouter from "./routes/users";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.use(errorHandler);

app.listen(8000, () => {
  console.log(`App listening on port 8000`);
});
