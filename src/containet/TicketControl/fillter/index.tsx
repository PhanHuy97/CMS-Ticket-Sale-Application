import { useState } from "react";
import { Checkbox } from "antd";
import Fill from "../../../component/fill";
import style from "./fillter.module.scss";
import date from "../../../assets/svg/icon/date.svg";
import { Radio } from "antd";
import Button from "../../../component/Button";
import CalendarCustom from "../../../component/calendar";

interface FillterType {
  exists: () => void;
}

function Fillter({ exists }: FillterType) {
  const [checkboxAll, setCheckboxAll] = useState(false);

  const checkboxAllChange = (e: any) => {
    setCheckboxAll(e.target.checked);
  };

  const handleSubmit = (e: any) => {
    exists();
  };

  const [toDate, setToDate] = useState(false);

  const [fromDate, setFromDate] = useState(false);

  const handleClickToDate = () => {
    setToDate(!toDate);
  };

  const handleClickFromDate = () => {
    setFromDate(!fromDate);
  };

  return (
    <div className={style.modal} onClick={exists}>
      <div
        className={style.waper}
        onClick={(e: any) => {
          e.stopPropagation();
        }}
      >
        <span className={style.title}>Lọc vé</span>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "122px" }}>
            <span className={style.label}>Từ ngày</span>
            <Fill type="normal" icon={date} border onClick={handleClickToDate}>
              01/04/2021
              {toDate && (
                <CalendarCustom
                  className={style.calendar}
                  handleOnSelect={handleClickToDate}
                />
              )}
            </Fill>
          </div>
          <div>
            <span className={style.label}>Đến ngày</span>
            <Fill
              type="normal"
              icon={date}
              border
              onClick={handleClickFromDate}
            >
              01/04/2021
              {fromDate && (
                <CalendarCustom
                  className={style.calendar}
                  handleOnSelect={handleClickFromDate}
                />
              )}
            </Fill>
          </div>
        </div>
        <span className={style.status}>Tình trạng sử dụng</span>
        <Radio.Group className={style.radioGroup} size="large">
          <Radio value={1} className={style.radio}>
            Tất cả
          </Radio>
          <Radio value={2} className={style.radio}>
            Đã sử dụng
          </Radio>
          <Radio value={3} className={style.radio}>
            Chưa sử dụng
          </Radio>
          <Radio value={4} className={style.radio}>
            Hết hạn
          </Radio>
        </Radio.Group>
        <span className={style.status}>Cổng Check - in</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          <Checkbox className={style.checkbox} onChange={checkboxAllChange}>
            Tất cả
          </Checkbox>
          <Checkbox className={style.checkbox} disabled={checkboxAll}>
            Cổng 1
          </Checkbox>
          <Checkbox className={style.checkbox} disabled={checkboxAll}>
            Cổng 2
          </Checkbox>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox className={style.checkbox} disabled={checkboxAll}>
            Cổng 3
          </Checkbox>
          <Checkbox className={style.checkbox} disabled={checkboxAll}>
            Cổng 4
          </Checkbox>
          <Checkbox className={style.checkbox} disabled={checkboxAll}>
            Cổng 5
          </Checkbox>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "38px",
          }}
        >
          <Button
            type="outline"
            size="xl"
            className={style.button}
            onClick={handleSubmit}
          >
            Lọc
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Fillter;
