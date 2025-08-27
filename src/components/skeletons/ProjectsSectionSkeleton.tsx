import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const ProjectsSectionSkeleton = () => {
  return (
    <section id="projects" className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-10 w-1/4 mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="flex flex-col">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div className="w-full">
                               <Skeleton className="h-6 w-1/2 mb-2" />
                               <Skeleton className="h-4 w-3/4" />
                            </div>
                            <Skeleton className="w-5 h-5 rounded-full" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </CardContent>
                </Card>
              ))}
            </div>
        </div>
    </section>
);
}
