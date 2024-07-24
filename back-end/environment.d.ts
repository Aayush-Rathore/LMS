declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
    }
  }

  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export {};
