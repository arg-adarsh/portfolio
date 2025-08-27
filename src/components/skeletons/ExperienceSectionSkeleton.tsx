import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const ExperienceSectionSkeleton = () => {
    return (
      <section id="experience" className="py-20 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-10 w-1/3 mx-auto mb-12" />
          <div className="relative border-l-2 border-primary/20 pl-6 space-y-12">
            <div className="relative">
                <Card>
                  <CardHeader>
                     <div className="flex flex-col sm:flex-row justify-between items-start">
                        <div className="mb-2 sm:mb-0 w-full">
                            <Skeleton className="h-6 w-1/3 mb-2" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                        <Skeleton className="h-4 w-1/4" />
                     </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-full" />
                  </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>
    );
};
