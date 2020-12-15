import "./FC.css";
export default function FacilitiesContent(props) {
  return (
    <div className="figContainer">
      <img src={props.figsrc} alt={props.caption} />
      <p>{props.caption}</p>
    </div>
  );
}
