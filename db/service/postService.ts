import { eq } from 'drizzle-orm'
import { db } from '..'
import { NewPost, posts } from '../schema/post'

export const PostService = {
    getPostsIndex: () => {
        return db
            .select({
                title: posts.title,
                description: posts.description,
                id: posts.id,
            })
            .from(posts)
    },
    getPosts: () => {
        return db.select().from(posts)
    },
    getPost: async (id: number) => {

        const queriedPosts = await db.select().from(posts).where(eq(posts.id, id)).execute()

        const post = queriedPosts[0]

        if (!post) {
            throw new Error('Post not found')
        }

        return post
    },
    createPost: (post: NewPost) => {
        return db.insert(posts).values(post).execute()
    },
    deletePost: (id: number) => {
        return db.delete(posts).where(eq(posts.id, id)).execute()
    }
}
