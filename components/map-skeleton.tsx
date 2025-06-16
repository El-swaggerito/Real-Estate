import { Skeleton } from "@/components/ui/skeleton"

export function MapSkeleton() {
  return (
    <div className="w-full aspect-video rounded-md overflow-hidden">
      <Skeleton className="w-full h-full bg-amber-100/50" />
    </div>
  )
}
