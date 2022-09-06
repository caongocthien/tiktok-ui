import classname from "classnames/bind";
import style from "./Poper.module.scss";

const cx = classname.bind(style);
function Wrapper({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}

export default Wrapper;
