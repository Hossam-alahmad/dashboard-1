import React from "react";

const Notification = ({ activeNotify, notification, icons }) => {
    const maxNotifyNumber = 5;
    return (
        <div
            className={`z-50 dark-theme transition-all ease-[cubic-bezier(0.175,0.885,0.32,1.100)] ${
                activeNotify ? "scale-100" : "scale-0"
            } origin-top-right duration-300 notify-dropdown  p-4 rounded-xl bg-white top-full right-4 shadow-xl absolute w-[400px] `}
        >
            {notification.length > 0 ? (
                <>
                    {notification
                        .filter((item, index) => index < maxNotifyNumber)
                        .map((item, index) => (
                            <div
                                key={index}
                                className=" notify-item transition-all rounded  flex items-center p-2 cursor-pointer hover:bg-zinc-100 last-of-type:mb-4 dark:hover:bg-sec-bg-dark"
                            >
                                <span className="mr-4 text-xl">
                                    {item.icon}
                                </span>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    <a href="#" className="block text-center">
                        Show All
                    </a>
                </>
            ) : (
                <p className="text-center flex flex-col items-center">
                    <span className="text-8xl mb-2">{icons.error}</span>
                    You dont have any notify
                </p>
            )}
        </div>
    );
};

export default React.memo(Notification);
