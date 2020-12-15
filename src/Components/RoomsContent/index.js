import "./RC.css";
import Tail from "../Tail/index.js";
export default function RoomsContent(props) {
  return (
    <div className="rc">
      <div className="rcContainer">
        <img src={props.src} alt={props.caption} />
        <p>{props.caption}</p>
      </div>
      <Tail name={props.name} />
    </div>
  );
}
