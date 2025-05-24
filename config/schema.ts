import {
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const Users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    userId: varchar({ length: 255 }).notNull().unique(),
    firstName: varchar({ length: 255 }).notNull(),
    lastName: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).unique(),
    imageUrl: varchar({ length: 255 }),
    role: varchar({ length: 255 }), // patient, admin
    subscriptionId: varchar({ length: 255 }),

    createdAt: timestamp("createdAt", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (table) => [
    uniqueIndex("userId_idx").on(table.userId),
    uniqueIndex("email_idx").on(table.email),
    index("role_idx").on(table.role),
    index("createdAt_idx").on(table.createdAt),
  ]
);

export const VirtualDoctors = pgTable(
  "virtual_doctors",
  {
    id: serial("id").primaryKey(),
    doctorId: varchar({ length: 255 }).notNull().unique(),
    userId: varchar("userId")
      .references(() => Users.userId)
      .notNull(),

    name: varchar({ length: 255 }),
    title: varchar({ length: 255 }), // title ng checkup
    topic: text("topic"), // topic na paguusapan
    style: varchar({ length: 255 }), // tono ng boses ni ai formal or casual
    voice: varchar({ length: 255 }), // male or female voice
    duration: integer("duration"), // tagal ng session in minutes

    createdAt: timestamp("createdAt", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (table) => [
    uniqueIndex("doctorId_idx").on(table.doctorId),
    index("userId_virtual_doctors_idx").on(table.userId),
    index("title_idx").on(table.title),
    index("createdAt_virtual_doctors_idx").on(table.createdAt),
  ]
);

export const Sessions = pgTable(
  "sessions",
  {
    id: serial("id").primaryKey(),
    sessionId: varchar({ length: 255 }).notNull().unique(),
    doctorId: varchar("doctorId", { length: 255 })
      .references(() => VirtualDoctors.doctorId)
      .notNull(),
    userId: varchar("userId", { length: 255 })
      .references(() => Users.userId)
      .notNull(),

    createdAt: timestamp("createdAt", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (table) => [
    index("doctorId_sessions_idx").on(table.doctorId),
    index("userId_sessions_idx").on(table.userId),
    index("createdAt_sessions_idx").on(table.createdAt),
  ]
);
