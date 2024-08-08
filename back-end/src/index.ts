import ConnectDB from "./database/db.connection";
import ExpressServer from "./express.server";

const initServer = new ExpressServer();
(async () => {
  try {
    const dbStatus: boolean = await ConnectDB();
    !dbStatus && process.exit(1);
    initServer.startServer(8000);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
