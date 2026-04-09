// backend/src/modules/contact/contact.controller.ts
import type { FastifyReply, FastifyRequest } from "fastify";
import { contactSchema } from "./contact.schema";
import { submitContactInquiry } from "./contact.service";
import { AppError } from "../../shared/errors/app-error";

export async function contactController(
  request: FastifyRequest<{ Body: unknown }>,
  reply: FastifyReply,
) {
  const parsed = contactSchema.safeParse(request.body);

  if (!parsed.success) {
    throw new AppError(
      400,
      "CONTACT_VALIDATION_ERROR",
      "Invalid contact payload.",
      parsed.error.flatten(),
    );
  }

  const result = await submitContactInquiry(request.server, parsed.data);

  return reply.code(201).send(result);
}
