import React, { useState } from "react";

const Table = ({ head, body, renderCustomerBody, limit }) => {
    const initDataShow = limit ? body.slice(0, Number(limit)) : body;
    const [dataShow, setDataShow] = useState(initDataShow);
    const [currentPage, setCurrentPage] = useState(0);
    let pages = 1;
    let range = [];
    if (limit !== undefined) {
        let page = Math.floor(body.length / Number(limit));
        pages = body.length % Number(limit) === 0 ? page : page + 1;
        range = [...Array(pages).keys()];
    }
    const changePageHandler = page => {
        const start = Number(limit) * page;
        const end = start + Number(limit);

        setDataShow(body.slice(start, end));
        setCurrentPage(page);
    };
    return (
        <>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr>
                        {head.map((th, index) => (
                            <th key={index} className="px-2">
                                <div className="mb-2">{th}</div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataShow.map(customer => renderCustomerBody(customer))}
                </tbody>
            </table>
            {pages > 1 ? (
                <div className="table-pagination p-2 mt-4 flex flex-wrap justify-start items-center">
                    {range.map((item, index) => (
                        <div
                            key={index}
                            className={`mr-1 w-[30px] h-[30px] flex justify-center items-center cursor-pointer transition-all rounded-full hover:bg-pr-color hover:text-white ${
                                currentPage === item ? "active" : ""
                            }`}
                            onClick={() => changePageHandler(item)}
                        >
                            {item + 1}
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    );
};

export default Table;
