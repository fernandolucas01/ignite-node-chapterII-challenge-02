import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerFile from "./swagger.json";

const app = express();

app
  .use(express.json())
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
  .use("/users", usersRoutes);

export { app };
