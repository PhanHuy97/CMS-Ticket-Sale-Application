import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../../redux/action-creator";
import { ReducerState } from "../../../redux/reducers";
import style from "./total.module.scss";

function Total() {
  const data = useSelector((state: ReducerState) => state.api.data);

  let total = 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData("totalWeek"));
  }, [dispatch]);

  if (data.totalWeek) {
    total = data.totalWeek.april;
  }

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div style={{ marginTop: "38px" }}>
      <span className={style.title}>Tổng doanh thu theo tuần</span>
      <div className={style.waper}>
        <span className={style.number}>{numberWithCommas(total)}</span>
        <span className={style.unit}>đồng</span>
      </div>
    </div>
  );
}

export default Total;
