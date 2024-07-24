import InitServer from "./express.server";

const initServer = new InitServer(process.env.PORT);
initServer.startServer();
