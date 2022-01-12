import style from "./menu.module.scss";
import logo from "../../../assets/svg/img/logo.svg";
import { Route, Routes } from "react-router-dom";
import HomeMenu from "./pageMenu/HomeMenu";
import ControlMenu from "./pageMenu/ControlMenu";
import ManageMenu from "./pageMenu/ManageMenu";
import SettingMenu from "./pageMenu/SettingMenu";

function Menu(): JSX.Element {
  return (
    <div className={style.menu}>
      <img src={logo} alt="" />
      <div className={style.pb59}></div>
      <Routes>
        <Route path="/" element={<HomeMenu />} />
        <Route path="/TicketControl" element={<ControlMenu />} />
        <Route path="/TicketManager" element={<ManageMenu />} />
        <Route path="/Setting" element={<SettingMenu />} />
      </Routes>
    </div>
  );
}

export default Menu;
