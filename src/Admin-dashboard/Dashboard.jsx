import { FadeIn } from "../Animation/FadeIn";
import { ScaleIn } from "../Animation/ScaleIn";
import { SlideUp } from "../Animation/SlideUp";
import { RecentActivity } from "./Activity";
import { RecentProjects } from "./RecentProjects";
import { RevenueOverview } from "./RevenueOverview";
import { AdminStates } from "./states";

export const Dashboard = ({ search }) => {
    return (
        <section className="min-h-screen bg-[#F8F9FC] p-5 md:p-6 lg:p-8">
            <SlideUp delay={0.1}>
                <AdminStates />
            </SlideUp>

            <div>
                <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
                    <FadeIn delay={0.2}>
                        <RevenueOverview />
                    </FadeIn>

                    <ScaleIn delay={0.3}>
                        <RecentActivity />
                    </ScaleIn>
                </div>

                <SlideUp delay={0.4}>
                    <RecentProjects search={search} />
                </SlideUp>
            </div>
        </section>
    );
};