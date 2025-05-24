CREATE TABLE "sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"sessionId" varchar(255) NOT NULL,
	"doctorId" varchar(255) NOT NULL,
	"userId" varchar(255) NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone,
	CONSTRAINT "sessions_sessionId_unique" UNIQUE("sessionId")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" varchar(255) NOT NULL,
	"firstName" varchar(255) NOT NULL,
	"lastName" varchar(255) NOT NULL,
	"email" varchar(255),
	"imageUrl" varchar(255),
	"role" varchar(255),
	"subscriptionId" varchar(255),
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone,
	CONSTRAINT "users_userId_unique" UNIQUE("userId"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "virtual_doctors" (
	"id" serial PRIMARY KEY NOT NULL,
	"doctorId" varchar(255) NOT NULL,
	"userId" varchar NOT NULL,
	"name" varchar(255),
	"title" varchar(255),
	"topic" text,
	"style" varchar(255),
	"voice" varchar(255),
	"duration" integer,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone,
	CONSTRAINT "virtual_doctors_doctorId_unique" UNIQUE("doctorId")
);
--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_doctorId_virtual_doctors_doctorId_fk" FOREIGN KEY ("doctorId") REFERENCES "public"."virtual_doctors"("doctorId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_users_userId_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("userId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "virtual_doctors" ADD CONSTRAINT "virtual_doctors_userId_users_userId_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("userId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "doctorId_sessions_idx" ON "sessions" USING btree ("doctorId");--> statement-breakpoint
CREATE INDEX "userId_sessions_idx" ON "sessions" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "createdAt_sessions_idx" ON "sessions" USING btree ("createdAt");--> statement-breakpoint
CREATE UNIQUE INDEX "userId_idx" ON "users" USING btree ("userId");--> statement-breakpoint
CREATE UNIQUE INDEX "email_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "role_idx" ON "users" USING btree ("role");--> statement-breakpoint
CREATE INDEX "createdAt_idx" ON "users" USING btree ("createdAt");--> statement-breakpoint
CREATE UNIQUE INDEX "doctorId_idx" ON "virtual_doctors" USING btree ("doctorId");--> statement-breakpoint
CREATE INDEX "userId_virtual_doctors_idx" ON "virtual_doctors" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "title_idx" ON "virtual_doctors" USING btree ("title");--> statement-breakpoint
CREATE INDEX "createdAt_virtual_doctors_idx" ON "virtual_doctors" USING btree ("createdAt");