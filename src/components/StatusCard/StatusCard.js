import React from "react";
import Card from "./Card";

const StatusCard = ({ status }) => {
    return (
        <div className="status grid sm:grid-cols-2 gap-4">
            {status.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default StatusCard;
