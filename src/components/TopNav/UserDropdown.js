import React, { useEffect, useState } from "react";
import { icons } from "../../utils/data/icons";
import { userMenu } from "../../utils/data/user-menu";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../Redux/Reducers/themeMode";

const UserDropdown = ({ activeUserList }) => {
    const dispatch = useDispatch();
    const { mode } = useSelector(state => state);
    const [toggleTheme, setToggleTheme] = useState(mode ? false : true);
    const themeModeHandler = () => {
        if (toggleTheme) {
            userMenu[0].icon = icons.moon;
            userMenu[0].content = "Dark Mode";
            document.documentElement.classList.add("dark");
            window.localStorage.setItem("theme", "dark");
            dispatch(changeTheme("dark"));
        } else {
            userMenu[0].icon = icons.sun;
            userMenu[0].content = "Light Mode";
            document.documentElement.classList.remove("dark");
            window.localStorage.removeItem("theme");
            dispatch(changeTheme(null));
        }
        setToggleTheme(!toggleTheme);
    };
    return (
        <div
            className={`z-50 dark-theme transition-all ease-[cubic-bezier(0.175,0.885,0.32,1.100)] ${
                activeUserList ? "scale-100" : "scale-0"
            } origin-top-right duration-300 notify-dropdown  p-4 rounded-xl bg-white top-full right-2 lg:right-20 shadow-xl absolute w-[200px] `}
        >
            {userMenu.map((item, index) => {
                if (index === 0) {
                    return (
                        <div
                            key={index}
                            className="first-of-type:border-b-2 notify-item transition-all rounded text-lg flex items-center p-2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-sec-bg-dark dark:border-zinc-600"
                            onClick={themeModeHandler}
                        >
                            <span className="mr-4 text-xl">{item.icon}</span>
                            <p>{item.content}</p>
                        </div>
                    );
                }
                return (
                    <div
                        key={index}
                        className="notify-item transition-all rounded text-lg flex items-center p-2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-sec-bg-dark "
                    >
                        <span className="mr-4 text-xl">{item.icon}</span>
                        <p>{item.content}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default React.memo(UserDropdown);
