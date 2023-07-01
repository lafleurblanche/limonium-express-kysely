/* kysely */
import {
  Kysely,
  PostgresDialect
} from "kysely";

/* pg */
import { Pool } from 'pg'

/* db/config */
import { Database } from "db/config";

export const riseDb = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: 64303,
    })
  })
})
