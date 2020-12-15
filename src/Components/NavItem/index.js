import "./NavItem.css";
export default function NavItem(props) {
  return (
    <li className="navItem" id={props.id}>
      {props.item}
    </li>
  );
}
