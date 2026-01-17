import { Skeleton } from "@/components/ui/skeleton"
import BlogListCardSkeleton from "./BlogListCardSkeleton"

export function LeftPanelSkeleton() {
  return (
      <div className="max-h-260 space-y-4 p-4 pl-6">
      {/* Header */}
      <div className="flex justify-start items-center">
        <Skeleton className="h-7 w-36 bg-gray-200 animate-pulse rounded-md" />
      </div>

      {/* Blog cards */}
      <div className="space-y-0">
        {[...Array(6)].map((_, index) => (
          <BlogListCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}
