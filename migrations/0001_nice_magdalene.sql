DROP TABLE `surf_conditions`;--> statement-breakpoint
ALTER TABLE `account` ALTER COLUMN "user_id" TO "user_id" text NOT NULL REFERENCES user(id) ON DELETE no action ON UPDATE no action;