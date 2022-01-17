import Button from "../../component/Button";
import glass from "../../assets/svg/icon/glass.svg";
import style from "./setting.module.scss";
import Search from "../page/Search";
import TableCustom from "../TicketControl/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../redux/action-creator";
import { ReducerState } from "../../redux/reducers";
import Status from "../../component/status";
import { Row } from "antd";
import AddTicket from "./addTicket";
import UpdateTicket from "./updateTicket";
import UpdateButton from "./updateButton";

function Setting() {
  const [addTicket, setAddTicket] = useState(false);

  const handleClickAdd = () => {
    setAddTicket(!addTicket);
  };
  const [updateTicket, setupdateTicket] = useState(false);

  const handleClickUpdate = () => {
    setupdateTicket(!updateTicket);
  };

  const data = useSelector((state: ReducerState) => state.api.data);
  const request = useSelector((state: ReducerState) => state.api.request);

  const dispatch = useDispatch();

  let tableData;

  useEffect(() => {
    dispatch(loadData("setting"));
  }, [dispatch]);

  if (data.setting) {
    tableData = data.setting.list;
  }

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Mã gói",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Tên gói vé",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày áp dụng",
      key: "dateStart",
      dataIndex: "dateStart",
    },
    {
      title: "Ngày hết hạn",
      key: "dateEnd",
      dataIndex: "dateEnd",
    },
    {
      title: "Giá vé (VNĐ/Vé)",
      key: "priceTicket",
      dataIndex: "priceTicket",
    },
    {
      title: "Giá Combo (VNĐ/Combo)",
      key: "prireCombo",
      dataIndex: "prireCombo",
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "status",

      render: (status: "open" | "end") => {
        let children: string = "open";
        if (status === "open") {
          children = "Đang áp dụng";
        }
        if (status === "end") {
          children = "Tắt";
        }
        return <Status status={status}>{children}</Status>;
      },
    },
    {
      title: "",
      dataIndex: "code",
      key: "code",
      render: (code: string) => <UpdateButton onClick={handleClickUpdate} />,
    },
  ];
  return (
    <Row className={style.pageWapper}>
      <div className={style.wapper}>
        <span className={style.header}>Danh sách gói vé</span>
        <div className={style.search}>
          <Search
            placeholder="Tìm bằng số vé"
            background="#F7F7F8"
            width={446}
          />
          <div className={style.buttonWaper}>
            <Button type="outline" size="xl" marginRight={10}>
              Xuất file (.csv)
            </Button>
            <Button type="fill" size="xl" onClick={handleClickAdd}>
              Thêm gói vé
            </Button>
          </div>
        </div>
        <TableCustom data={tableData} columns={columns} request={request} />
      </div>
      {addTicket && <AddTicket exists={handleClickAdd} />}
      {updateTicket && <UpdateTicket exists={handleClickUpdate} />}
    </Row>
  );
}

export default Setting;
