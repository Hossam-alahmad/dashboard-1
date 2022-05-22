import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../utils/data/sidebar-routes";
const RoutesDash = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.route}
                    element={route.component}
                />
            ))}
        </Routes>
    );
};

export default RoutesDash;
