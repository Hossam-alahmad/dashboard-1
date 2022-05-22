import Customers from "../../pages/Customers";
import Dashboard from "../../pages/Dashboard";
import { icons } from "./icons";

export const routes = [
    {
        display_name: "Dashboard",
        route: "/",
        icon: icons.dashboard,
        component: <Dashboard />,
    },
    {
        display_name: "Customers",
        route: "/customers",
        icon: icons.users,
        component: <Customers />,
    },
    {
        display_name: "Products",
        route: "/products",
        icon: icons.product,
    },
    {
        display_name: "Orders",
        route: "/orders",
        icon: icons.cart,
    },
    {
        display_name: "Analytics",
        route: "/analytics",
        icon: icons.analytics,
    },
    {
        display_name: "categories",
        route: "/categories",
        icon: icons.category,
    },
    {
        display_name: "discount",
        route: "/discount",
        icon: icons.gift,
    },
    {
        display_name: "inventory",
        route: "/inventory",
        icon: icons.store,
    },
    {
        display_name: "settings",
        route: "/settings",
        icon: icons.setting,
    },
];
