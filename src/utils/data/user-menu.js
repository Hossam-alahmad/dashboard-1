import { icons } from "./icons";
export let userMenu = [
    {
        icon: window.localStorage.getItem("theme") ? icons.moon : icons.sun,
        content: window.localStorage.getItem("theme")
            ? "Dark mode"
            : "Light mode",
    },

    {
        icon: icons.user,
        content: "Profile",
    },
    {
        icon: icons.wallet,
        content: "My Wallet",
    },
    {
        icon: icons.setting,
        content: "Settings",
    },
    {
        icon: icons.logout,
        content: "Logout",
    },
];
