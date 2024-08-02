import { sql } from "@vercel/postgres";

export async function getDishes() {
  try {
    const { rows } = await sql`SELECT * FROM dish`;
    return rows;
  } catch (error) {
    console.error("Failed to fetch dishes:", error);
    return [];
  }
}
