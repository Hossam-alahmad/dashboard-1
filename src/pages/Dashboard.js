import React, { useState } from "react";
import StatusCard from "../components/StatusCard/StatusCard";
import { status } from "../utils/data/status-card";
import Chart from "react-apexcharts";
import Table from "../components/Table/Table";
import { Link } from "react-router-dom";
import { topCustomers } from "../utils/data/topCustomers";
import { latestOrders } from "../utils/data/LatestOrders";
import { useSelector } from "react-redux";
import Badge from "../components/Badge";
import TitlePage from "../components/TitlePage";
// apex chart setting
const chartOption = {
    series: [
        {
            name: "Online Customers",
            data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
        },
        {
            name: "Store Customers",
            data: [40, 30, 70, 80, 40, 16, 40, 20, 51],
        },
    ],
    options: {
        color: ["#6ab04c", "#2980b9"],
        chart: {
            background: "transparent",
            group: "social",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
            ],
        },

        legend: {
            position: "bottom",
        },
        grid: {
            show: true,
        },
    },
};

// top customers

// const topCustomers = {
//     head: ["User", "Total Orders", "Total Price"],
//     body: [
//         {
//             id: 1,
//             name: "Brittan Rois",
//             total_spend: "$557248.44",
//             total_orders: 24011,
//         },
//         {
//             id: 2,
//             name: "Matthew Junifer",
//             total_spend: "$599864.94",
//             total_orders: 60195,
//         },
//         {
//             id: 3,
//             name: "Finlay Baylay",
//             total_spend: "$171337.47",
//             total_orders: 96328,
//         },
//         {
//             id: 4,
//             name: "Beryle Monelli",
//             total_spend: "$335862.78",
//             total_orders: 78768,
//         },
//         {
//             id: 5,
//             name: "Ilario Shoppee",
//             total_spend: "$719845.14",
//             total_orders: 26045,
//         },
//     ],
// };
const renderTopCustomerBody = record => {
    return (
        <tr
            key={record.id}
            className="cursor-pointer transition-all overflow-hidden hover:bg-pr-color hover:text-white"
        >
            <td className="py-4 px-2 first:rounded-l-lg">{record.name}</td>
            <td className="py-4 px-2">{record.total_orders}</td>
            <td className="py-4 px-2 last:rounded-r-lg">
                {record.total_spend}
            </td>
        </tr>
    );
};
// latest orders
// const latestOrders = {
//     head: ["Order No", "User", "Total Price", "Date", "Status"],
//     body: [
//         {
//             id: 1,
//             orderId: "#0D1711",
//             name: "John Doe",
//             totalPrice: "$900",
//             date: "17 Jun 2021",
//             status: "Shipping",
//         },
//         {
//             id: 2,
//             orderId: "#0D1712",
//             name: "Frank Iva",
//             totalPrice: "400",
//             date: "1 Jun 2021",
//             status: "Paid",
//         },
//         {
//             id: 3,
//             orderId: "#0D1713",
//             name: "Anthony Baker",
//             totalPrice: "$200",
//             date: "27 Jun 2021",
//             status: "Pending",
//         },
//         {
//             id: 4,
//             orderId: "#0D1714",
//             name: "Frank Iva",
//             totalPrice: "$400",
//             date: "1 Jun 2021",
//             status: "Paid",
//         },
//         {
//             id: 5,
//             orderId: "#0D1715",
//             name: "John Doe",
//             totalPrice: "$200",
//             date: "27 Jun 2021",
//             status: "Refund",
//         },
//     ],
// };
// latest orders render records
const renderOrderBody = record => {
    return (
        <tr
            key={record.id}
            className="cursor-pointer transition-all  hover:bg-pr-color hover:text-white"
        >
            <td className="py-2 px-2 first:rounded-l-lg">{record.orderId}</td>
            <td className="py-2 px-2">{record.name}</td>
            <td className="py-2 px-2 ">{record.totalPrice}</td>
            <td className="py-2 px-2 ">{record.date}</td>
            <td className="py-2 px-2 last:rounded-r-lg first-letter:capitalize">
                <Badge status={record.status} />
            </td>
        </tr>
    );
};
const Dashboard = () => {
    const { mode } = useSelector(state => state);
    console.log(mode);
    return (
        <div className="dashboard p-4">
            <TitlePage title="Dashboard" />
            <div className="grid xl:grid-cols-2 gap-4 mb-4">
                <div className="status-card">
                    <StatusCard status={status} />
                </div>
                <div className="chart bg-white px-4 py-10 rounded-xl shadow-xl dark-theme h-[300px] xl:h-auto">
                    <Chart
                        options={
                            mode
                                ? {
                                      ...chartOption.options,
                                      theme: { mode: "dark" },
                                  }
                                : {
                                      ...chartOption.options,
                                      theme: { mode: "light" },
                                  }
                        }
                        series={chartOption.series}
                        type="line"
                        height="100%"
                    />
                </div>
            </div>
            <div className="grid  xl:grid-cols-2  2xl:grid-cols-3 gap-4">
                <div className="top-customers bg-white px-4 py-10 rounded-xl shadow-xl dark-theme ">
                    <h6 className="mb-4">Top Customers</h6>
                    <Table
                        head={topCustomers.head}
                        body={topCustomers.body}
                        renderCustomerBody={renderTopCustomerBody}
                    />
                    <Link
                        to="/"
                        className="block mt-4 text-center transition-all hover:text-pr-color"
                    >
                        Show All
                    </Link>
                </div>
                <div className="top-customers  bg-white px-4 py-10 rounded-xl shadow-xl 2xl:col-span-2 dark-theme">
                    <h6 className="mb-4">Last Orders</h6>
                    <div className="h-auto">
                        <Table
                            head={latestOrders.head}
                            body={latestOrders.body}
                            renderCustomerBody={renderOrderBody}
                        />
                    </div>
                    <Link
                        to="/"
                        className="block mt-4 text-center transition-all hover:text-pr-color "
                    >
                        Show All
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
