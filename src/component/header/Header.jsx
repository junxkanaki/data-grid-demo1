import "./Header.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../contextAPI/darkModeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { dispatch } = useContext(DarkModeContext);

  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
    setToggle(!toggle);
  };

  return (
    <header className="header_container">
      <div className="header_wrapper">
        <div className="header_search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>

        <div className="header_items">
          <div className="header_item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>

          <div className="header_item" onClick={handleClick}>
            {toggle ? (
              <LightModeIcon className="icon" style={{ color: "#F37878" }} />
            ) : (
              <BedtimeIcon className="icon" style={{ color: "#F2DF3A" }} />
            )}
          </div>

          <div className="header_item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>

          <div className="header_item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="header_item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="header_item">
            <ListOutlinedIcon className="icon" />
          </div>

          <div className="header_item">
            <img
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
