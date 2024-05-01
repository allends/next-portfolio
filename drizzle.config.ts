import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 schema: "./db/schema/*.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL!,
  },
  out: "./migrations-folder",
  verbose: true,
  strict: true,
})