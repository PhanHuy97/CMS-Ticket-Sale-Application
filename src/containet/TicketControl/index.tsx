import Button from "../../component/Button";
import glass from "../../assets/svg/icon/glass.svg";
import style from "./ticketControl.module.scss";
import Search from "../page/Search";
import TableCustom from "./Table";
import { useState } from "react";
import Fillter from "./fillter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../redux/action-creator";
import { ReducerState } from "../../redux/reducers";
import Status from "../../component/status";
import { Row } from "antd";

function TicketControl() {
  const [fillterButton, setFillterButton] = useState(false);

  function handleClickFillter() {
    setFillterButton(!fillterButton);
  }

  const data = useSelector((state: ReducerState) => state.api.data);
  const request = useSelector((state: ReducerState) => state.api.request);

  const dispatch = useDispatch();

  let tableData;

  useEffect(() => {
    dispatch(loadData("ticketControl"));
  }, [dispatch]);

  if (data.ticketControl) {
    tableData = data.ticketControl.list;
  }

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Booking code",
      dataIndex: "booking",
      key: "booking",
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
      title: "Tình trạng sử dụng",
      dataIndex: "status",
      key: "status",

      render: (status: "coming" | "open" | "end") => {
        let children: string = "coming";
        if (status === "coming") {
          children = "Đã sử dụng";
        }
        if (status === "open") {
          children = "Chưa sử dụng";
        }
        if (status === "end") {
          children = "Hết hạn";
        }
        return <Status status={status}>{children}</Status>;
      },
    },
    {
      title: "Ngày sử dụng",
      key: "dateEnd",
      dataIndex: "dateEnd",
    },
    {
      title: "Ngày xuất vé",
      key: "dateStart",
      dataIndex: "dateStart",
    },
    {
      title: "Cổng check - in",
      key: "gate",
      dataIndex: "gate",
    },
  ];

  return (
    <Row className={style.pageWapper}>
      <div className={style.waper}>
        <span className={style.header}>Danh sách vé</span>
        <div className={style.search}>
          <Search
            placeholder="Tìm bằng số vé"
            background="#F7F7F8"
            width={446}
          />
          <div className={style.buttonWaper}>
            <Button
              icon={glass}
              type="outline"
              size="xl"
              marginRight={10}
              onClick={handleClickFillter}
            >
              Lọc vé
            </Button>
            <Button type="outline" size="xl">
              Xuất file (.csv)
            </Button>
          </div>
        </div>
        <TableCustom data={tableData} columns={columns} request={request} />
        {fillterButton && <Fillter exists={handleClickFillter} />}
      </div>
    </Row>
  );
}

export default TicketControl;
