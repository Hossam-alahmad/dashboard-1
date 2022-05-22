import React from "react";

const statusOrder = {
    shipping: "badge-primary",
    pending: "badge-warning",
    paid: "badge-success",
    refund: "badge-danger",
};

const Badge = ({ status }) => {
    return (
        <div
            className={`badge ${
                `bg-` + statusOrder[status]
            } inline-block p-2 rounded-lg text-white`}
        >
            {status}
        </div>
    );
};

export default Badge;
