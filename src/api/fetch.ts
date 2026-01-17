import type { BlogPostType } from '@/types/blog'
import axios from 'axios'

export const getAllBlogs = async (): Promise<BlogPostType[]> => {
  try {
    const response = await axios.get("http://localhost:3001/blogs")
    return response.data
  } catch (error) {
    console.error("Failed to fetch blogs:", error)
    throw new Error("Unable to fetch blogs")
  }
}

export const getBlogWithId = async (blogId: string): Promise<BlogPostType> => {
  try {
    const response = await axios.get(`http://localhost:3001/blogs/${blogId}`)
    return response.data
  } catch (error) {
    console.error(`Failed to fetch blog with id ${blogId}:`, error)
    throw new Error("Unable to fetch blog")
  }
}
