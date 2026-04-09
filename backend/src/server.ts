// backend/src/server.ts
import { buildApp } from "./app";

async function start() {
  const app = await buildApp();

  try {
    await app.listen({
      host: "0.0.0.0",
      port: app.env.PORT,
    });

    app.log.info(`Portfolio API running on port ${app.env.PORT}`);
  } catch (error) {
    app.log.error(error, "Failed to start server.");
    process.exit(1);
  }
}

void start();
