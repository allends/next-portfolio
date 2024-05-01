CREATE TABLE IF NOT EXISTS "blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" varchar(256) NOT NULL,
	"content" text NOT NULL,
	"created" time DEFAULT now() NOT NULL,
	"updated" time NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "blogs" ("name");