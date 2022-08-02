import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../contextAPI/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar_container">
      <div className="sidebar_top">
        <span className="sidebar_logo">Amrindra</span>
      </div>

      <hr />

      <div className="sidebar_center">
        <ul>
          <p className="title">MAIN</p>

          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>

          <Link to="/users">
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products">
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>

          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>

          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="sidebar_bottom">
        <div
          className="sidebar_color_option"
          onClick={() => {
            dispatch({ type: "LIGHT" });
          }}
        >
          <LightModeIcon style={{ color: "#F37878" }} />
        </div>
        <div
          className="sidebar_color_option"
          onClick={() => {
            dispatch({ type: "DARK" });
          }}
        >
          <BedtimeIcon style={{ color: "#F2DF3A" }} />
        </div>
        {/* <div className="sidebar_color_option"></div> */}
      </div>
    </div>
  );
};
export default Sidebar;
