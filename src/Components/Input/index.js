import "./input.css";
export default function Input(props) {
  return (
    <div className="input">
      <label for={props.id}>{props.name}</label>
      <input type={props.type} id={props.id} />
    </div>
  );
}
