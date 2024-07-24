import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";
import cookieParser from "cookie-parser";

class InitServer {
  // Private data members
  private app: Application;
  private port: number;
  private limiter: RateLimitRequestHandler;

  //   Initilizing constructor
  constructor(port?: number) {
    this.app = express();
    this.port = port || 3000;
    this.limiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 100,
      standardHeaders: "draft-7",
      legacyHeaders: false,
      message: "Too Many Requests!",
    });
    this.useMiddleware();
  }

  //  Middlewares
  useMiddleware() {
    // Request Logger
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      console.log(`${req.method} ${req.originalUrl}`);
      next();
    });

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
  }

  //   Express listner
  startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export default InitServer;
