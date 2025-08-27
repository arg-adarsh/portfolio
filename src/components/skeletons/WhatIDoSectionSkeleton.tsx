import { Skeleton } from "@/components/ui/skeleton";

export const WhatIDoSectionSkeleton = () => {
  return (
  <section id="what-i-do" className="py-20 bg-muted/50">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Skeleton className="h-10 w-1/3 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full mt-2" />
          </div>
          <div className="text-center p-6">
            <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full mt-2" />
          </div>
          <div className="text-center p-6">
            <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full mt-2" />
          </div>
      </div>
    </div>
  </section>
);
}
