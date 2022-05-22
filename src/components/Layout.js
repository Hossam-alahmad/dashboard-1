import React, { useState } from "react";
import Dashboard from "../pages/Dashboard";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav/TopNav";
import RoutesDash from "./RoutesDash";
const Layout = () => {
    if (window.localStorage.getItem("theme")) {
        document.documentElement.classList.add("dark");
    }
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="layout text-txt-color flex bg-sec-bg  dark:bg-sec-bg-dark ">
            <Sidebar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div className="content flex-grow">
                <TopNav setShowSidebar={setShowSidebar} />
                <RoutesDash />
            </div>
        </div>
    );
};

export default Layout;
