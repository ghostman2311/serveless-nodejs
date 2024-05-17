import { DBClient } from "../utility/databaseClient";
import { UserModel } from "../models/User";

export class UserRepository {
  constructor() {}

  async createAccount({ phone, email, password, salt, userType }: UserModel) {
    const client = DBClient();
    await client.connect();

    console.log("hererererer");
    const queryString =
      "INSERT INTO users(phone,email,password,salt,user_type) VALUES($1,$2,$3,$4,$5) RETURNING *";
    const values = [phone, email, password, salt, userType];
    const result = await client.query(queryString, values);
    console.log(result);
    await client.end();
    if (result && result.rowCount && result.rowCount > 0) {
      return result.rows[0] as UserModel;
    }
  }

  async findAccount(email: string) {
    const client = DBClient();
    await client.connect();

    const queryString =
      "SELECT user_id, email, password, phone, FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(queryString, values);
    console.log(result);
    await client.end();
    if (result && result.rowCount && result.rowCount < 1) {
      throw new Error("user does not exist with provided email id");
    }
    return result.rows[0] as UserModel;
  }
}
