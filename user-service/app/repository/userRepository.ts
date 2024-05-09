import { DBClient } from "../utility/databaseClient";
import { UserModel } from "../models/User";

export class UserRepository {
  constructor() {}

  
  async createAccount({ phone, email, password, salt, userType }: UserModel) {
    const client = await DBClient();
    await client.connect();

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
}
