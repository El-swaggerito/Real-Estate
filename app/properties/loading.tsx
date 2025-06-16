import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function PropertiesLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col lg:flex-row">
        <aside className="w-full lg:w-64 bg-amber-50 p-4">
          <h2 className="text-xl font-bold mb-4 text-amber-900">Filters</h2>
          <div className="space-y-4">
            <Skeleton className="h-10 w-full bg-amber-100/50" />
            <Skeleton className="h-10 w-full bg-amber-100/50" />
            <Skeleton className="h-20 w-full bg-amber-100/50" />
            <Skeleton className="h-10 w-full bg-amber-100/50" />
            <Skeleton className="h-10 w-full bg-amber-100/50" />
            <Skeleton className="h-40 w-full bg-amber-100/50" />
            <Skeleton className="h-10 w-full bg-amber-100/50" />
          </div>
        </aside>
        <div className="flex-grow p-4 lg:p-8 bg-amber-50/50">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <Skeleton className="h-8 w-48 bg-amber-100/50 mb-2 sm:mb-0" />
            <Skeleton className="h-8 w-24 bg-amber-100/50" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <PropertyCardSkeleton key={index} />
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <Skeleton className="h-48 sm:h-64 w-full bg-amber-100/50" />
      <div className="p-4 sm:p-6">
        <Skeleton className="h-6 w-3/4 bg-amber-100/50 mb-2" />
        <Skeleton className="h-4 w-full bg-amber-100/50 mb-4" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <Skeleton className="h-6 w-24 bg-amber-100/50 mb-2 sm:mb-0" />
          <div className="flex space-x-4">
            <Skeleton className="h-4 w-10 bg-amber-100/50" />
            <Skeleton className="h-4 w-10 bg-amber-100/50" />
            <Skeleton className="h-4 w-10 bg-amber-100/50" />
          </div>
        </div>
        <Skeleton className="h-10 w-full bg-amber-100/50" />
      </div>
    </div>
  )
}
