import vectorSquare from "../../../../assets/svg/icon/vectorSquare.svg";
import vectorV from "../../../../assets/svg/icon/vectorV.svg";
import style from "./mailIcon.module.scss";

function MailIcon() {
  return (
    <div className={style.mail}>
      <img src={vectorV} alt="" className={style.vectorv} />
      <img src={vectorSquare} alt="" className={style.vectorsquare} />
    </div>
  );
}

export default MailIcon;
