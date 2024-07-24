declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URI: string;
      DB_NAME: string;
    }
  }

  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export {};
