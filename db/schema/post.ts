import {
    pgTable,
    serial,
    text,
    time,
    uniqueIndex,
    varchar
} from 'drizzle-orm/pg-core';

export const posts = pgTable(
    'posts',
    {
        id: serial('id').primaryKey(),
        title: varchar('name', { length: 256 }).notNull(),
        description: varchar('description', { length: 256 }).notNull(),
        content: text('content').notNull(),

        // metadata
        created: time('created').notNull().defaultNow(),
        updated: time('updated').notNull().defaultNow(),
    },
    (blogs) => {
        return {
            nameIndex: uniqueIndex('name_idx').on(blogs.title),
        }
    }
)

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
