import { Calendar } from "antd";
import { useState } from "react";
import { Radio } from "antd";
import frev from "../../assets/svg/icon/frev.svg";
import next from "../../assets/svg/icon/next.svg";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import moment from "moment";
import "moment/locale/vi";
import locale from "antd/lib/date-picker/locale/vi_VN";
import style from "./calendar.module.scss";
import { changeHome } from "../../redux/action-creator";
import { ReducerState } from "../../redux/reducers";

interface HeaderRenderType {
  value: moment.Moment;
  onChange: (value: moment.Moment) => void;
}

interface CalendarCustomType {
  className?: string;
  handleOnSelect?: () => void;
}

function CalendarCustom({ className, handleOnSelect }: CalendarCustomType) {
  moment.locale("vi");

  const [selected, setSeleted] = useState(moment());
  const dispatch = useDispatch();
  const state = useSelector((state: ReducerState) => state.home);

  const HeaderRender = ({ value, onChange }: HeaderRenderType) => {
    const handleOnChange = (e: any) => {
      dispatch(changeHome(e.target.value));
    };

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

        <Radio.Group
          className={style.radioGroup}
          size="large"
          defaultValue={state}
          onChange={handleOnChange}
        >
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

  const DateFullCellRender = (value: moment.Moment) => {
    if (state === "date") {
      return (
        <div
          className={clsx(style.dateWapper, {
            [style.selectedDate]: selected.calendar() === value.calendar(),
          })}
        >
          <span
            className={clsx(style.date, {
              [style.dateSelect]: selected.calendar() === value.calendar(),
            })}
          >
            {value.date()}
          </span>
        </div>
      );
    } else {
      return (
        <div
          className={clsx(style.dateWapper, {
            [style.selectedWeek]: selected.week() === value.week(),
            [style.weekFirst]:
              selected.week() === value.week() && value.weekday() === 0,
            [style.weekLast]:
              selected.week() === value.week() && value.weekday() === 6,
          })}
        >
          <span
            className={clsx(style.date, {
              [style.dateSelect]: selected.week() === value.week(),
            })}
          >
            {value.date()}
          </span>
        </div>
      );
    }
  };

  return (
    <div
      className={clsx(style.wapper, className)}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Calendar
        className={clsx(style.calendar, "calendar-custom")}
        fullscreen={false}
        locale={locale}
        headerRender={HeaderRender}
        dateFullCellRender={DateFullCellRender}
        onSelect={(value) => {
          setSeleted(value);
          if (handleOnSelect) {
            handleOnSelect();
          }
        }}
      />
    </div>
  );
}

export default CalendarCustom;
