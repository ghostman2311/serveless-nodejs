import { Client } from "pg";

export const DBClient = () => {
  return new Client({
    host: "127.0.0.1",
    user: "postgres",
    database: "users",
    password: "admin",
    port: 5432,
  });
};
