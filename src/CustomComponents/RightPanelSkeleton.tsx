import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function RightPanelSkeleton() {
  return (
    <div className="p-4 w-full mr-4">
      <Card className="max-w-4xl bg-white border border-indigo-700 p-4">
        {/* Cover Image */}
        <Skeleton className="w-full h-72 rounded-lg bg-gray-200 animate-pulse" />

        {/* Title */}
        <CardHeader className="flex items-center">
          <Skeleton className="h-8 w-3/4 bg-gray-200 animate-pulse rounded-md" />
        </CardHeader>

        {/* Category and Date Section */}
        <div className="flex border-y bg-muted m-6 bg-stone-400 rounded-2xl">
          <div className="flex flex-col flex-1 items-center gap-1 p-3 border-r">
            <Skeleton className="h-3 w-16 bg-gray-300 animate-pulse rounded" />
            <Skeleton className="h-5 w-24 bg-gray-300 animate-pulse rounded" />
          </div>

          <div className="flex flex-col flex-1 items-center gap-1 p-3">
            <Skeleton className="h-3 w-12 bg-gray-300 animate-pulse rounded" />
            <Skeleton className="h-5 w-20 bg-gray-300 animate-pulse rounded" />
          </div>
        </div>

        {/* Content */}
        <CardContent className="prose py-6 space-y-3">
          <Skeleton className="h-4 w-full bg-gray-200 animate-pulse rounded" />
          <Skeleton className="h-4 w-full bg-gray-200 animate-pulse rounded" />
          <Skeleton className="h-4 w-5/6 bg-gray-200 animate-pulse rounded" />
          <Skeleton className="h-4 w-full bg-gray-200 animate-pulse rounded" />
          <Skeleton className="h-4 w-4/5 bg-gray-200 animate-pulse rounded" />
          <div className="pt-2" />
          <Skeleton className="h-4 w-full bg-gray-200 animate-pulse rounded" />
          <Skeleton className="h-4 w-full bg-gray-200 animate-pulse rounded" />
          <Skeleton className="h-4 w-3/4 bg-gray-200 animate-pulse rounded" />
          <div className="pt-2" />
          <Skeleton className="h-4 w-full bg-gray-200 animate-pulse rounded" />
          <Skeleton className="h-4 w-5/6 bg-gray-200 animate-pulse rounded" />
          <Skeleton className="h-4 w-full bg-gray-200 animate-pulse rounded" />
        </CardContent>
      </Card>
    </div>
  )
}