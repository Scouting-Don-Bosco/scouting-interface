import { JwtPayload } from "./auth.interface";

export default class Api {
  url: string = process.env.API_URL ?? "http://localhost:8080";

  async login(email: string, password: string): Promise<JwtPayload> {
    try {
      const response = await fetch(`${this.url}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      //check if response is ok
      if (response.status == 401) {
        return Promise.reject("Invalid credentials");
      }

      if (!response.ok) {
        return Promise.reject("Something went wrong");
      }

      return await response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
