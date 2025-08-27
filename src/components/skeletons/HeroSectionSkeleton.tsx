import { Skeleton } from "@/components/ui/skeleton";

export const HeroSectionSkeleton = () => {
    return (
    <section className="container grid lg:grid-cols-2 place-items-center gap-10 py-20 md:py-32">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-6xl font-bold">
          <Skeleton className="h-12 w-1/2 mb-2" />
          <Skeleton className="h-12 w-3/4" />
        </main>

        <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-10/12" />
        </div>
        
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Skeleton className="h-10 w-full md:w-1/3" />
          <Skeleton className="h-10 w-full md:w-1/3" />
        </div>
      </div>

      <div className="z-10 order-first lg:order-last">
         <Skeleton className="w-full max-w-[400px] h-[400px] lg:max-w-[600px] lg:h-[600px] rounded-lg" />
      </div>
    </section>
);
}
