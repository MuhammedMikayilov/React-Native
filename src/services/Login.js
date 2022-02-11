import { HttpClient } from "./HttpClient";

class LoginService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getUser() {
    return this.get("users");
  }

  postUser(data) {
    return this.post("users", data);
  }
}

export const loginService = new LoginService();
