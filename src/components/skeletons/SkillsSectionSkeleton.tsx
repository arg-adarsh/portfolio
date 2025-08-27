import { Skeleton } from "@/components/ui/skeleton";

export const SkillsSectionSkeleton = () => {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Skeleton className="h-10 w-1/4 mx-auto mb-12" />
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                    {Array.from({ length: 18 }).map((_, i) => (
                         <div key={i} className="flex flex-col items-center justify-center gap-2 p-4 bg-card rounded-lg shadow-md h-32 w-32">
                           <Skeleton className="w-16 h-16 rounded-full" />
                           <Skeleton className="h-4 w-20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
