import React, { useState } from "react";
import { icons } from "../../utils/data/icons";
import { notification } from "../../utils/data/notification";
import user from "../../assets/images/user.jpg";
import Notification from "./Notification";
import UserDropdown from "./UserDropdown";

const TopNav = ({ setShowSidebar }) => {
    const [activeNotify, setActiveNotify] = useState(false);
    const [activeUserList, setActiveUserList] = useState(false);

    const userClickHandler = e => {
        setActiveNotify(false);

        if (
            e.target.classList.contains("title") ||
            e.target.hasAttribute("alt")
        ) {
            setActiveUserList(!activeUserList);
        }
    };
    const notifyClickHandler = () => {
        setActiveNotify(!activeNotify);
        setActiveUserList(false);
    };

    return (
        <div className="top-nav p-4 relative dark:text-txt-color-dark">
            <div className="nav-content flex justify-between items-center">
                <div className="search-box flex items-center">
                    <button
                        onClick={() => setShowSidebar(true)}
                        className="md:hidden text-2xl mr-2 dark-theme w-[40px] h-[40px] rounded flex justify-center items-center"
                    >
                        {icons.menu}
                    </button>
                    <div className="relative">
                        <input
                            type="text"
                            className={`lg:w-[500px] dark-theme dark:border-zinc-700 dark:shadow-zinc-800 bg-white shadow-md rounded-2xl p-2 outline-none border  duration-300 focus:border-pr-color focus:shadow-pr-color focus:shadow pr-[50px]`}
                            placeholder="Search here"
                        />
                        <span className="absolute top-0 right-0 h-full w-[50px]  text-2xl flex justify-center items-center">
                            {icons.search}
                        </span>
                    </div>
                </div>
                <div className="text-3xl relative flex">
                    <div
                        className="p-2 flex items-center cursor-pointer relative"
                        onClick={userClickHandler}
                    >
                        <img
                            src={user}
                            className="w-[40px] rounded-full mr-2"
                            alt="user"
                        />
                        <h6 className="hidden lg:block title">
                            Hossam Alahmad
                        </h6>
                        <UserDropdown activeUserList={activeUserList} />
                    </div>
                    <button
                        className="p-2 relative"
                        onClick={notifyClickHandler}
                    >
                        {notification.length > 0 ? (
                            <span className="absolute w-[20px] top-1 right-1 bg-pr-color text-sm rounded-full text-white">
                                {notification.length}
                            </span>
                        ) : null}
                        {icons.notify}
                    </button>
                </div>

                <Notification
                    activeNotify={activeNotify}
                    notification={notification}
                    icons={icons}
                />
            </div>
        </div>
    );
};

export default TopNav;
