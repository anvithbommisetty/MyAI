import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
config();
const app = express();
//middlewares
app.use(cors({
    origin: process.env.FRONT_URL || "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
const __dirname__ = path.resolve();
app.use(express.static(path.resolve(__dirname__, "dist_front")));
//remove it in production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
// app.use("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname__, "dist_front", "index.html"));
// });
export default app;
//# sourceMappingURL=app.js.map