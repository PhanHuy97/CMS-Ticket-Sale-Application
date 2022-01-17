import React from "react";
import style from "./updateButton.module.scss";
import update1 from "../../../assets/svg/icon/update1.svg";
import update2 from "../../../assets/svg/icon/update2.svg";

interface UpdateType {
  onClick?: () => void;
}

function UpdateButton({ onClick }: UpdateType) {
  return (
    <div className={style.wapper} onClick={onClick}>
      <div className={style.icon}>
        <img src={update1} alt="" />
        <img
          src={update2}
          alt=""
          style={{ position: "absolute", top: 5, left: 6 }}
        />
      </div>
      <span className={style.label}>Cập nhật</span>
    </div>
  );
}

export default UpdateButton;
