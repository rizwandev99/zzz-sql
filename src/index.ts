// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});

async function createUsersTable(
  username: string,
  password: string,
  email: string
) {
  await client.connect();
  const result = await client.query(
    `
        INSERT INTO users (username,email,password)
        VALUES ($1,$2,$3)
    `,
    [username, email, password]
  );
  console.log(result);
}

createUsersTable("; DELETE * FROM users", "123", "hk1@gmail.com");
