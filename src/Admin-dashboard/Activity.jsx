import {
    UserPlus,
    FolderKanban,
    ShoppingCart,
    CreditCard,
    ChevronRight,
} from "lucide-react";

export const RecentActivity = () => {
    const activities = [
        {
            icon: UserPlus,
            title: "New user registered",
            description: "Nusrat Jahan joined the platform",
            time: "10 min ago",
            iconBg: "bg-[#F0EDFF]",
            iconColor: "text-[#5946E8]",
        },
        {
            icon: FolderKanban,
            title: "Project completed",
            description: "E-commerce Website was completed",
            time: "35 min ago",
            iconBg: "bg-[#EAF9F1]",
            iconColor: "text-[#16B66A]",
        },
        {
            icon: ShoppingCart,
            title: "New order received",
            description: "Order #ORD-2481 was placed",
            time: "1 hour ago",
            iconBg: "bg-[#FFF4E7]",
            iconColor: "text-[#FF9D1C]",
        },
        {
            icon: CreditCard,
            title: "Payment received",
            description: "$2,800 payment received from GrowthLab",
            time: "2 hours ago",
            iconBg: "bg-[#EEF5FF]",
            iconColor: "text-[#4385F5]",
        },
    ];

    return (
        <section className="rounded-2xl border border-[#E8EAF0] bg-white p-5 sm:p-6 mt-5">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#17213D]">
                    Recent Activity
                </h2>

                <button className="flex items-center gap-1 text-xs font-medium text-[#5946E8] transition hover:text-[#4937D1]">
                    View all
                    <ChevronRight size={15} />
                </button>
            </div>

            <div className="mt-5 space-y-4">
                {activities.map((activity, index) => {
                    const Icon = activity.icon;

                    return (
                        <div
                            key={index}
                            className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#FAFAFC]"
                        >
                            <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${activity.iconBg} ${activity.iconColor}`}
                            >
                                <Icon size={19} strokeWidth={1.8} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate text-x font-semibold text-[#17213D]">
                                    {activity.title}
                                </h3>

                                <p className="mt-1 truncate text-[13px] text-[#8A93A7]">
                                    {activity.description}
                                </p>
                            </div>

                            <span className="whitespace-nowrap text-[12px] text-[#8A93A7]">
                                {activity.time}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};