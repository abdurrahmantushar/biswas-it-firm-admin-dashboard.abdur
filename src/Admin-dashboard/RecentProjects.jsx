import { ChevronRight } from "lucide-react";

export const RecentProjects = ({ search }) => {
    const projects = [
        {
            projectName: "E-commerce Website",
            client: "TechNova",
            category: "Web Development",
            status: "In Progress",
            budget: "$4,500",
            deadline: "Jun 18, 2024",
        },
        {
            projectName: "Mobile Banking App",
            client: "FinCore",
            category: "App Development",
            status: "Completed",
            budget: "$7,200",
            deadline: "Jun 12, 2024",
        },
        {
            projectName: "Business Landing Page",
            client: "GrowthLab",
            category: "UI/UX Design",
            status: "In Progress",
            budget: "$2,800",
            deadline: "Jun 10, 2024",
        },
        {
            projectName: "CRM Dashboard",
            client: "CloudDesk",
            category: "Web Development",
            status: "Pending",
            budget: "$5,600",
            deadline: "Jun 22, 2024",
        },
        {
            projectName: "Brand Identity",
            client: "CreativeHub",
            category: "Branding",
            status: "Completed",
            budget: "$1,900",
            deadline: "Jun 05, 2024",
        },
    ];

    const filteredProjects = projects.filter((project) =>
        `${project.projectName} ${project.client} ${project.category} ${project.status}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <section className="mt-5 overflow-hidden rounded-2xl border border-[#E8EAF0] bg-white">
            <div className="flex items-center justify-between px-5 py-4 sm:px-6">
                <h2 className="text-lg font-semibold text-[#17213D]">
                    Recent Projects
                </h2>

                <button className="flex items-center gap-1 text-xs font-medium text-[#5946E8] transition hover:text-[#4937D1] sm:text-sm">
                    View all
                    <ChevronRight size={15} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <div className="min-w-[760px]">
                    <div className="grid grid-cols-[1.7fr_1.2fr_1.35fr_1.05fr_0.9fr_24px] items-center gap-4 border-b border-[#EEF0F5] px-5 pb-3 text-[14px] font-semibold text-[#65708B] sm:px-6">
                        <span>Project</span>
                        <span>Client</span>
                        <span>Category</span>
                        <span>Status</span>
                        <span>Budget</span>
                        <span />
                    </div>

                    <div>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-[1.7fr_1.2fr_1.35fr_1.05fr_0.9fr_24px] items-center gap-4 border-b border-[#EEF0F5] px-5 py-3.5 transition last:border-b-0 hover:bg-[#FAFAFC] sm:px-6"
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0EDFF] text-x font-semibold text-[#5946E8]">
                                            {project.projectName.charAt(0)}
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="truncate text-x font-semibold text-[#17213D]">
                                                {project.projectName}
                                            </h3>

                                            <p className="mt-1 text-[13px] text-[#8A93A7]">
                                                Due {project.deadline}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate text-x font-semibold text-[#17213D]">
                                            {project.client}
                                        </p>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate text-x font-semibold text-[#65708B]">
                                            {project.category}
                                        </p>
                                    </div>

                                    <div>
                                        <span
                                            className={`inline-flex rounded-md px-2.5 py-1 text-[14px] font-semibold ${
                                                project.status === "In Progress"
                                                    ? "bg-[#FFF3E3] text-[#E88A13]"
                                                    : project.status === "Completed"
                                                      ? "bg-[#EAF9F1] text-[#16B66A]"
                                                      : "bg-[#EEF5FF] text-[#4385F5]"
                                            }`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    <p className="whitespace-nowrap text-[14px] font-semibold text-[#17213D]">
                                        {project.budget}
                                    </p>

                                    <button className="text-[#65708B] transition hover:text-[#5946E8]">
                                        <ChevronRight size={17} />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="px-6 py-10 text-center text-xl font-bold text-[#65708B]">
                                No projects found
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};