import { DefaultService } from "~/server/infrastructure/musicfy-api";

export async function login(email: string, password: string) {
  DefaultService.postApiV1AuthLogin({
    body: { email, password }
  });
}
