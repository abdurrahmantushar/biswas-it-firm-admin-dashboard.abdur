import {
    Bell,
    ChevronDown,
    Menu,
    Search,
    X,
} from "lucide-react";

export const DashboardNavbar = ({ sidebarOpen, setSidebarOpen, search, setSearch }) => {
    return (
        <section className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-100 bg-white px-4 sm:px-5 lg:px-8">
            <div className="flex min-w-0 items-center gap-4 sm:gap-6">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="shrink-0 text-gray-500 transition-colors hover:text-[#5146E5] lg:hidden"
                >
                    {sidebarOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                <div className="flex min-w-0 items-center gap-6 lg:gap-10 xl:gap-20">
                    <h1 className="hidden text-2xl font-semibold text-[#5146E5] lg:block">
                        Hey Admin, what's up?
                    </h1>

                    <div className="hidden h-11 w-80 items-center gap-3 rounded-xl border border-gray-200 px-4 sm:flex lg:w-[535px]">
                        <Search className="h-5 w-5 shrink-0 text-gray-400" />

                        <input
                            type="text"
                            placeholder="Search users, projects..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full min-w-0 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                        />
                    </div>

                    <button className="text-gray-500 sm:hidden">
                        <Search className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-3 sm:gap-5">
                <button className="relative text-gray-500 transition-colors hover:text-[#5146E5]">
                    <Bell className="h-5 w-5" />

                    <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                        2
                    </span>
                </button>

                <div className="hidden h-8 w-px bg-gray-200 sm:block" />

                <button className="flex items-center gap-2 sm:gap-3">
                    <img
                        src="https://i.pravatar.cc/100?img=12"
                        alt="Admin"
                        className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
                    />

                    <div className="hidden text-left md:block">
                        <h4 className="text-sm font-semibold text-[#111827]">
                            Admin User
                        </h4>

                        <p className="text-xs text-gray-500">
                            Administrator
                        </p>
                    </div>

                    <ChevronDown className="hidden h-4 w-4 text-gray-500 sm:block" />
                </button>
            </div>
        </section>
    );
};