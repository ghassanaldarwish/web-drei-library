import { Express, Request, Response } from "express";
import controller from "./controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.get("/auth", (req: Request, res: Response) =>
    res.json({ message: "auth" })
  );
}
export default routes;