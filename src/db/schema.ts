import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('user', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  emailVerified: integer('email_verified', { mode: 'timestamp' }),
  image: text('image'),
  password: text('password'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().defaultNow(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().defaultNow(),
});

export const accounts = sqliteTable('account', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  type: text('type').notNull(),
  provider: text('provider').notNull(),
  providerAccountId: text('provider_account_id').notNull(),
  refreshToken: text('refresh_token'),
  accessToken: text('access_token'),
  expiresAt: integer('expires_at'),
  tokenType: text('token_type'),
  scope: text('scope'),
  idToken: text('id_token'),
  sessionState: text('session_state'),
});

export const sessions = sqliteTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  sessionToken: text('session_token').notNull().unique(),
  expires: integer('expires', { mode: 'timestamp' }).notNull(),
});

export const surfConditions = sqliteTable('surf_conditions', {
  id: text('id').primaryKey(),
  timestamp: integer('timestamp', { mode: 'timestamp' }).notNull().defaultNow(),
  windDirection: text('wind_direction').notNull(),
  windSpeed: integer('wind_speed'),
  swellHeight: integer('swell_height').notNull(),
  swellPeriod: integer('swell_period').notNull(),
  swellDirection: text('swell_direction').notNull(),
});

export const subscriptions = sqliteTable('subscription', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().unique(),
  status: text('status').notNull(),
  lemonSqueezyId: text('lemon_squeezy_id'),
  variantId: integer('variant_id'),
  checkoutUrl: text('checkout_url'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().defaultNow(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().defaultNow(),
});