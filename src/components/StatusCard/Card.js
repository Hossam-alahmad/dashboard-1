import React from "react";

const Card = ({ icon, title, count }) => {
    return (
        <div className="card dark-theme bg-white px-4 py-10 rounded-xl shadow-xl overflow-hidden relative  before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-full before:bg-pr-color before:transition-all before:duration-200 group">
            <div className="relative z-10 flex justify-around items-center transition-all group-hover:text-white">
                <div className="icon text-4xl">{icon}</div>
                <div className="info">
                    <span className="count block text-2xl font-bold text-center">
                        {count}
                    </span>
                    <span className="title block text-sm">{title}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
