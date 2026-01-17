import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function BlogListCardSkeleton() {
  return (
   <Card className="bg-white mb-4">
      <CardContent className="p-4 space-y-3">
        {/* Top row - Category and Time */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-24 bg-gray-200 animate-pulse" />
          <Skeleton className="h-3 w-16 bg-gray-200 animate-pulse" />
        </div>

        {/* Title */}
        <Skeleton className="h-5 w-3/4 bg-gray-200 animate-pulse" />

        {/* Description - 2 lines */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-gray-200 animate-pulse" />
          <Skeleton className="h-4 w-5/6 bg-gray-200 animate-pulse" />
        </div>
      </CardContent>
    </Card>
  )
}
export default BlogListCardSkeleton