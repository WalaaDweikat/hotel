import "./form.css";
import Input from "../Input/index.js";
export default function Form() {
  return (
    <div className="form">
      <Input type="text" name="Name" id="name" />
      <Input type="email" name="Email Address" id="email" />
      <div className="input">
        <label for="message">Message</label>
        <textarea id="message" className="area" />
      </div>

      <button>Submit</button>
    </div>
  );
}
