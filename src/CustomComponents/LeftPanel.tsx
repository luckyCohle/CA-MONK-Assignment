import { useQuery } from "@tanstack/react-query"
import { getAllBlogs } from "@/api/fetch"
import type { BlogPostType } from "@/types/blog"
import BlogListCard from "./BlogListCard"
import { getTimeAgo } from "@/utils/getTimeAgo"
import { LeftPanelSkeleton } from "./LeftPanelSkeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
function LeftPanel({activeCard,setActiveCard}:{activeCard:number,setActiveCard:React.Dispatch<React.SetStateAction<number>>}) {
  const { data, isLoading } = useQuery<BlogPostType[]>({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  })
  if (isLoading) return <div className="h-full w-120 shrink-0 border  border-indigo-700 rounded-2xl"><LeftPanelSkeleton/></div>

  return (
    <div className="h-full w-120 shrink-0 border border-r-0 border-indigo-700 rounded-2xl">
      <div className="max-h-260  space-y-4 overflow-y-auto p-4 pl-6">
      <div className="flex justify-start items-center font-bold text-xl">Latest Blogs</div>
      <ScrollArea className="w-full h-full ">
          {data?.map((blog) => (
        <BlogListCard
          key={blog.id}
          category={blog.category[0]}
          title={blog.title}
          description={blog.description}
          timeAgo={getTimeAgo(blog.date)}
          active={blog.id == activeCard}
          onClick={()=>setActiveCard(blog.id)}
        />
      ))}
      </ScrollArea>
    </div>
    </div>
  )
}

export default LeftPanel
