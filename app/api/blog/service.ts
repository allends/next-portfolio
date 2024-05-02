'use server'
import { NewPost } from '@/db/schema/post'
import { PostService } from '@/db/service/postService'

export const getAllPosts = () => {
    return PostService.getPosts()
}

export const getPost = (id: number) => {
    return PostService.getPost(id)
}

export const createPost = (post: NewPost) => {
    return PostService.createPost(post)
}

export const deletePost = (id: number) => {
    return PostService.deletePost(id)
}
