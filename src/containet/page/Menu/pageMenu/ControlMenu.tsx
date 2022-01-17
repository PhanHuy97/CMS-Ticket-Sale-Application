import Tag from "../../../../component/tags";
import home from "../../../../assets/svg/icon/home.svg";
import list from "../../../../assets/svg/icon/list.svg";
import setting from "../../../../assets/svg/icon/setting.svg";
import ticket from "../../../../assets/svg/icon/ticket.svg";
import { Link } from "react-router-dom";
import style from "./pageMenu.module.scss";

function ControlMenu() {
  return (
    <>
      <Tag selected={false} icon={home} link="/">
        Trang chủ
      </Tag>
      <Tag selected={true} icon={ticket} link="/TicketControl">
        Quản lí vé
      </Tag>
      <Tag selected={false} icon={list} link="/TicketManager">
        Đối soát vé
      </Tag>
      <Tag selected={false} icon={setting} link="/Setting">
        Cài đặt
      </Tag>
      <Link to="/Setting" className={style.settingPlus}>
        Gói dịch vụ
      </Link>
    </>
  );
}

export default ControlMenu;
