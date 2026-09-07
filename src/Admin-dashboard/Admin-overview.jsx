export const AdminOverview = () => {
    const admin = [
        {
            name: "Admin User",
            role: "Administrator",
            description:
                "Monitor your business performance, manage users and projects, and stay updated with your latest activities.",
        },
    ];

    return (
        <section className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl bg-[#F2EFFF] px-6 py-7 sm:px-8 lg:px-10">
                <div className="flex min-h-[150px] items-center justify-between gap-6">
                    <div className="relative z-10 max-w-[600px]">
                        <p className="mb-2 text-sm font-medium text-[#5946E8]">
                            {admin[0].role}
                        </p>

                        <h1 className="text-2xl font-bold tracking-tight text-[#17213D] sm:text-3xl lg:text-[34px]">
                            Welcome back, {admin[0].name}!
                        </h1>

                        <p className="mt-3 max-w-[520px] text-sm leading-6 text-[#65708B] sm:text-[15px]">
                            {admin[0].description}
                        </p>
                    </div>

                    <div className="absolute bottom-0 right-8 hidden sm:block">
                        <div className="flex h-[145px] w-[145px] items-center justify-center rounded-full bg-white/70">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-20 w-20 text-[#5946E8]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 12a7.5 7.5 0 0 1-.6 2.96l1.13 1.13-2.12 2.12-1.13-1.13A7.5 7.5 0 0 1 13.82 18l-.32 1.5h-3l-.32-1.5a7.5 7.5 0 0 1-2.96-.92l-1.13 1.13-2.12-2.12 1.13-1.13A7.5 7.5 0 0 1 4.5 12c0-1.04.21-2.03.6-2.93L3.97 7.94l2.12-2.12 1.13 1.13A7.5 7.5 0 0 1 10.18 6l.32-1.5h3l.32 1.5a7.5 7.5 0 0 1 2.96.95l1.13-1.13 2.12 2.12-1.13 1.13c.39.9.6 1.89.6 2.93Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};