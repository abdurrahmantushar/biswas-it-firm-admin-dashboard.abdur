import { useState } from "react";
import { DashboardSideBar } from "./Sidebar";
import { DashboardNavbar } from "./Navbar";
import { Dashboard } from "./Dashboard";

export const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <div className="min-h-screen bg-[#F8F9FC]">
            <DashboardSideBar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="lg:ml-[250px]">
                <DashboardNavbar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    search={search}
                    setSearch={setSearch}
                />

                <Dashboard search={search} />
            </div>
        </div>
    );
};