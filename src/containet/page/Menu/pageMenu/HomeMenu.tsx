import Tag from "../../../../component/tags";
import home from "../../../../assets/svg/icon/home.svg";
import list from "../../../../assets/svg/icon/list.svg";
import setting from "../../../../assets/svg/icon/setting.svg";
import ticket from "../../../../assets/svg/icon/ticket.svg";

function HomeMenu() {
  return (
    <>
      <Tag selected={true} icon={home} link="/">
        Trang chủ
      </Tag>
      <Tag selected={false} icon={ticket} link="/TicketControl">
        Quản lí vé
      </Tag>
      <Tag selected={false} icon={list} link="/TicketManager">
        Đối soát vé
      </Tag>
      <Tag selected={false} icon={setting} link="/Setting">
        Cài đặt
      </Tag>
    </>
  );
}

export default HomeMenu;
