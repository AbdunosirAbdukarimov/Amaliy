import { useDispatch } from "react-redux";
import { onShow } from "../../../slice/auth";
import "./Regbutton.scss";

function Regbutton() {
  const dispatch = useDispatch();

  const Click = () => {
    dispatch(onShow())
    console.log(onShow)
  };
  return (
    <>
      <button onClick={() => Click()} className="register"></button>
      
    </>
  );
}

export default Regbutton;
