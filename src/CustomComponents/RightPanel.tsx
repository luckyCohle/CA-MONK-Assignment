import { getBlogWithId } from "@/api/fetch"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { BlogPostType } from "@/types/blog"
import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import { RightPanelSkeleton } from "./RightPanelSkeleton"

function RightPanel({ blogId }: { blogId: number | null }) {
  const { data: blogData, isLoading } = useQuery<BlogPostType>({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogWithId(blogId as number),
    enabled: !!blogId,
  })

  if (!blogId) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Select a blog to read its content
      </div>
    )
  }

  if (isLoading) {
    return <div><RightPanelSkeleton/></div>
  }

  if (!blogData) return null

  const formattedDate = format(new Date(blogData.date), "dd/MM/yyyy")

  return (
    <div className="p-4  border border-indigo-700 rounded-2xl mr-4 mb-4">
      <Card className="max-w-4xl bg-white p-4 ">
        {/* Image */}
        <img
          src={blogData.coverImage}
          alt={blogData.title}
          className="w-full h-72 object-cover rounded-lg"
        />

        <CardHeader className=" flex items-center">
          <CardTitle className="text-2xl ">
            {blogData.title}
          </CardTitle>
        </CardHeader>

       
        <div className="flex border-y bg-muted m-6 bg-stone-400 rounded-2xl">
          <div className="flex flex-col flex-1 items-center gap-1 p-3 border-r">
            <span className="text-xs text-muted-foreground">
              CATEGORY
            </span>
            <span className="font-medium">
              {blogData.category.join(" & ")}
            </span>
          </div>

          <div className="flex flex-col flex-1 items-center gap-1 p-3">
            <span className="text-xs text-muted-foreground">
              DATE
            </span>
            <span className="font-medium">{formattedDate}</span>
          </div>
        </div>

        {/* Content */}
        <CardContent className="prose  py-6">
          {blogData.content}
        </CardContent>
      </Card>
    </div>
  )
}

export default RightPanel
