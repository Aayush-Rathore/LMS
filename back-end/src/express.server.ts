import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";
import cookieParser from "cookie-parser";
import authRouter from "./routers/auth.router";
import fs from "fs";

class InitServer {
  // Private data members
  private app: Application;
  private limiter: RateLimitRequestHandler;

  //   Initilizing constructor
  constructor() {
    this.app = express();
    this.limiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 100,
      standardHeaders: "draft-7",
      legacyHeaders: false,
      message: "Too Many Requests!",
    });
    this.useMiddleware();
    this.useRoutes();
  }

  //  Middlewares
  private useMiddleware() {
    // Applying Limiter
    this.app.use(this.limiter);

    // Cofiguring cors origin
    this.app.use(
      cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
        methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "Cookies", "Cookie"],
        exposedHeaders: ["Set-Cookie"],
      })
    );

    // Applying json configuration
    this.app.use(
      express.json({
        limit: "25kb",
      })
    );

    // Applying url encoders
    this.app.use(
      express.urlencoded({
        extended: true,
        limit: "15kb",
      })
    );

    // Cookie parser to use cookies
    this.app.use(cookieParser());

    // Request Logger
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      fs.appendFileSync("./public/request.logs.txt", `${Date.now()} : ${req.method} ${req.originalUrl}\n`)
      next();
    });
  }

  private useRoutes() {
    this.app.use("/api/v1/auth", authRouter);

    this.app.use((req: Request, res: Response) => {
      res.status(404).json({ message: "Route not found" });
    });
  }

  //   Express listner
  public startServer(port?: number) {
    this.app.listen(port || 3000, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

export default InitServer;
