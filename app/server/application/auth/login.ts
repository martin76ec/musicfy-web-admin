import { DefaultService } from "~/server/infrastructure/musicfy-api";

export async function login(string email, string password) {
  DefaultService.postApiV1AuthLogin({
    body: {
      email: "",
      password: ""
    }
  });
}
