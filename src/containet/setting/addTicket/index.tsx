import { Checkbox, Col, Input, Row, Select } from "antd";
import Fill from "../../../component/fill";
import style from "./addTicket.module.scss";
import date from "../../../assets/svg/icon/date.svg";
import hous from "../../../assets/svg/icon/hous.svg";
import down from "../../../assets/svg/icon/down.svg";
import Button from "../../../component/Button";

interface AddTicketType {
  exists: () => void;
}

function AddTicket({ exists }: AddTicketType) {
  const { Option } = Select;
  return (
    <div className={style.modal} onClick={exists}>
      <div
        className={style.wapper}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span className={style.title}>Thêm gói vé</span>
        <Row style={{ marginBottom: 5 }}>
          <span className={style.label}>Tên gói vé </span>
          <span
            className={style.label}
            style={{ marginLeft: 4, color: "#FD5959" }}
          >
            *
          </span>
        </Row>
        <Input placeholder="Nhập tên gói vé" className={style.input} />
        <Row>
          <Col flex="1">
            <span className={style.label}>Ngày áp dụng</span>
            <Row style={{ marginBottom: 5 }}>
              <Fill icon={date} type="normal" className={style.button}>
                dd/mm/yy
              </Fill>
              <div style={{ marginRight: 8 }}></div>
              <Fill icon={hous} type="normal" className={style.button}>
                hh:mm:ss
              </Fill>
            </Row>
          </Col>
          <Col flex="1">
            <span className={style.label}>Ngày hết hạn</span>
            <Row style={{ marginBottom: 5 }}>
              <Fill icon={date} type="normal" className={style.button}>
                dd/mm/yy
              </Fill>
              <div style={{ marginRight: 8 }}></div>
              <Fill icon={hous} type="normal" className={style.button}>
                hh:mm:ss
              </Fill>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: 24 }}>
          <span className={style.label}>Giá vé áp dụng</span>
        </Row>
        <Row style={{ marginTop: 5, alignItems: "center" }}>
          <Checkbox className={style.checkbox}>Vé lẻ (vnđ/vé) với giá</Checkbox>
          <Input placeholder="Giá vé" className={style.ticketInput} />
          <span className={style.ticket}>/ vé</span>
        </Row>
        <Row style={{ marginTop: 12, alignItems: "center" }}>
          <Checkbox className={style.checkbox}>Combo vé với giá</Checkbox>
          <Input placeholder="Giá vé" className={style.ticketInput} />
          <span className={style.ticket}>/</span>
          <Input
            placeholder="Giá vé"
            className={style.ticketInput}
            style={{ width: 72 }}
          />

          <span className={style.ticket}> vé</span>
        </Row>
        <Row style={{ marginTop: 24, marginBottom: 5 }}>
          <span className={style.label}>Tình trạng</span>
        </Row>
        <Select
          defaultValue="Đang áp dụng"
          className={style.select}
          bordered={false}
          suffixIcon={<img src={down} className={style.icon} />}
        >
          <Option value="Đang áp dụng">Đang áp dụng</Option>
          <Option value="Tắt">Tắt</Option>
        </Select>
        <Row style={{ marginTop: 17, marginBottom: 27, alignItems: "center" }}>
          <span
            className={style.label}
            style={{ marginRight: 4, color: "#FD5959" }}
          >
            *
          </span>
          <span className={style.note}>là thông tin bắt buộc</span>
        </Row>
        <Row justify="center">
          <Button
            type="outline"
            size="xl"
            className={style.buttonAdd}
            marginRight={23}
            onClick={exists}
          >
            Huỷ
          </Button>
          <Button
            type="fill"
            size="xl"
            className={style.buttonAdd}
            onClick={exists}
          >
            Lưu
          </Button>
        </Row>
      </div>
    </div>
  );
}

export default AddTicket;
