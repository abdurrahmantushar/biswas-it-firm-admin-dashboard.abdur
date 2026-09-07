import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    Bell,
    FolderKanban,
    LayoutDashboard,
    LogOut,
    Settings,
    Users,
    X,
    DollarSign,
    ClipboardList,
} from "lucide-react";

export const DashboardSideBar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <>
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                    />
                )}
            </AnimatePresence>

            <aside
                className={`fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col border-r border-[#E8EAF0] bg-white transition-transform duration-300 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0`}
            >
                <div className="flex h-20 shrink-0 items-center justify-between px-7 max-xl:px-5">
                    <a href="/" className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#5946E8] text-white">
                            <BarChart3 size={21} />
                        </div>

                        <span className="text-[22px] font-bold tracking-[-0.5px] text-[#17213D]">
                            Admin<span className="text-[#5946E8]">Panel</span>
                        </span>
                    </a>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSidebarOpen(false)}
                        className="text-gray-500 lg:hidden"
                    >
                        <X className="h-5 w-5" />
                    </motion.button>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 pt-2 max-xl:px-3">
                    <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex h-[46px] w-full items-center gap-4 rounded-[10px] bg-[#F3F0FF] px-4 text-[#5946E8]"
                    >
                        <LayoutDashboard size={21} strokeWidth={1.8} />
                        <span className="text-[14px] font-medium">
                            Dashboard
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-1 flex h-[46px] w-full items-center gap-4 rounded-[10px] px-4 text-[#18233F] transition hover:bg-[#F7F7FB]"
                    >
                        <Users
                            size={21}
                            strokeWidth={1.8}
                            className="text-[#64708C]"
                        />
                        <span className="text-[14px] font-medium">
                            Users
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-1 flex h-[46px] w-full items-center gap-4 rounded-[10px] px-4 text-[#18233F] transition hover:bg-[#F7F7FB]"
                    >
                        <FolderKanban
                            size={21}
                            strokeWidth={1.8}
                            className="text-[#64708C]"
                        />
                        <span className="text-[14px] font-medium">
                            Projects
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-1 flex h-[46px] w-full items-center gap-4 rounded-[10px] px-4 text-[#18233F] transition hover:bg-[#F7F7FB]"
                    >
                        <ClipboardList
                            size={21}
                            strokeWidth={1.8}
                            className="text-[#64708C]"
                        />
                        <span className="text-[14px] font-medium">
                            Orders
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-1 flex h-[46px] w-full items-center gap-4 rounded-[10px] px-4 text-[#18233F] transition hover:bg-[#F7F7FB]"
                    >
                        <DollarSign
                            size={21}
                            strokeWidth={1.8}
                            className="text-[#64708C]"
                        />
                        <span className="text-[14px] font-medium">
                            Revenue
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-1 flex h-[46px] w-full items-center gap-4 rounded-[10px] px-4 text-[#18233F] transition hover:bg-[#F7F7FB]"
                    >
                        <Bell
                            size={21}
                            strokeWidth={1.8}
                            className="text-[#64708C]"
                        />

                        <span className="text-[14px] font-medium">
                            Activity
                        </span>

                        <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full border border-[#D9D1FF] bg-[#F5F2FF] px-1.5 text-[12px] font-medium text-[#5946E8]">
                            3
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-1 flex h-[46px] w-full items-center gap-4 rounded-[10px] px-4 text-[#18233F] transition hover:bg-[#F7F7FB]"
                    >
                        <Settings
                            size={21}
                            strokeWidth={1.8}
                            className="text-[#64708C]"
                        />
                        <span className="text-[14px] font-medium">
                            Settings
                        </span>
                    </motion.button>

                    <div className="my-5 border-t border-[#E8EAF0]" />

                    <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-1 flex h-[46px] w-full items-center gap-4 rounded-[10px] px-4 text-[#18233F] transition hover:bg-[#F7F7FB]"
                    >
                        <LogOut
                            size={21}
                            strokeWidth={1.8}
                            className="text-[#64708C]"
                        />
                        <span className="text-[14px] font-medium">
                            Logout
                        </span>
                    </motion.button>
                </nav>

                <div className="shrink-0 px-4 pb-5 max-xl:px-3">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="overflow-hidden rounded-[14px] bg-[#F2EFFF] px-5 pb-5 pt-5"
                    >
                        <h3 className="text-[16px] font-semibold text-[#5946E8]">
                            Admin Overview
                        </h3>

                        <p className="mt-2 max-w-[175px] text-[12px] leading-5 text-[#65708B]">
                            Manage your users, projects and business activity.
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                            <motion.div
                                whileHover={{ scale: 1.06 }}
                                className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white"
                            >
                                <Users
                                    size={27}
                                    className="text-[#5946E8]"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.06, rotate: 5 }}
                                className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#5946E8] text-white"
                            >
                                <BarChart3 size={28} />
                            </motion.div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-4 flex h-[38px] w-full items-center justify-center gap-2 rounded-[7px] bg-[#5946E8] text-[12px] font-semibold text-white transition hover:bg-[#4937D1]"
                        >
                            View Analytics
                            <ArrowRight size={15} />
                        </motion.button>
                    </motion.div>
                </div>
            </aside>
        </>
    );
};