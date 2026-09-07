import {Users,DollarSign,FolderKanban,ClipboardList} from "lucide-react";

export const AdminStates = () => {
    const state = [
        {
            title: "Total Users",
            value: "2,480",
            description: "Registered Users",
        },
        {
            title: "Total Revenue",
            value: "$48.5K",
            description: "This Month",
        },
        {
            title: "Active Projects",
            value: "126",
            description: "In Progress",
        },
        {
            title: "Pending Orders",
            value: "18",
            description: "Need Attention",
        },
    ];

    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
            <div className="rounded-xl border border-[#E8EAF0] bg-white p-4">
                <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0EDFF] text-[#5946E8]">
                        <Users size={22} strokeWidth={1.8} />
                    </div>

                    <div>
                        <p className="text-[13px] font-medium text-[#65708B]">
                            {state[0].title}
                        </p>

                        <h3 className="mt-1 text-[25px] font-semibold leading-none text-[#17213D]">
                            {state[0].value}
                        </h3>

                        <p className="mt-2 text-[12px] text-[#65708B]">
                            {state[0].description}
                        </p>
                    </div>
                </div>

                <button className="mt-4 flex items-center gap-1 text-[12px] font-medium text-[#5946E8]">
                    View all
                    <span>→</span>
                </button>
            </div>

            <div className="rounded-xl border border-[#E8EAF0] bg-white p-4">
                <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF9F1] text-[#16B66A]">
                        <DollarSign size={22} strokeWidth={1.8} />
                    </div>

                    <div>
                        <p className="text-[13px] font-medium text-[#65708B]">
                            {state[1].title}
                        </p>

                        <h3 className="mt-1 text-[25px] font-semibold leading-none text-[#17213D]">
                            {state[1].value}
                        </h3>

                        <p className="mt-2 text-[12px] text-[#65708B]">
                            {state[1].description}
                        </p>
                    </div>
                </div>

                <button className="mt-4 flex items-center gap-1 text-[12px] font-medium text-[#5946E8]">
                    View report
                    <span>→</span>
                </button>
            </div>

            <div className="rounded-xl border border-[#E8EAF0] bg-white p-4">
                <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E7] text-[#FF9D1C]">
                        <FolderKanban size={22} strokeWidth={1.8} />
                    </div>

                    <div>
                        <p className="text-[13px] font-medium text-[#65708B]">
                            {state[2].title}
                        </p>

                        <h3 className="mt-1 text-[25px] font-semibold leading-none text-[#17213D]">
                            {state[2].value}
                        </h3>

                        <p className="mt-2 text-[12px] text-[#65708B]">
                            {state[2].description}
                        </p>
                    </div>
                </div>

                <button className="mt-4 flex items-center gap-1 text-[12px] font-medium text-[#5946E8]">
                    View all
                    <span>→</span>
                </button>
            </div>

            <div className="rounded-xl border border-[#E8EAF0] bg-white p-4">
                <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#4385F5]">
                        <ClipboardList size={22} strokeWidth={1.8} />
                    </div>

                    <div>
                        <p className="text-[13px] font-medium text-[#65708B]">
                            {state[3].title}
                        </p>

                        <h3 className="mt-1 text-[25px] font-semibold leading-none text-[#17213D]">
                            {state[3].value}
                        </h3>

                        <p className="mt-2 text-[12px] text-[#65708B]">
                            {state[3].description}
                        </p>
                    </div>
                </div>

                <button className="mt-4 flex items-center gap-1 text-[12px] font-medium text-[#5946E8]">
                    View all
                    <span>→</span>
                </button>
            </div>
        </section>
    );
};