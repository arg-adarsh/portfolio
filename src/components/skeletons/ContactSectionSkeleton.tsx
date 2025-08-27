import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSectionSkeleton = () => {
  return (
  <section id="contact" className="py-20 bg-muted/50">
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
      <Skeleton className="h-5 w-1/2 mx-auto mb-8" />
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Skeleton className="h-4 w-1/4 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div>
                <Skeleton className="h-4 w-1/4 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
            <div>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-24 w-full" />
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);
};
