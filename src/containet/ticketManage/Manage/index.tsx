import { Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../component/Button";
import { loadData } from "../../../redux/action-creator";
import { ReducerState } from "../../../redux/reducers";
import Search from "../../page/Search";
import TableCustom from "../../TicketControl/Table";
import style from "./manage.module.scss";

function Manage() {
  const data = useSelector((state: ReducerState) => state.api.data);
  const request = useSelector((state: ReducerState) => state.api.request);

  const dispatch = useDispatch();

  let tableData;

  useEffect(() => {
    dispatch(loadData("ticketManage"));
  }, [dispatch]);

  if (data.ticketManage) {
    tableData = data.ticketManage.list;
  }

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Số vé",
      dataIndex: "ticketId",
      key: "ticketId",
    },
    {
      title: "Tên sự kiện",
      key: "even",
      dataIndex: "even",
    },
    {
      title: "Ngày sử dụng",
      key: "dateEnd",
      dataIndex: "dateEnd",
    },
    {
      title: "Loại vé",
      key: "ticketType",
      dataIndex: "ticketType",
    },
    {
      title: "Cổng check - in",
      key: "gate",
      dataIndex: "gate",
    },
  ];
  return (
    <div className={style.wapper}>
      <span className={style.title}>Đối soát vé</span>
      <Row justify="space-between">
        <Search placeholder="Tìm bằng số vé" background="#F7F7F8" width={446} />
        <Button type="fill" size="xl">
          Chốt đối soát
        </Button>
      </Row>
      <Row style={{ width: "100%" }}>
        <TableCustom data={tableData} columns={columns} request={request} />
      </Row>
    </div>
  );
}

export default Manage;
