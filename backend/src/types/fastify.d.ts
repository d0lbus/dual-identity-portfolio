import "fastify";
import type { PrismaClient } from "@prisma/client";
import type { Env } from "../config/env";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
    env: Env;
  }
}

export {};
