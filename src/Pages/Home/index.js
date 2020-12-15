import "./Home.css";
import axios from "axios";
import Title from "../../Components/Title/index.js";
import Button from "../../Components/Button/index.js";
import Scroll from "../../Components/Scroll/index.js";
import Context from "../../Components/Context/index.js";
import Testimonials from "../../Components/Testimonials/index.js";
import Footer from "../../Components/Footer/index.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [src1, setSrc1] = useState("");
  const [src2, setSrc2] = useState("");

  useEffect(() => {
    if (src1 === "" && src2 === "") {
      axios
        .get("https://picsum.photos/id/999/510/370")
        .then((res) => {
          setSrc1(res.config.url);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get("https://picsum.photos/id/638/510/370")
        .then((res) => {
          setSrc2(res.config.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className="homeContainer">
      <div className="backgroundHome">
        <div className="p1">
          <Title />
          <div className="btnScroll">
            <Button name="BOOK NOW" f={1} />
            <div className="none">
              <Scroll />
            </div>
          </div>
        </div>
      </div>
      <div className="p2">
        <p className="para" id="para">
          All our room types are including complementary breakfast
        </p>
        <Context
          src={src1}
          title="Luxury redefined"
          paragraph="Our rooms are designed to transport 
          you into an environment made for leisure. 
          Take your mind off the day-to-day of home 
          life and find a private paradise for yourself."
        />
        <Context
          src={src2}
          title="Leave your worries in the sand"
          paragraph="We love life at the beach. Being close
          to the ocean with access to endless sandy
          beach ensures a relaxed state of mind. It 
          seems like time stands still watching the 
          ocean. "
        />
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}
