import { Calendar } from "antd";
import moment from "moment";
import "moment/locale/vi";
import locale from "antd/lib/date-picker/locale/vi_VN";
import style from "./calendar.module.scss";
import HeaderRender from "./header";
import "./calendar.scss";
import clsx from "clsx";

function CalendarCustom() {
  moment.locale("vi");

  let selectedValue: moment.Moment;

  const DateFullCellRender = (value: moment.Moment) => {
    console.log(value);
    return (
      <div>
        <span className={style.date}>{value.date()}</span>
      </div>
    );
  };

  const handleSelected = (value: moment.Moment) => {
    selectedValue = value;
    console.log(selectedValue);
  };

  return (
    <div className={style.wapper}>
      <Calendar
        className={clsx(style.calendar, "calendar-custom")}
        fullscreen={false}
        locale={locale}
        headerRender={HeaderRender}
        // dateFullCellRender={DateFullCellRender}
        onSelect={handleSelected}
      />
    </div>
  );
}

export default CalendarCustom;
