import React from "react";
import Table from "../components/Table/Table";
import TitlePage from "../components/TitlePage";
import { customersList } from "../utils/data/customers-list";
const customersHead = [
    "#No",
    "Name",
    "Email",
    "Phone",
    "Total Orders",
    "Total Spend",
    "Location",
];
const renderCustomers = record => {
    return (
        <tr
            key={record.id}
            className="cursor-pointer transition-all overflow-hidden hover:bg-pr-color hover:text-white "
        >
            <td className="py-4 px-2 first:rounded-l-lg">{record.id}</td>
            <td className="py-4 px-2 first:rounded-l-lg">{record.name}</td>
            <td className="py-4 px-2">{record.email}</td>
            <td className="py-4 px-2 ">{record.phone}</td>
            <td className="py-4 px-2 ">{record.total_orders}</td>
            <td className="py-4 px-2 ">{record.total_spend}</td>
            <td className="py-4 px-2 last:rounded-r-lg ">{record.location}</td>
        </tr>
    );
};
const Customers = () => {
    return (
        <div className="customers p-4">
            <TitlePage title="Customers" />
            <div className="bg-white px-4 py-10 rounded-xl shadow-xl dark-theme">
                <Table
                    limit="10"
                    head={customersHead}
                    body={customersList}
                    renderCustomerBody={renderCustomers}
                />
            </div>
        </div>
    );
};

export default Customers;
