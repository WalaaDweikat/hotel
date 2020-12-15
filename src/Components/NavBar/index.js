import "./NavBar.css";
export default function NavBar(props) {
  return (
    <ul className="navbar">
      {props.item1}
      {props.item2}
      {props.item3}
      {props.item4}
    </ul>
  );
}
