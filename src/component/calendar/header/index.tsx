import { Radio } from "antd";
import style from "./header.module.scss";
import frev from "../../../assets/svg/icon/frev.svg";
import next from "../../../assets/svg/icon/next.svg";

interface HeaderRenderType {
  value: moment.Moment;
  onChange: (value: moment.Moment) => void;
}

const HeaderRender = ({ value, onChange }: HeaderRenderType) => {
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const month = value.month();

  const year = value.year();

  const frevClick = () => {
    const newMonth = month - 1;
    const newValue = value.clone();
    newValue.month(newMonth);
    onChange(newValue);
  };
  const nextClick = () => {
    const newMonth = month + 1;
    const newValue = value.clone();
    newValue.month(newMonth);
    onChange(newValue);
  };

  return (
    <div style={{ padding: 8 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={frev}
          alt=""
          onClick={frevClick}
          className={style.icon}
          style={{ marginRight: 16 }}
        />
        <span className={style.label}>
          {months[month]},{year}
        </span>
        <img
          src={next}
          alt=""
          onClick={nextClick}
          className={style.icon}
          style={{ marginLeft: 16 }}
        />
      </div>

      <Radio.Group className={style.radioGroup} size="large">
        <Radio className={style.radio} value="date">
          Theo ngày
        </Radio>
        <Radio className={style.radio} value="month">
          Theo tuần
        </Radio>
      </Radio.Group>
    </div>
  );
};

export default HeaderRender;
