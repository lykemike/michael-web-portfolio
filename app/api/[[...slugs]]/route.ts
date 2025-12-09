import { Elysia, t } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .get("/", "Hello Mike, from Next api with Elysia")
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });

export const GET = app.fetch;
export const POST = app.fetch;
