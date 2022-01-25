import { Row, Col, Radio, Space } from "antd";
import dateGrey from "../../../assets/svg/icon/dateGrey.svg";
import date from "../../../assets/svg/icon/date.svg";

import Fill from "../../../component/fill";
import style from "./fillterManage.module.scss";
import Button from "../../../component/Button";
import { useState } from "react";
import CalendarCustom from "../../../component/calendar";

function FillterManage() {
  const [todate, setTodate] = useState(false);
  const [fromdate, setFromdate] = useState(false);

  const handleClickToDate = () => {
    setTodate(!todate);
  };

  const handleClickFromDate = () => {
    setFromdate(!fromdate);
  };

  return (
    <div className={style.wapper}>
      <span className={style.title}>Lọc vé</span>
      <Row>
        <Col flex="1">
          <span className={style.label}>Tình trạng đối soát</span>
        </Col>
        <Col flex="1">
          <Radio.Group size="large" defaultValue={1}>
            <Space direction="vertical">
              <Radio value={1} className={style.radio}>
                Tất cả
              </Radio>
              <Radio
                value={2}
                className={style.radio}
                style={{ marginTop: "7px" }}
              >
                Đã đối soát
              </Radio>
              <Radio
                value={3}
                className={style.radio}
                style={{ marginTop: "7px" }}
              >
                Chưa đối soát
              </Radio>
            </Space>
          </Radio.Group>
        </Col>
      </Row>
      <Row style={{ marginTop: "26px" }}>
        <Col flex="1">
          <span className={style.label}>Loại vé</span>
        </Col>
        <Col flex="1">
          <span className={style.radio}>Vé cổng</span>
        </Col>
      </Row>
      <Row style={{ marginTop: "26px" }}>
        <Col flex="1">
          <span className={style.label}>Từ ngày</span>
        </Col>
        <Col flex="1">
          <Fill
            type="disable"
            icon={dateGrey}
            className={style.fill}
            onClick={handleClickToDate}
          >
            01/05/2021
            {todate && (
              <CalendarCustom
                className={style.calendar}
                handleOnSelect={handleClickToDate}
              />
            )}
          </Fill>
        </Col>
      </Row>
      <Row style={{ marginTop: "26px" }}>
        <Col flex="1">
          <span className={style.label}>Đến ngày</span>
        </Col>
        <Col flex="1">
          <Fill
            type="disable"
            icon={date}
            className={style.fillOn}
            onClick={handleClickFromDate}
          >
            dd/mm/yy
            {fromdate && (
              <CalendarCustom
                className={style.calendar}
                handleOnSelect={handleClickFromDate}
              />
            )}
          </Fill>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "32px" }}>
        <Button type="outline" size="xl" className={style.button}>
          Lọc
        </Button>
      </Row>
    </div>
  );
}

export default FillterManage;
