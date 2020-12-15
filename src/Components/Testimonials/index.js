import { useEffect, useState } from "react";
import "./Testimonials.css";
export default function Testimonials() {
  const arrayT = [
    "Calm, Serene, Retro – What a way to relax and enjoy",
    "You guys rocked on the sculpture project.Thanks so much for doing a great job!",
    "Calm, Serene, Retro –Good",
  ];
  const names = [
    "Mr. and Mrs. Baxter, UK",
    "George Washington, USA",
    "Mr. and Mrs. Ali, UAE",
  ];
  const [T, setT] = useState(arrayT[0]);
  const [i, setI] = useState(0);
  const [n, setN] = useState(names[0]);
  const next = () => {
    let a = i + 1;
    setI(a);
    if (a > 2) setI(0);
  };
  const previous = () => {
    let a = i - 1;
    setI(a);
    if (a < 0) setI(2);
  };
  useEffect(() => {
    setT(arrayT[i]);
    setN(names[i]);
  }, [i]);
  return (
    <div className="Testimonials">
      <h1>Testimonials</h1>
      <p>
        {T}
        <br></br>
        <span>{n}</span>
      </p>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>{"<"}</button>
        <p style={{ width: "15px" }}></p>
        <button onClick={next}>{">"}</button>
      </div>
    </div>
  );
}
