import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../utils/data/sidebar-routes";
import { icons } from "../utils/data/icons";
import Logo from "../assets/images/logo.png";
const Sidebar = ({ showSidebar, setShowSidebar }) => {
    return (
        <div
            className={`sidebar ${
                showSidebar ? "translate-x-0 w-[300px]" : "-translate-x-full"
            } fixed min-h-full    md:relative z-50 md:translate-x-0 md:flex-grow lg:flex-grow-0 lg:w-[300px]    flex-shrink-0 bg-white shadow-xl p-4 dark-theme dark:shadow-shadow-color-dark`}
        >
            <button
                onClick={() => setShowSidebar(false)}
                className="relative md:hidden text-3xl left-full -translate-x-full w-[40px] h-[40px] flex justify-center items-center "
            >
                {icons.close}
            </button>
            <div className="logo mb-4 w-6/12 mx-auto">
                <img src={Logo} alt="logo" />
            </div>

            <div>
                {routes.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.route}
                        className={`hover:bg-pr-color block group rounded-2xl p-4 duration-300 mb-2`}
                    >
                        <div>
                            <div
                                className={`flex items-center duration-300 group-hover:pl-2 group-hover:text-white`}
                            >
                                <span className="mr-2">{item.icon}</span>
                                {item.display_name}
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
