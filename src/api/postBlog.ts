import type { BlogFormData } from "@/types/blog"
import axios from "axios"

export const addBlog = async (data: BlogFormData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/blogs",
      data
    )
    return response.data
  } catch (error) {
    
    throw new Error(error instanceof Error ? error.message : "Failed to add blog")
  }
}
