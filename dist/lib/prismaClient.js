import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';
const connectionString = "postgresql://postgresql:RjZ6N2WzwK1YirEssTj1QPxoIiPSSEBt@dpg-d6tg02ruibrs73crfi5g-a.oregon-postgres.render.com/ts_app_0l4o?sslmode=require";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
export { prisma };
