import "./context.css";
import Button from "../Button/index.js";

export default function Context(props) {
  return (
    <div className="context">
      <div className="firstCol">
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
        <Button name="EXPLORE" f={undefined} />
      </div>

      <div className="secondCol">
        <img src={props.src} alt="" />
      </div>
    </div>
  );
}
