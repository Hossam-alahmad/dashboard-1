import {
    MdOutlineDashboard,
    MdOutlineCategory,
    MdOutlineStorefront,
    MdOutlineSearch,
    MdOutlineNotificationsNone,
    MdOutlineErrorOutline,
    MdOutlineDarkMode,
    MdOutlineLightMode,
    MdOutlineClose,
} from "react-icons/md";
import {
    FiUsers,
    FiPackage,
    FiShoppingCart,
    FiGift,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";
import {
    AiOutlineUser,
    AiOutlineShopping,
    AiOutlineDollar,
} from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { BiReceipt, BiMenuAltLeft } from "react-icons/bi";
export const icons = {
    dashboard: <MdOutlineDashboard />,
    category: <MdOutlineCategory />,
    store: <MdOutlineStorefront />,
    users: <FiUsers />,
    product: <FiPackage />,
    cart: <FiShoppingCart />,
    analytics: <FaChartLine />,
    gift: <FiGift />,
    setting: <FiSettings />,
    search: <MdOutlineSearch />,
    user: <AiOutlineUser />,
    notify: <MdOutlineNotificationsNone />,
    error: <MdOutlineErrorOutline />,
    wallet: <BsWallet2 />,
    logout: <FiLogOut />,
    shoping: <AiOutlineShopping />,
    dollar: <AiOutlineDollar />,
    receipt: <BiReceipt />,
    moon: <MdOutlineDarkMode />,
    sun: <MdOutlineLightMode />,
    menu: <BiMenuAltLeft />,
    close: <MdOutlineClose />,
};
