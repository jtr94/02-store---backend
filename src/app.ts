import { envs } from "./config/envs";
import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";
import { MongoDB } from "./data";

(async () => {
  main();
})();

function main() {
  MongoDB.connection({dbUrl: envs.DATABASE_URL, dbName: envs.DATABASE_NAME});
  console.log("connected!");
  
  const server = new Server({ port: envs.PORT, routes: AppRoutes.routes });

  server.run();
}
