import { eq } from 'drizzle-orm'
import { db } from '..'
import { NewBlogPost, blogs } from '../schema/blogPost'

export const PostService = {
    getPostsIndex: () => {
        return db
            .select({
                title: blogs.title,
                description: blogs.description,
                id: blogs.id,
            })
            .from(blogs)
    },
    getPosts: () => {
        return db.select().from(blogs)
    },
    getPost: async (id: number) => {

        const posts = await db.select().from(blogs).where(eq(blogs.id, id)).execute()

        const post = posts[0]

        if (!post) {
            throw new Error('Post not found')
        }

        return post
    },
    createPost: (post: NewBlogPost) => {
        return db.insert(blogs).values(post).execute()
    },
    deletePost: (id: number) => {
        return db.delete(blogs).where(eq(blogs.id, id)).execute()
    }
}
