import express from "express";
import cors from "cors";
import userRouter from "./routes/users";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(
  cors({
    origin: "https://classy-blini-4c28a0.netlify.app",
  })
);
app.use(express.json());

app.use("/user", userRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
