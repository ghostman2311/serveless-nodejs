import { UserModel } from "../models/User";

export class UserRepository {
  constructor() {}

  async createAccount({ email, password, salt, phone, userType }: UserModel) {
    // DB Operations
  }
}
