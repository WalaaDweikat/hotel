import "./tail.css";
import "../Button/index.js";
import Button from "../../Components/Button/index.js";
export default function Tail(props) {
  return (
    <div className="tail">
      <div>
        <button className="plus">+</button>
        <p>VIEW ROOM DETAILS</p>
      </div>
      <Button name={props.name} f={undefined} />
    </div>
  );
}
