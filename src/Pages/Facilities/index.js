import "./facilities.css";
import Title from "../../Components/Title/index.js";
import Button from "../../Components/Button/index.js";
import Scroll from "../../Components/Scroll/index.js";
import Testimonials from "../../Components/Testimonials/index.js";
import Footer from "../../Components/Footer/index.js";
import FacilitiesContent from "../../Components/FacilitiesContent/index.js";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [src1, setSrc1] = useState("");
  const [src2, setSrc2] = useState("");
  const [src3, setSrc3] = useState("");
  const [src4, setSrc4] = useState("");
  const [src5, setSrc5] = useState("");
  const [src6, setSrc6] = useState("");

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
    axios_xhr(500, setSrc1);
    axios_xhr(111, setSrc2);
    axios_xhr(11, setSrc3);
    axios_xhr(33, setSrc4);
    axios_xhr(163, setSrc5);
    axios_xhr(99, setSrc6);
  }, []);

  return (
    <div className="homeContainer">
      <div className="backgroundFacilities">
        <div className="p1">
          <Title></Title>
          <div className="btnScroll">
            <Button name="BOOK NOW" f={1} />
            <Scroll></Scroll>
          </div>
        </div>
      </div>
      <p className="Wewant" id="para">
        <span>FACILITIES</span>
        <br />
        We want your stay at our lush hotel to be truly unforgettable. That is
        why we give special attention to all of your needs so that we can ensure
        an experience quite uniquw. Luxury hotels offers the perfect setting
        with stunning views for leisure and our modern luxury resort facilities
        will help you enjoy the best of all.
      </p>
      <FacilitiesContent figsrc={src1} caption="THE GYM" />
      <FacilitiesContent figsrc={src2} caption="POOLSIDE BAR" />
      <FacilitiesContent figsrc={src3} caption="THE SPA" />
      <FacilitiesContent figsrc={src4} caption="SWIMMING POOL" />
      <FacilitiesContent figsrc={src5} caption="RESTAURANT" />
      <FacilitiesContent figsrc={src6} caption="LAUNDRY" />
      <Testimonials />
      <Footer />
    </div>
  );
}
