import "./rooms.css";
import Title from "../../Components/Title/index.js";
import Button from "../../Components/Button/index.js";
import Scroll from "../../Components/Scroll/index.js";
import Testimonials from "../../Components/Testimonials/index.js";
import Footer from "../../Components/Footer/index.js";
import RoomsContent from "../../Components/RoomsContent/index.js";

import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [src1, setSrc1] = useState("");
  const [src2, setSrc2] = useState("");
  const [src3, setSrc3] = useState("");

  const axios_xhr = (x, setSRC) => {
    axios
      .get("https://picsum.photos/id/" + x + "/994/700")
      .then((res) => {
        setSRC(res.config.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios_xhr(121, setSrc1);
    axios_xhr(5, setSrc2);
    axios_xhr(3, setSrc3);
  }, []);

  return (
    <div className="homeContainer">
      <div className="backgroundRooms">
        <div className="p1">
          <Title></Title>
          <div className="btnScroll">
            <Button name="BOOK NOW" f={1} />
            <Scroll></Scroll>
          </div>
        </div>
      </div>
      <p className="Wewant" id="para">
        <span>ROOMS AND RATES</span>
        <br />
        Each of our bright, light-flooded rooms come with everything you could
        possibly need for a comfortable stay. And yes, comfort isn’t our only
        objective, we also value good design, sleek contemporary furnishing
        complemented by the rich tones of nature’s palette as visible from our
        rooms’ sea-view windows and terraces.
      </p>
      <RoomsContent name="$147  Avg/night" src={src1} caption="SINGLE ROOM" />
      <RoomsContent name="$155  Avg/night" src={src2} caption="DOUBLE ROOM" />
      <RoomsContent name="$155  Avg/night" src={src3} caption="TWIN ROOM" />

      <Testimonials />
      <Footer />
    </div>
  );
}
