import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

export const RevenueOverview = () => {
    const revenueData = [
        { date: "May 1", revenue: 5200 },
        { date: "May 7", revenue: 6800 },
        { date: "May 14", revenue: 9200 },
        { date: "May 21", revenue: 8400 },
        { date: "May 28", revenue: 11200 },
        { date: "May 31", revenue: 12800 },
    ];

    const revenueSources = [
        { name: "Projects", value: 45 },
        { name: "Orders", value: 30 },
        { name: "Services", value: 15 },
        { name: "Others", value: 10 },
    ];

    const totalRevenue = revenueData[revenueData.length - 1].revenue;

    return (
        <section className="rounded-2xl border border-[#E8EAF0] bg-white p-5 sm:p-6 mt-5">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#17213D]">
                    Revenue Overview
                </h2>

                <button className="flex items-center gap-2 rounded-lg border border-[#E8EAF0] px-3 py-2 text-xs font-medium text-[#65708B]">
                    This Month
                    <span>⌄</span>
                </button>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,1fr)]">
                <div className="min-w-0">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-[#65708B]">
                            Revenue Over Time
                        </p>

                        <div className="flex items-center gap-2 text-xs text-[#65708B]">
                            <span className="h-2 w-2 rounded-full bg-[#5946E8]" />
                            Revenue
                        </div>
                    </div>

                    <div className="mt-5 h-[270px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={revenueData}
                                margin={{
                                    top: 8,
                                    right: 12,
                                    left: 4,
                                    bottom: 4,
                                }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#EEF0F5"
                                />

                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={10}
                                    tick={{
                                        fill: "#8A93A7",
                                        fontSize: 12,
                                        
                                    }}
                                />

                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={10}
                                    width={42}
                                    tick={{
                                        fill: "#8A93A7",
                                        fontSize: 13,
                                    }}
                                    tickFormatter={(value) =>
                                        `$${value / 1000}k`
                                    }
                                />

                                <Tooltip
                                    formatter={(value) => [
                                        `$${value.toLocaleString()}`,
                                        "Revenue",
                                    ]}
                                    contentStyle={{
                                        border: "1px solid #E8EAF0",
                                        borderRadius: "10px",
                                        boxShadow:
                                            "0 5px 20px rgba(23, 33, 61, 0.08)",
                                    }}
                                />

                                <Line
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#5946E8"
                                    strokeWidth={3}
                                    dot={{
                                        r: 4,
                                        fill: "#5946E8",
                                        strokeWidth: 2,
                                        stroke: "#FFFFFF",
                                    }}
                                    activeDot={{
                                        r: 6,
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="border-t border-[#EEF0F5] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="text-sm font-medium text-[#65708B]">
                        Revenue Breakdown
                    </p>

                    <div className="mt-5 flex flex-col items-center">
                        <div className="relative h-[185px] w-[185px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={revenueSources}
                                        dataKey="value"
                                        nameKey="name"
                                        innerRadius={60}
                                        outerRadius={85}
                                        paddingAngle={3}
                                        stroke="none"
                                    >
                                        <Cell fill="#5946E8" />
                                        <Cell fill="#6FCF97" />
                                        <Cell fill="#FFB74D" />
                                        <Cell fill="#4385F5" />
                                    </Pie>

                                    <Tooltip
                                        formatter={(value) => [
                                            `${value}%`,
                                            "Revenue",
                                        ]}
                                    />
                                </PieChart>
                            </ResponsiveContainer>

                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-[#17213D]">
                                    ${(totalRevenue / 1000).toFixed(1)}K
                                </span>

                                <span className="mt-1 text-x text-[#8A93A7]">
                                    Total
                                </span>
                            </div>
                        </div>

                        <div className="mt-5 w-full space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#5946E8]" />
                                    <span className="text-[14px] text-[#65708B]">
                                        Projects
                                    </span>
                                </div>

                                <span className="text-xs font-semibold text-[#17213D]">
                                    45%
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#6FCF97]" />
                                    <span className="text-[14px] text-[#65708B]">
                                        Orders
                                    </span>
                                </div>

                                <span className="text-xs font-semibold text-[#17213D]">
                                    30%
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFB74D]" />
                                    <span className="text-[14px] text-[#65708B]">
                                        Services
                                    </span>
                                </div>

                                <span className="text-xs font-semibold text-[#17213D]">
                                    15%
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#4385F5]" />
                                    <span className="text-[14px] text-[#65708B]">
                                        Others
                                    </span>
                                </div>

                                <span className="text-xs font-semibold text-[#17213D]">
                                    10%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};