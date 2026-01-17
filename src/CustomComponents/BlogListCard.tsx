import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface BlogListCardProps {
  category: string
  title: string
  description: string
  timeAgo: string
  tag?: string
  active?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}
function BlogListCard({
  category,
  title,
  description,
  timeAgo,
  tag,
  active = false,
  onClick
}: BlogListCardProps) {
  return (
    <Card
    onClick={onClick}
      className={cn(
        "bg-white cursor-pointer transition-all hover:shadow-md",
        active && "border-l-4 border-indigo-600"
      )}
    >
      <CardContent className="p-4 space-y-2">
        {/* Top row */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium uppercase tracking-wide text-primary">
            {category}
          </span>
          <span>{timeAgo}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Tag */}
        {tag && (
          <Badge variant="secondary" className="text-xs">
            {tag}
          </Badge>
        )}
      </CardContent>
    </Card>
  )
}
export default BlogListCard
